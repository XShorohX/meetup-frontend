import { defineStore } from "pinia";

export const useReportList = defineStore("reportList", {
  state: () => ({
    reportList: [],
  }),

  actions: {
    async fetchReportList() {
      const responseReportList = await fetch(
        `${import.meta.env.VITE_API_URL}/reports/`
      );
      if (responseReportList.ok) {
        this.reportList = await responseReportList.json();
      } else {
        throw new Error(responseReportList.statusText);
      }
    },
  },
});
