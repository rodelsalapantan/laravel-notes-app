<template>
    <AuthLayout>
        <div class="d-flex justify-content-center align-items-center mt-5">
            <h2 class="fw-bolder">Create Note</h2>
        </div>
        <form @submit.prevent="noteStore.addNote(noteForm)">
            <div class="mb-3">
                <label for="title" class="form-label">Title</label>
                <input v-model="noteForm.title" type="text" name="" id="title" class="form-control" placeholder="Enter Title"
                    aria-describedby="helpId">
                <small v-if="noteStore.errors?.title" class="text-danger">{{ noteStore.errors?.title[0] }}</small>
            </div>
            <div class="mb-3">
                <textarea v-model="noteForm.body" class="form-control" rows="10" placeholder="Write something..."></textarea>
                <small v-if="noteStore.errors?.body" class="text-danger">{{ noteStore.errors?.body[0] }}</small>
            </div>
            <button class="btn btn-primary" type="submit">Create</button>
        </form>

    </AuthLayout>
</template>
  
<script setup>
import { ref } from 'vue'
import { useNoteStore } from '@/store/notes'

import AuthLayout from '@/layout/AuthLayout.vue'

const noteStore = useNoteStore()
const noteForm = ref({
    title: '',
    body: '',
})

</script>
