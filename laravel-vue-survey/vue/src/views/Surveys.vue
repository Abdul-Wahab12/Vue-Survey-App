<template>
  <PageComponent>
    <template #header>
      <div class="flex justify-between items-center">
        <h1 class="text-3xl font-bold text-gray-900">Surveys</h1>
        <router-link :to="{ name: 'SurveyCreate' }"
          class="py-2 px-3 text-white bg-emerald-500 rounded-md hover:bg-emerald-600">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            class="w-4 h-4 -mt-1 inline-block">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>

          Add new Survey
        </router-link>
      </div>
    </template>
  </PageComponent>
  <div class="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
    <div v-for="survey in surveys" :key="survey.id"
      class="flex flex-col h-[470px] py-4 px-6 shadow-md bg-white hover:bg-gray-50">
      <img :src="survey.image" alt="" class="w-full h-48 object-cover">
      <h4 class="mt-4 text-lg font-bold">{{ survey.title }}</h4>
      <div v-html="survey.description" class="overflow-hidden flex-1"></div>
      <div class="flex justify-between items-center mt-3">
        <router-link :to="{ name: 'SurveyView', params: { id: survey.id } }"
          class="flex py-2 px-4 border border-transparent text-sm rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke-width="1.5" 
            stroke="currentColor"
            class="w-5 h-5 mr-2"
          >
            <path 
              stroke-linecap="round" 
              stroke-linejoin="round"
              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" 
            />
          </svg>

          Edit
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import PageComponent from '../components/PageComponent.vue';
import { computed } from 'vue';
import store from '../store';


const surveys = computed(() => store.state.surveys);
</script>

<style scoped></style>