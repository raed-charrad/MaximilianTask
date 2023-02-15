<template>
    <ion-list>
        <memory-list-item v-for="memory in memories" :key="memory.id" :memory="memory"></memory-list-item>  
    </ion-list>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { IonList } from '@ionic/vue';
import MemoryListItem from '@/components/memories/MemoryListItem.vue'
export default defineComponent({
    props: ['memories'],
    components: {
        IonList,
        MemoryListItem
    },
    setup () {
        

        return {}
    }
})
</script>

<style scoped>

</style>