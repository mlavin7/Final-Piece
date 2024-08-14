
<template>
    <router-view v-slot="{ Component, route }">

        <div class="divapp"  :key="route.name">

            <Component :is="Component" />
        </div>
    </router-view>
</template>

<style >
@import "../css/app.css";

html {
    width: 100vw;
    height: 100vh;
    background:
        linear-gradient(135deg, #0000 20.5%, #000000 0 29.5%, #0000 0) 0 6.5px,
        linear-gradient(45deg, #0000 8%, #000000 0 17%, #0000 0 58%) 13px 0,
        linear-gradient(135deg, #0000 8%, #000000 0 17%, #0000 0 58%, #000000 0 67%, #0000 0),
        linear-gradient(45deg, #0000 8%, #000000 0 17%, #0000 0 58%, #000000 0 67%, #0000 0 83%, #000000 0 92%, #0000 0),
        #1e1e1e;
    background-size: 26px 26px;
    
    display: flex;                                                                                                                                                           
    flex-direction: column;
    align-content: center;
    align-items: center;
    justify-content: center;
    justify-items: center;
}

.divapp {
   height: 100vh;
   width: 100vw ;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-items: center;
   align-content: center;

}
</style>
