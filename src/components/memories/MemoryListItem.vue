<template>
    <ion-item  
                        :router-link="`/memories/${memory.id}`"
                        :key="memory.id" 
                        > 
                <ion-thumbnail slot="start">
                    <ion-img :src="memory.image"></ion-img>
                </ion-thumbnail>
                <ion-label>
                    <h2>{{ memory.title }}</h2>
                </ion-label>
            </ion-item>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { IonItem ,
        IonImg,
        IonThumbnail,
        IonLabel
    } from '@ionic/vue'
export default defineComponent({
    props: ['memory'],
    components: {
        IonItem,
        IonImg,
        IonThumbnail,
        IonLabel,
        
    },
    setup () {
        

        return {}
    }
})
</script>

<style scoped>

</style>