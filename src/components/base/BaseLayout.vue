<template>
    <ion-page>
        <ion-header>

            <ion-toolbar>
                <ion-buttons slot="start" fill="clear" color="primary">
                    <ion-back-button slot="start" :default-href="pageDefaultBackPage"  text=""></ion-back-button>
                </ion-buttons>
                <ion-title>{{ pageTitle }}</ion-title>
                <ion-buttons slot="end" >
                    <slot name="actions-end"></slot>
                </ion-buttons>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <slot></slot>
        </ion-content>
    </ion-page> 
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { IonPage ,
    IonHeader,
    IonContent ,
    IonToolbar,
    IonTitle, 
    IonBackButton,
    IonButtons
} from '@ionic/vue'
export default defineComponent({
    props: ['pageTitle', 'pageDefaultBackPage'],
    components: {
        IonPage,
        IonHeader,
        IonContent,
        IonToolbar,
        IonTitle,
        IonBackButton,
        IonButtons
    },
    setup () {
        

        return {}
    }
})
</script>

<style scoped>

</style>