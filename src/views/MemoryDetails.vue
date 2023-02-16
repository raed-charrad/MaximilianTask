<template>
    <base-layout :page-title="memory ? memory.title : 'Loading...'" pageDefaultBackPage="/memories">
        <h2 v-if="!memory">Could not load memory for the given id</h2>
        <memory-overview v-else :memory="memory"></memory-overview>
    </base-layout>

</template>

<script lang="ts">
import BaseLayout from '@/components/base/BaseLayout.vue'
import { defineComponent } from 'vue'
import MemoryOverview from '@/components/memories/MemoryOverview.vue';

import { useRoute } from 'vue-router';
export default defineComponent({
  components: { 
    BaseLayout,
    MemoryOverview
 },
    watch: {
        '$route'(currentRoute){
            this.memoryId = currentRoute.params.id
        }
    },
    computed: {
        memory(): any {
            return this.$store.getters.memory(this.memoryId)
        }
    },
    setup () {
        const route = useRoute();
        
        return {
            memoryId: route.params.id
        }
    }
})
</script>

<style scoped>

</style>