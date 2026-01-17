const themeKey = "theme-preference";

function getSystemTheme() {
  return window.matchMedia("(prefers-color-scheme:dark)").matches
    ? "dark"
    : "light";
}

function getStoredTheme() {
  return localStorage.getItem(themeKey);
}

function setStoredTheme(theme) {
  localStorage.setItem(themeKey, theme);
}

function applyTheme(theme) {
  const html = document.documentElement;
  html.setAttribute("data-theme", theme);
}

function initTheme() {
  const theme = getStoredTheme() ?? getSystemTheme();
  applyTheme(theme);
}

export {
  initTheme,
  applyTheme,
  setStoredTheme,
  getStoredTheme,
  getSystemTheme, // only used in the inicialization
};
