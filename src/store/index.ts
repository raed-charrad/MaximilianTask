import { createStore} from 'vuex';
const store = createStore({
    state() {
        return {
            memories: [
                {
                    id: "1",
                    title: "First Memory",
                    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Mighty_Mountains_with_Snow.jpg/640px-Mighty_Mountains_with_Snow.jpg",
                    description: "This is the first memory",
                },
                {
                    id: "2",
                    title: "Second Memory",
                    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/A_surfer_surfing_on_the_ocean_%28Unsplash%29.jpg/640px-A_surfer_surfing_on_the_ocean_%28Unsplash%29.jpg",
                    description: "This is the second memory",
                },
                {
                    id: "3",
                    title: "Third Memory",
                    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Indian_-_Food.jpg/640px-Indian_-_Food.jpg",
                    description: "This is the third memory",
                },
                {
                    id: "4",
                    title: "Fourth Memory",
                    image: "https://www.w3schools.com/images/lamp.jpg",
                    description: "This is the fourth memory",
                }
                
            ]
        };
    },
    mutations: {
        addMemory(state, memoryData) {
            const newMemory = {
                id: new Date().toISOString(),
                title: memoryData.title,
                image: memoryData.image,
                description: memoryData.description
            };
            state.memories.unshift(newMemory);
        },
        deleteMemory(state, memoryId) {
            const memories = state.memories.filter((memory) => memory.id !== memoryId);
            state.memories = memories;
        },
        editMemory(state : any, memoryData: any) {
            const memoryIndex = state.memories.findIndex((memory : any) => memory.id === memoryData.memoryId);
            const memory = state.memories[memoryIndex];
            memory.title = memoryData.title;
            memory.image = memoryData.image;
            memory.description = memoryData.description;
        }
        
    },
    actions: {
        addMemory(context, memoryData) {
            context.commit('addMemory', memoryData);
        },
        deleteMemory(context, memoryId) {
            context.commit('deleteMemory', memoryId);
        },
        editMemory(context:any, memoryData :any ) {
            context.commit('editMemory', memoryData);
        }

    },
    
    getters: {
        memories(state) {
            return state.memories;
        },
        memory(state) {
            return (memoryId: string) => {
                return state.memories.find((memory) => memory.id === memoryId);
            };
        }

    }
});
export default store;