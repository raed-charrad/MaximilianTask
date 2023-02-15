<template>
    <form class="ion-padding" @submit.prevent="submitForm">
    <ion-list>
      <ion-item>
        <ion-label position="floating">Title</ion-label>
        <ion-input type="text" required v-model="enteredTitle" />
      </ion-item>
      <ion-item>
        <!--<ion-thumbnail slot="start">
           <img :src="takenImageUrl" /> 
        </ion-thumbnail>
         <ion-button type="button" fill="clear" @click="takePhoto">
          <ion-icon slot="start" :icon="camera"></ion-icon>
          Take Photo
        </ion-button> -->
        <ion-label position="floating">Image</ion-label>
        <ion-input type="url" v-model="takenImageUrl" />
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
//   IonThumbnail,
//   IonIcon
} from "@ionic/vue";
import { camera } from 'ionicons/icons';

export default defineComponent({
    emits: ['save-memory'],
    components: {
        IonList,
        IonItem,
        IonLabel,
        IonInput,
        IonTextarea,
        IonButton,
        // IonThumbnail,
        // IonIcon
    },
    setup (_, { emit }) {
        
        const enteredTitle = ref('');
        const enteredDescription = ref('');
        const takenImageUrl = ref('');
        const submitForm = () => {
            const memoryData = {
                title: enteredTitle.value,
                description: enteredDescription.value,
                image: takenImageUrl.value
            }
            emit('save-memory', memoryData);
        };
        return {
            submitForm,
            enteredTitle,
            enteredDescription,
            takenImageUrl,
            camera
        }
    }
})
</script>

<style scoped>

</style>