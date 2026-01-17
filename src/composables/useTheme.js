import { ref } from "vue";
import {
  applyTheme,
  setStoredTheme,
  getSystemTheme,
} from "../theme/themeManager";

const theme = ref(localStorage.getItem("theme-preference") ?? getSystemTheme());

function setTheme(newTheme) {
  theme.value = newTheme;
  setStoredTheme(newTheme);
  applyTheme(newTheme);
}

function toggleTheme() {
  theme.value === "dark" ? setTheme("light") : setTheme("dark");
}

export function useTheme() {
  return {
    theme,
    setTheme,
    toggleTheme,
  };
}
