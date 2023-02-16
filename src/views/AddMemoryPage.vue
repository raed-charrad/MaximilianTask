<template>
    <base-layout pageTitle="Add a Memory" pageDefaultBackPage="/memories">
        <h2>Add a Memory</h2> 
        <create-memory-form @save-memory="saveMemory" @edit-memory="editMemory"></create-memory-form>
    </base-layout>
</template>

<script lang="ts">
import BaseLayout from '@/components/base/BaseLayout.vue'
import { defineComponent } from 'vue'
import CreateMemoryForm from '@/components/memories/CreateMemoryForm.vue';
import { useRoute } from 'vue-router';
import store from '@/store';
import router from '@/router';
export default defineComponent({
  components: { 
    BaseLayout,
    CreateMemoryForm
 },
    setup () {
        const route = useRoute();
        return {
            saveMemory(memoryData: any) {
                store.dispatch('addMemory', memoryData)
                router.replace('/memories')
            },
            editMemory(memoryData: any) {
                store.dispatch('editMemory', memoryData)
                router.replace('/memories')
            }
        }
    }
})
</script>

<style scoped>

</style>