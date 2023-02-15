<template>
    <ion-page>
        <ion-header>

            <ion-toolbar>
                <ion-button slot="start" fill="clear" color="primary">
                    <ion-back-button slot="start" :default-href="pageDefaultBackPage"  text=""></ion-back-button>
                </ion-button>
                <ion-title>{{ pageTitle }}</ion-title>
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
    IonButton
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
        IonButton
    },
    setup () {
        

        return {}
    }
})
</script>

<style scoped>

</style>