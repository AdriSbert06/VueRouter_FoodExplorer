<script setup>
import { ref } from 'vue'
const plats = ref([
    { id: 1, name: 'Pasta Carbonara', desc: 'Pasta cremosa amb ou, formatge, guanciale i pebre negre.', imatge: '../../public/foto_Home.png' },
    { id: 2, name: 'Macarrons amb tomàquet', desc: 'Macarrons amb salsa de tomàquet casolana, all i alfàbrega.', imatge: '../../public/foto_Home.png' },
    { id: 3, name: 'Spaghetti Bolognese', desc: 'Salsa de carn cuinada lentament amb tomàquet i herbes.', imatge: '../../public/foto_Home.png' }
])
</script>
<template>
    <main class="recipe-page">
        <h1>Receptes</h1>
        <section class="recipe-grid" aria-label="Llista de receptes">
            <article v-for="plat in plats" :key="plat.id" class="recipe-card">
                <img :src="plat.imatge" :alt="plat.name" class="recipe-image" />
                <h2>{{ plat.name }}</h2>
                <p>{{ plat.desc }}</p>
                <RouterLink class="recipe-link" :to="`/plats/${plat.id}`">
                    Més informació
                </RouterLink>
            </article>
        </section>
    </main>
</template>

<style scoped>
.recipe-page {
    max-width: 960px;
    margin: 2rem auto;
    padding: 0 1rem;
}

.recipe-page > h1 {
    margin: 0 0 1.25rem;
    color: #203d34;
}

.recipe-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 240px), 1fr));
    gap: 1rem;
}

.recipe-card {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-height: 190px;
    padding: 1.25rem;
    border: 1px solid #d4dfd9;
    border-top: 4px solid #358363;
    border-radius: 6px;
    background: #fff;
}

.recipe-card h2 {
    margin: 0 0 0.5rem;
    color: #203d34;
    font-size: 1.2rem;
}

.recipe-card p {
    flex: 1;
    margin: 0 0 1rem;
    color: #47574f;
    line-height: 1.5;
}

.recipe-link {
    display: inline-block;
    padding: 0.6rem 0.85rem;
    border-radius: 4px;
    background: #a63d2f;
    color: #fff;
    font-weight: 600;
    text-decoration: none;
}

.recipe-link:hover {
    background: #842f25;
}

.recipe-link:focus-visible {
    outline: 3px solid #203d34;
    outline-offset: 3px;
}
</style>