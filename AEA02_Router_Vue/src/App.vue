<template>
    <div class="">
        <nav class="flex  items-center p-4 bg-gray-100 gap-4">
            <h1 class=" flex font-bold">Food Explorer </h1>
            <RouterLink to="/">Inici</RouterLink> | 
            <RouterLink to="/plats">Receptes</RouterLink>
        </nav>
        <hr />
        <RouterView />
    </div>
</template>