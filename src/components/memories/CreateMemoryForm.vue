<template>
    <form class="ion-padding" @submit.prevent="submitForm">
    <ion-list>
      <ion-item>
        <ion-label position="floating">Title</ion-label>
        <ion-input type="text" required v-model="enteredTitle" />
      </ion-item>
      <ion-item>
        <ion-thumbnail slot="start">
           <img :src="takenImageUrl" /> 
        </ion-thumbnail>
         <ion-button type="button" fill="clear" @click="takePhoto">
          <ion-icon slot="start" :icon="camera"></ion-icon>
          Take Photo
        </ion-button>
        <!-- <ion-label position="floating">Image</ion-label>
        <ion-input type="url" v-model="takenImageUrl" /> -->
      </ion-item>
      <ion-item>
        <ion-label position="floating">Description</ion-label>
        <ion-textarea rows:5 v-model="enteredDescription"></ion-textarea>
      </ion-item>
    </ion-list>
    <ion-button type="submit" expand="block">Save</ion-button>
  </form>
  <div></div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import {
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonTextarea,
  IonButton,
  IonThumbnail,
  IonIcon
} from "@ionic/vue";
import { camera } from 'ionicons/icons';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';

import { useRoute } from 'vue-router';
import store from '@/store';

export default defineComponent({
    emits: ['save-memory', 'edit-memory'],
    components: {
        IonList,
        IonItem,
        IonLabel,
        IonInput,
        IonTextarea,
        IonButton,
        IonThumbnail,
        IonIcon
    },
    watch: {
        '$route'(currentRoute){
            this.memoryId = currentRoute.params.memoryId
        }
    },
    computed: {
      memory(): any {
            return this.$store.getters.memory(this.memoryId)
        }
        
    },
    setup (_, { emit }) {
        let isEdit = false;
        const route = useRoute();
        if (store.getters.memory(route.params.memoryId)) {
            isEdit = true;
        }
        const enteredTitle = ref((store.getters.memory(route.params.memoryId)?.title)||'');
        const enteredDescription = ref((store.getters.memory(route.params.memoryId)?.description)||'');
        const takenImageUrl = ref((store.getters.memory(route.params.memoryId)?.image)||'');
        const takePhoto = async () =>  {
            const photo = await Camera.getPhoto({
                quality: 100,
                source: CameraSource.Camera,
                resultType: CameraResultType.Uri
            });
            takenImageUrl.value = photo.webPath || '';
        }
        const submitForm = () => {
            
            const memoryData = {
                title: enteredTitle.value,
                description: enteredDescription.value,
                image: takenImageUrl.value
            }
            if (isEdit) {
              (memoryData as any).memoryId = route.params.memoryId;
                emit('edit-memory', memoryData);
            } else {
                emit('save-memory', memoryData);
            }
        };
        return {
            submitForm,
            takePhoto,
            enteredTitle,
            enteredDescription,
            takenImageUrl,
            camera,
            memoryId: route.params.id
        }
    }
})
</script>

<style scoped>

</style>