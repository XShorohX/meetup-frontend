import { defineStore } from "pinia";

export const useMeetList = defineStore("meetList", {
  state: () => ({
    meetList: [],
  }),

  getters: {
    getLastMeet(state) {
      return state.meetList.slice(-1)[0];
    },
  },

  actions: {
    async fetchMeetList() {
      const responseMeetList = await fetch(
        `${import.meta.env.VITE_API_URL}/meets/`
      );
      if (responseMeetList.ok) {
        this.meetList = await responseMeetList.json();
      } else {
        throw new Error(responseMeetList.statusText);
      }
    },
  },
});
