<template>
    <PageComponent>
        <template #header>
            <div class="flex items-center justify-between">
                <h1 class="text-3xl font-bold text-gray-900">
                    {{ model.id ? model.title : "Create a Survey" }}
                </h1>
            </div>
        </template>
    </PageComponent>
</template>

<script setup>
import store from '../store';
import { ref } from 'vue';
import { useRoute } from 'vue-router';

import PageComponent from '../components/PageComponent.vue';

const route = useRoute();

// Create empty survey
let model = ref({
    title: "",
    status: false,
    description: null,
    image: null,
    expire_date: null,
    questions: [],
});

if(route.params.id) {
    model.value = store.state.surveys.find(
        (s) => s.id === parseInt(route.params.id)
    )
    console.log("Model Value:",model.value)
}
</script>

<style scoped>

</style>