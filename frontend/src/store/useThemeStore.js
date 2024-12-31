import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("chat-theme") || "coffee",
  setTheme: (theme) => {
    // Update localStorage
    localStorage.setItem("chat-theme", theme);

    // Update the `data-theme` attribute on the `<html>` tag
    document.documentElement.setAttribute("data-theme", theme);

    // Update the state
    set({ theme });
  },
}));

// Apply the theme on app initialization
const storedTheme = localStorage.getItem("chat-theme");
if (storedTheme) {
  document.documentElement.setAttribute("data-theme", storedTheme);
}
