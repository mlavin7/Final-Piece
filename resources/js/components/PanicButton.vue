<script>
import { ref } from 'vue';
import Sound from '../sound/alarm.wav';
import { usePanicStore } from '../stores/PanicStore';



// https://www.npmjs.com/package/vue3-touch-events


const { activateAlarm, deactivateAlarm } = usePanicStore();

export default {
  name: 'PanicButton',


  setup(props) {
    const pressing = ref(false);
    const pressTimer = ref(null);
    const showPopup = ref(false);
    let alarmAudio = null;

    const startPress = () => {
      if (!alarmAudio) {
        alarmAudio = new Audio(Sound);
      }
      pressing.value = true;
      alarmAudio.loop = true;

      pressTimer.value = setTimeout(() => {
        alarmAudio.play().catch(e => console.error("Error playing the sound:", e));
        showPopup.value = true;

        activateAlarm();
      }, 3000);
    };

    const stopPress = () => {
      if (pressing.value) {
        clearTimeout(pressTimer.value);
        pressing.value = false;


      }
    };

    const muteAlarm = () => {
      if (alarmAudio) {
        alarmAudio.loop = false;
        alarmAudio.pause();
        alarmAudio.currentTime = 0;
        showPopup.value = false;
        deactivateAlarm();
      }
    };

    return {
      pressing,
      startPress,
      stopPress,
      muteAlarm,
      showPopup,

    };
  },
};
</script>
<template>
  <div v-if="showPopup" class="GoogleMap">
    <iframe width="350" height="250" frameborder="0"
      style=" display:flex; justify-content: center; align-content: center; align-items: center; border-radius: 15px; border-spacing: 10px; border: 5px solid white; padding- "
      referrerpolicy="no-referrer-when-downgrade"
      src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBDpmcltvE_g4XJNXj_Rk0YVqydurt6T2w&q=my+position&zoom=20"
      allowfullscreen>
    </iframe>

    <button @click=""><a href="te.:1777"> 177</a></button>
  </div>

  <div class="panic">
    <div class="panic-button-container">
      <button @touchstart="startPress()" @touchend="stopPress()" @touchcancel="stopPress()" @click="muteAlarm()"
      
        class="panic-button" :class="{ active: pressing }">
        <span v-if="!showPopup"> {{ $t('PANIC!') }} <br>
          <p> {{ $t("PRESS FOR 3 SECOND TO ACTIVATE") }} </p>
        </span>
        <span v-else> {{ $t('PANIC!') }} <br>
          <p> {{ $t("PRESS TWICE FOR DEACTIVATE") }} </p>
        </span>





      </button>
      <div v-if="showPopup" class="popup">
        <button @click="unmuteAlarm">Unmute</button>
      </div>
    </div>
  </div>
</template>


<style scoped>
@import "../../css/app.css";

.panic {
  width: 350px;
  height: 190px;

}

span {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  justify-items: center;
  justify-content: center;
  justify-items: center;
  font-size: 50px;
  font-weight: bolder;
  color: white;
  text-align: center;
  height: 190px;
  width: 350px;
}

.panic-button-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  justify-content: center;

  height: 100%;
  height: 190px;
  width: 350px;
}

p {
  font-size: large;
}

.panic-button {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  border: 2px solid black;
  font-size: 16px;
  cursor: pointer;
  color: white;
  background-color: #ff0000;
  height: 190px;
  width: 350px;
  border-radius: 10px;
  font-size: 50px;
  font-weight: bold;
  margin-top: 20px;

}

.panic-button.active {
  animation: blink 1s linear infinite;


}

button {
  background-color: transparent;
}

button a {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  justify-items: center;
  padding: 10px;
  height: 70px;
  width: 350px;
  border: 2px solid black;
  color: black;
  background-color: yellow;
  border-radius: 10px;
  text-decoration: none;
  font-size: 20px;
  font-weight: bolder;
  margin-top: 10px;
  margin-bottom: 40px;
}

.popup {
  visibility: hidden;
  margin-top: 20px;
  padding: 10px;
  background-color: #f2f2f2;
  border: 1px solid #d4d4d4;
  border-radius: 5px;
}

.googleMap {
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 350px;
  margin-top: 40px;
  margin-bottom: 40px;
  border-radius: 15px;
  border: 2px solid black;

}


@keyframes blink {

  0%,
  100% {
    background-color: #ff0000;
    /* First color - red */
    height: 190px;
    width: 350px;
  }

  50% {
    background-color: yellow;
    /* Second color - black */
    height: 190px;
    width: 350px;
  }
}
</style>