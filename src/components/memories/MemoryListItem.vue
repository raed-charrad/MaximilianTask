<template>

    <ion-item-sliding  
                :router-link="`/memories/${memory.id}`"
                :key="memory.id"> 
                <ion-item>
                    <ion-thumbnail slot="start">
                        <ion-img :src="memory.image"></ion-img>
                    </ion-thumbnail>
                    <ion-label>
            
                        <h2>{{ memory.title }}</h2>
                    </ion-label>
                </ion-item>
        <ion-item-options side="end">
            <ion-item-option color="warning" class="center">
                <ion-button fill="clear" color="light" class="center" @click="updateMemory(memory.id)" >
                    <ion-icon :icon="pencil" ></ion-icon>
                </ion-button>
            </ion-item-option>
            <ion-item-option color="danger" class="center">
                <ion-button fill="clear" color="light"  class="center" @click="deleteMemory(memory.id)">
                    <ion-icon :icon="trash"></ion-icon>
                </ion-button>
            </ion-item-option>
        </ion-item-options>
    </ion-item-sliding>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {IonImg,
        IonThumbnail,
        IonLabel,
        IonItemOption, 
        IonItemOptions, 
        IonItemSliding,
        IonIcon,
        IonItem,
        IonButton

    } from '@ionic/vue'
import { archive, pencil, trash } from 'ionicons/icons';
import store from '@/store';
import { useRouter } from 'vue-router';

export default defineComponent({

    props: ['memory'],
    components: {
        IonImg,
        IonThumbnail,
        IonLabel,
        IonItemOption,
        IonItemOptions,
        IonItemSliding,
        IonIcon,
        IonItem,
        IonButton
        
    },
    setup () {
        const router = useRouter();

        const deleteMemory = (memoryId : string) => {
            store.dispatch('deleteMemory', memoryId)

        }
        const updateMemory = (memoryId : string) => {
            router.push({
                name: 'NewMemory',
                params: { memoryId:memoryId }
            })
        }       

        return {
            archive,
            pencil,
            trash,
            deleteMemory,
            updateMemory
        }
    }
})
</script>

<style scoped>
.center {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>