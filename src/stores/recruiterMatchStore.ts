import { create } from "zustand";
import {
  RecruiterMatchState,
  RecruiterMatchActions,
  MatchAnalysis,
} from "../data/interfaces/recruiterMatchTypes";
import axios from "axios";

const N8N_WEBHOOK_URL =
  "https://n8n.entra.com.co/webhook/74d5cfb5-f9dd-437e-989f-b36e40739ff1";

const initialState: RecruiterMatchState = {
  isModalOpen: false,
  jobDescription: "",
  analysis: null,
  isLoading: false,
  error: null,
};

export const useRecruiterMatch = create<
  RecruiterMatchState & RecruiterMatchActions
>((set, get) => ({
  ...initialState,

  openModal: () => set({ isModalOpen: true }),

  closeModal: () =>
    set({
      isModalOpen: false,
      jobDescription: "",
      analysis: null,
      isLoading: false,
      error: null,
    }),

  setJobDescription: (jd: string) => set({ jobDescription: jd }),

  analyzeMatch: async () => {
    const { jobDescription } = get();

    if (!jobDescription.trim()) {
      set({ error: "Por favor, pega la descripción de la vacante." });
      return;
    }

    set({ isLoading: true, error: null, analysis: null });

    try {
      // masterProfile now lives in n8n's Edit Fields node
      const response = await axios.post<MatchAnalysis>(N8N_WEBHOOK_URL, {
        jobDescription,
      });

      set({ analysis: response.data, isLoading: false });
    } catch (err) {
      console.error("Error analyzing match:", err);
      set({
        error:
          "Hubo un error al analizar la compatibilidad. Intenta de nuevo en unos segundos.",
        isLoading: false,
      });
    }
  },

  reset: () => set(initialState),
}));
