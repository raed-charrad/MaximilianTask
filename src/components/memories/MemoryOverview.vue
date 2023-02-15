<template>
    <ion-card >
        <ion-card-header>
            <ion-card-title>{{ memory.title }}</ion-card-title>
        </ion-card-header>
        <ion-card-content>
            <ion-img :src="memory.image"></ion-img>
            <p>{{ memory.description }}</p>
        </ion-card-content>
    </ion-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { 
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonImg
} from '@ionic/vue'
export default defineComponent({
    props: ['memory'],
    components: {
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonImg
 },
    setup () {
         

        return {}
    }
})
</script>

<style scoped>

</style>