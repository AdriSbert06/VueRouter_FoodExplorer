<template>
    <main class="home-page">
        <h1>Benvinguts a Food Explorer</h1>
        <p>Descobreix, explora i consulta delicioses receptes.</p>

        <img src="../../public/foto_Home.png" alt="Food Explorer" class="home-image" />
    </main>
</template>

<style scoped>
.home-page {
    display: flex;
    min-height: 80vh;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem 1rem;
    background: #f5f1e8;
    color: #203d34;
    font-family: "Trebuchet MS", Arial, sans-serif;
    text-align: center;
}

.home-page h1 {
    margin: 0 0 0.75rem;
    font-size: clamp(2rem, 5vw, 3.25rem);
}

.home-page p {
    margin: 0 0 1.75rem;
    color: #47574f;
    font-size: 1.15rem;
    line-height: 1.6;
}

.home-image {
    width: min(100%, 680px);
    max-height: 55vh;
    border-radius: 12px;
    object-fit: cover;
    box-shadow: 0 12px 30px rgb(32 61 52 / 18%);
}
</style>
