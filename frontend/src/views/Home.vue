<template>
  <AuthLayout>
    <div class="d-flex justify-content-center align-items-center mt-5">
      <h2 class="fw-bolder">Notes List  
        <span class="badge rounded-pill text-bg-light" v-if="totalNotes > 0">{{ totalNotes }}</span>
      </h2>

    </div>
    <div v-if="noteStore.status" class="alert alert-sm alert-success alert-dismissible fade show" role="alert">
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      {{ noteStore.status }}
    </div>
    <div class="d-flex justify-content-center mt-2">
      <router-link :to="{ name: 'CreateNote' }" class="btn btn-sm btn-primary"><i class="bi bi-plus-circle"></i> Create
        Note</router-link>
    </div>

    <div v-if="!isNoteLoading" class="mb-5">
      <div class="d-flex flex-column flex-md-row p-4 gap-4 py-md-5 align-items-center justify-content-center">
        <div class="list-group">
          <router-link v-for="note in notes.data" :key="note.id" :to="{ path: `/notes/${note.id}/edit` }"
            class="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
            <div class="d-flex gap-2 w-100 justify-content-between">
              <div>
                <h6 class="mb-0 fw-bold">{{ note.title }}</h6>
                <p class="mb-0 opacity-75"> {{ note.body.slice(0, 50) }}{{ note.body.length > 50 ? '...' : '' }}
                </p>
              </div>
              <small class="opacity-50 text-nowrap">{{ note.updated_at }}</small>
            </div>
          </router-link>
        </div>


      </div>
      <div class="d-flex text-center justify-content-center">
        <Bootstrap5Pagination :data="notes" @pagination-change-page="getResults" />
      </div>
    </div>

    <div v-else class="text-center">
      <div class="spinner-border text-primary spinner-border-lg mt-5" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>

  </AuthLayout>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import { useAuthStore } from '@/store/auth'
import { useNoteStore } from '@/store/notes'
import { Bootstrap5Pagination } from 'laravel-vue-pagination';

import AuthLayout from '@/layout/AuthLayout.vue'

const authStore = useAuthStore();
const noteStore = useNoteStore()

const isNoteLoading = ref(false);
const notes = ref({})
const totalNotes = ref(0);


onMounted(async () => { await getResults() });

const getResults = async (page) => {
  isNoteLoading.value = true;
  await noteStore.getNotes(page)
  notes.value = noteStore.notes

  totalNotes.value = notes.value.meta.total
  isNoteLoading.value = authStore.loading;
}

onBeforeUnmount(() => {
  noteStore.status = ''
  noteStore.error = []
});

</script>

<style scoped>
@media (min-width: 768px) {
  .list-group-item-action {
    min-width: 500px;
  }
}

.list-group-item-action:hover {
  border-left-color: #000000;
}

.toast {
  background-color: #a4f5ac;
  color: black;
}

.pagination .page-item .page-link {
  padding: 5px 15px;
}
</style>
