import { defineStore } from "pinia";

export const usePanicStore = defineStore("panic",{
    state: () => ({
        alarmActive: false,
    }),
    actions: {
        activateAlarm() {
            this.alarmActive = true;
        },
        deactivateAlarm() {
            this.alarmActive = false;
        },
    },
    getters: {
        isAlarmActive: (state) => {
            return state.alarmActive;
        },
    },
});
