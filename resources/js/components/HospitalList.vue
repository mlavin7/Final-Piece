<script setup>
import { useI18n } from 'vue-i18n';
import { onMounted } from 'vue';

let phoneList = null;
let mapList = null;
const { t } = useI18n();




onMounted(() => {
    phoneList = document.getElementById('phoneList');
    mapList = document.getElementById('mapList');
});

const showPhones = async () => {
    if (phoneList && mapList) {
        phoneList.style.display = 'block';
        console.log('block');
        mapList.style.display = 'none';
        console.log('showPhones');
    }
};

const showMap = async () => {
    if (phoneList && mapList) {
        phoneList.style.display = 'none';
        mapList.style.display = 'block';
    }
};

</script>


<template>

    <div div class="listButtonMap">

    <div class="phoneMap">


        <button class="buttonPhone" @click="showPhones()">
            {{ t('Telephone') }}
            <!-- on click show phone list -->
        </button>


        <button class="buttonMap" @click="showMap()">
            <!-- on click show map list -->
            {{ t('Map') }} </button>

    </div>


    <!--     v-if asociuated tioa a bottob givinn a value -->
    <ul class="phonesList" id="phoneList">
        <li class="li1"><a href="tel:+41 44 255 11 12">University Hospital Zurich</a></li>
        <!-- last nuber is modified add right number once app isn up -->
        <li class="li2"><a href="tel: +41444161112 "> Triemli City Hospital</a></li>
        <li class="li3"><a href="tel: +41442092112"> Hirslanden Klinik Im Park</a></li>
        <li class="li4"> <a href="tel:+41443861112">Hospital Balgrist University</a></li>
        <li class="li5"> <a href="tel: +41443857171 ">Schulthess Clinic</a></li>
        <li class="li6"> <a href=" tel: +41443662112">Waid City Hospital</a></li>
    </ul>


    <!-- v-if asociuated tioa a bottob givinn a value -->
    <ul class="mapList" id="mapList">
        <li class="li1"> <a href="https://google.com/maps/place/47.3520° N, 8.5336° E">University Hospital
                Zurich</a></li>
        <li class="li2"><a href="https://google.com/maps/place/47.3687° N, 8.4910° E">Triemli City Hospital</a></li>
        <li class="li3"><a href="https://google.com/maps/place/47.3520° N, 8.5336° E">Hirslanden Klinik Im Park</a>
        </li>
        <li class="li4"><a href="https://google.com/maps/place/47.3540° N, 8.5721° E">Hospital Balgrist
                University</a></li>
        <li class="li6"><a href="https://google.com/maps/place/47.4034° N, 8.5320° E">Waid City Hospital</a></li>
        <li class="li6"><a href="https://google.com/maps/place/47.4034° N, 8.5320° E">Waid City Hospital</a></li>
    </ul>


    </div>
    
</template>

<style scoped>
@import "../../css/app.css";










</style>