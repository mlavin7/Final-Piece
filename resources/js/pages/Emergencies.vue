<script setup>

import { ref } from 'vue';

const holdTimer = ref(null);

const activateAnchor = () => {
    // Your logic to activate the anchor goes here
    console.log('Anchor activated!');
};

const startHoldTimer = () => {

    holdTimer.value = setTimeout(() => {
        activateAnchor();
    }, 3000);
};



const cancelHoldTimer = () => {
    clearTimeout(holdTimer.value);
};

</script>




<template>
    <!-- Your existing template code -->

    <div v-if="isAlarmActive == false">
        <ul>
            <li class="buttoncont">
                <a class="anchor" href="tel:1444"
                    @mousedown="startHoldTimer"
                    @mouseup="cancelHoldTimer"
                    @mouseleave="cancelHoldTimer"
                >
                    {{ $t("Ambulance: 144") }}
                </a>
            </li>
            <li class="buttoncont">
                <a class="anchor" href="tel:1177"
                    @mousedown="startHoldTimer"
                    @mouseup="cancelHoldTimer"
                    @mouseleave="cancelHoldTimer"
                >
                    {{ $t("Police: 117") }}
                </a>
            </li>
            <li class="buttoncont">
                <a class="anchor" href="tel:1188"
                    @mousedown="startHoldTimer"
                    @mouseup="cancelHoldTimer"
                    @mouseleave="cancelHoldTimer"
                >
                    {{ $t("Fire service: 118") }}
                </a>
            </li>
            <li class="buttoncont">
                <a class="anchor" href="tel:1455"
                    @mousedown="startHoldTimer"
                    @mouseup="cancelHoldTimer"
                    @mouseleave="cancelHoldTimer"
                >
                    {{ $t("Tox-Center: 145") }}
                </a>
            </li>
        </ul>
    </div>



    <!-- Your existing template code -->
</template>te>




<style scoped>
@import "../../css/app.css";






li {
    gap: 10px;
}

li .anchor {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    justify-items: center;
    padding: 10px;
    height: 70px;
    width: 360px;
    border: 2px solid black;
    color: black;
    background-color: yellow;
    border-radius: 10px;
    text-decoration: none;
    font-size: 20px;
    font-weight: bolder;
    margin-top: 10px;
}

ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-items: center;
    align-items: center;

}


/* Your CSS styles go here */
</style>
