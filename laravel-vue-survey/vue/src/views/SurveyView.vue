<template>
    <PageComponent>
        <template #header>
            <div class="flex items-center justify-between">
                <h1 class="text-3xl font-bold text-gray-900">
                    {{ model.id ? model.title : "Create a Survey" }}
                </h1>
            </div>
        </template>
        <form @submit.prevent="saveSurvey">
            <div class="shadow sm:rounded-md sm:overflow-hidden">
                <!-- Survey Fields Section Start-->
                <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                    <!-- Image Section Start -->
                    <div>
                        <label class="block text-sm font-medium text-gray-700">
                            Image
                        </label>
                        <div class="mt-1 flex items-center">
                            <img v-if="model.image" :src="model.image" :alt="model.title" class="w-64 h-48 object-cover" />
                            <span v-else
                                class="flex items-center justify-center h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="h-[80%] w-[80%] text-gray-300">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                </svg>

                            </span>
                            <button type="button"
                                class="relative overflow-hidden ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                <input type="file" class="absolute left-0 top-0 right-0 bottom-0 opacity-0 cursor-pointer">
                                Change
                            </button>
                        </div>
                    </div>
                    <!-- Image Section End -->

                    <!-- Title Section Start-->
                    <div>
                        <label for="title" class="block text-sm font-medium text-gray-500">
                            Title
                        </label>
                        <input type="text" name="title" id="title" v-model="model.title" autocomplete="survey_title"
                            class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>
                    <!-- Title Section End -->

                    <!-- Description Section Start-->
                    <div>
                        <label for="about" class="block text-sm font-medium text-gray-700">
                            Description
                        </label>
                        <div class="mt-1">
                            <textarea name="description" id="description" rows="3" v-model="model.description"
                                autocomplete="survey_description"
                                class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 w-full block sm:text-sm border border-gray-300 rounded-md"
                                placeholder="Describe your survey" />
                        </div>
                    </div>
                    <!-- Description Section End -->

                    <!-- Expire Date Section Start -->
                    <div>
                        <label for="expire_date" class="block text-sm font-medium text-gray-700">
                            Expire Date
                        </label>
                        <input type="date" name="expire_date" id="expire_date" v-model="model.expire_date"
                            class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md" />
                    </div>
                    <!-- Expire Date Section End -->

                    <!-- Status Section Start -->
                    <div class="flex items-start">
                        <div class="flex items-center h-5">
                            <input type="checkbox" id="status" name="status" v-model="model.status"
                                class="focus:ring-indigo-500 w-4 h-4 text-indigo-600 border-gray-300 rounded">
                        </div>
                        <div class="ml-3 text-sm">
                            <label for="status" class="font-medium text-gray-700">
                                Active
                            </label>
                        </div>
                    </div>
                    <!-- Status Section End-->
                </div>
                <!-- Surveys Fields Section End -->

                <!-- Add New Question Section Start -->
                <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                    <h3 class="text-2xl font-semibold flex items-center justify-between">
                        Questions
                        <button type="button" @click="addQuestion()"
                            class="flex items-center text-sm py-1 px-4 text-white rounded-sm bg-gray-600 hover:bg-gray-700">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>

                            Add Question
                        </button>
                    </h3>
                </div>
                <!-- Add New Question Section End -->
                <div v-if="!model.questions.length" class="text-center text-gray-600">
                    You don't have any questions created
                </div>

                <div v-for="(question, index) in model.questions" :key="question.id">
                    <QuestionEditor 
                        :question="question"
                        :index="index"
                        @change="questionChange"
                        @addQuestion="addQuestion"
                    />
                </div>
                <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button type="submit"
                        class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Save
                    </button>
                </div>
            </div>
        </form>
    </PageComponent>
</template>

<script setup>
import store from '../store';
import { ref } from 'vue';
import { useRoute } from 'vue-router';

import PageComponent from '../components/PageComponent.vue';
import QuestionEditor from '../components/editor/QuestionEditor.vue';

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

if (route.params.id) {
    model.value = store.state.surveys.find(
        (s) => s.id === parseInt(route.params.id)
    )
    console.log("Model Value:", model.value)
}
</script>

<style scoped></style>