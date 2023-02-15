<template>
    <base-layout pageTitle="All Memories">
        <memories-list :memories="memories"></memories-list>
    </base-layout>
        
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MemoriesList from '@/components/memories/MemoriesList.vue'
export default defineComponent({
    components: {
        MemoriesList
    },

    computed: {
        memories(): any {
            return this.$store.getters.memories
        }
    },
    setup () {
        

        return {
            
        }
    }
})
</script>

<style scoped>

</style>