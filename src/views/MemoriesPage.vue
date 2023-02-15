<template>
    <base-layout pageTitle="All Memories">
        <template #actions-end>
            <ion-button router-link="/new-memory" fill="clear" color="primary">
                <ion-icon slot="icon-only" :icon="add"></ion-icon>
            </ion-button>
        </template>
        <memories-list :memories="memories"></memories-list>
    </base-layout>
        
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MemoriesList from '@/components/memories/MemoriesList.vue'
import { add } from 'ionicons/icons'
import { IonButton, IonIcon } from '@ionic/vue'

export default defineComponent({
    components: {
        MemoriesList,
        IonButton,
        IonIcon
    },

    computed: {
        memories(): any {
            return this.$store.getters.memories
        }
    },
    setup () {
        

        return {
            add
        }
    }
})
</script>

<style scoped>

</style>