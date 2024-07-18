<template>
    <router-view v-slot="{ Component, route }">

        <div :key="route.name">

            <Component :is="Component" />
        </div>
    </router-view>
</template>

<style>
@import "../css/app.css";

html {
    width: 100vw;
    height: 100vh;
    background-color: black;
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    justify-content: center;
    justify-items: center;
}
</style>
