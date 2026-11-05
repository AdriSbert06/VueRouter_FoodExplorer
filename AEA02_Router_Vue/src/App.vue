<template>
    <div class="">
        <nav class="flex  items-center p-4 bg-gray-100 gap-4">
            <p class="text-5xl">🍽️</p>
            <h1 class=" flex font-bold text-3xl">Food Explorer </h1>
            <div class="flex gap-4 ml-auto text-lg font-semibold mx-10">
                <RouterLink to="/" class="hover:text-green-600">Inici</RouterLink> 
                <RouterLink to="/plats" class="hover:text-green-600">Receptes</RouterLink>

            </div>
            
        </nav>
        <hr />
        <RouterView />
    </div>
</template>