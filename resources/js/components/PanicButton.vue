

<script>
import { ref } from 'vue';
import Sound from '../sound/alarm.wav';

export default {
  name: 'PanicButton',
  props: {
    activateAlarm: {
      type: Function,
      required: true
    },
    deactivateAlarm: {
      type: Function,
      required: true
    }
  },
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
      pressTimer.value = setTimeout(() => {
        alarmAudio.play().catch(e => console.error("Error playing the sound:", e));
        showPopup.value = true;
        props.activateAlarm();
      }, 3000);
    };

    const stopPress = () => {
      if (pressing.value) {
        clearTimeout(pressTimer.value);
        pressing.value = false;
        if (showPopup.value) {
          unmuteAlarm();
        }
      }
    };

    const unmuteAlarm = () => {
      if (alarmAudio) {
        alarmAudio.pause();
        alarmAudio.currentTime = 0;
        showPopup.value = false;
        props.deactivateAlarm();
      }
    };

    return {
      pressing,
      startPress,
      stopPress,
      unmuteAlarm,
      showPopup,
    };
  },
};
</script>
<template>
  <div class="panic">@import '../css/app.css';
  <div class="panic-button-container">
    <button @touchstart="startPress()" @touchend="stopPress()" @touchcancel="stopPress()" @click="startPress()"
      class="panic-button" :class="{ active: pressing }">
      <span v-if="!showPopup"> {{ $t('PANIC!') }} <br>
      <P style="font-size: large;" >{{ $t("PRESS FOR 3 SECOND TO ACTIVATE") }}</P> 


      </span>
     
      <span v-else>Alarm is on!</span>
    </button>
    <div v-if="showPopup" class="popup">
      <button @click="unmuteAlarm">Unmute</button>
    </div>
  </div></div>
</template>


<style scoped>


@import "../../css/app.css";

.panic{
  width: 375px;
  height: 30vh;

}

.panic-button-container {
  display: flex;
  flex-direction: column;
align-items: center;
  height: 100%;
}

.panic-button {
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  color: white;
  background-color: #ff0000;
  height: 90%;
  width: 360px;
  border-radius: 10px;
  font-size: 50px;
  font-weight: bold;
  
}

.panic-button.active {
  animation: blink 1s linear infinite;
  
}



.popup {
  visibility: hidden;
  margin-top: 20px;
  padding: 10px;
  background-color: #f2f2f2;
  border: 1px solid #d4d4d4;
  border-radius: 5px;
}



@keyframes blink { 
  
  0%, 
  100% { 
      background-color: #ff0000; 
      /* First color - red */ 
  } 

  50% { 
      background-color: yellow; 
      /* Second color - black */ 
  } }

</style>
