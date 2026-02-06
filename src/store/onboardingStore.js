import { create } from "zustand";

export const useOnboardingStore = create((set) => ({
  step: 0,
  setStep: (step) => set({ step }),
  nextStep: () => set((state) => ({ step: Math.min(state.step + 1, 4) })),
  prevStep: () => set((state) => ({ step: Math.max(state.step - 1, 0) })),

  email: "",
  setEmail: (email) => set({ email }),
  password: "",
  setPassword: (password) => set({ password }),

  dob: "",
  setDob: (dob) => set({ dob }),
  homeState: "",
  setHomeState: (homeState) => set({ homeState }),
  languages: [],
  setLanguages: (languages) => set({ languages }),

  academicInterests: [],
  setAcademicInterests: (academicInterests) => set({ academicInterests }),
  futurePlans: [],
  setFuturePlans: (futurePlans) => set({ futurePlans }),
  toggleFuturePlan: (plan) =>
    set((state) => ({
      futurePlans: state.futurePlans.includes(plan)
        ? state.futurePlans.filter((p) => p !== plan)
        : [...state.futurePlans, plan],
    })),

  sports: [],
  setSports: (sports) => set({ sports }),
  toggleSport: (sport) =>
    set((state) => ({
      sports: state.sports.includes(sport)
        ? state.sports.filter((s) => s !== sport)
        : [...state.sports, sport],
    })),
  hobbies: [],
  setHobbies: (hobbies) => set({ hobbies }),

  accomplishments: "",
  setAccomplishments: (accomplishments) => set({ accomplishments }),
  skills: [],
  setSkills: (skills) => set({ skills }),

  reset: () =>
    set({
      step: 0,
      email: "",
      password: "",
      dob: "",
      homeState: "",
      languages: [],
      academicInterests: [],
      futurePlans: [],
      sports: [],
      hobbies: [],
      accomplishments: "",
      skills: [],
    }),
}));
