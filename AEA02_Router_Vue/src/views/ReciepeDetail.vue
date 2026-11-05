<template>
  <main v-if="plat" class="detail-page">
    <RouterLink to="/plats">&larr; Tornar a les receptes</RouterLink>
    <h1>{{ plat.name }}</h1>
    <p>{{ plat.desc }}</p>
  </main>
  <p v-else>Recepta no trobada.</p>
</template>
<script setup>
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()

const plats = ref([
  { id: 1, name: 'Pasta Carbonara', desc: 'Pasta cremosa amb ou, formatge, guanciale i pebre negre.' },
  { id: 2, name: 'Macarrons amb tomàquet', desc: 'Macarrons amb salsa de tomàquet casolana, all i alfàbrega.' },
  { id: 3, name: 'Spaghetti Bolognese', desc: 'Salsa de carn cuinada lentament amb tomàquet i herbes.' }
])

const plat = computed(() => plats.value.find((item) => item.id === Number(route.params.id)))
</script>

<style scoped>
.detail-page {
  max-width: 720px;
  margin: 2rem auto;
  padding: 0 1rem;
}

.detail-page a {
  color: #28664d;
}

.detail-page h1 {
  margin: 1.25rem 0 0.5rem;
  color: #203d34;
}

.detail-page p {
  color: #47574f;
  line-height: 1.6;
}
</style>