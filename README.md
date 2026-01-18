# FitFocus - Fitness Training Program App

A modern and responsive fitness training web application built with **Vue 3**, focused on maintainability, scalability, and clean front-end architecture.

The application provides a structured training experience with a simple, intuitive interface and well-organized codebase.

---

## 🚀 Overview

This application guides users through a structured fitness training program based on the **Bro Split** methodology:

**Push → Pull → Legs → Repeat**

The interface was designed to be minimal, clear, and easy to navigate, allowing users to focus entirely on the training flow.

---

## 🧠 Features

- 🌗 Light and Dark theme support
- 🧩 Component-based architecture
- ⚙️ Shared logic via Vue Composables
- 📱 Responsive design for multiple screen sizes
- 🧼 Clear separation of concerns
- 🔄 Scalable structure prepared for future content management

---

## 🏗️ Architecture & Technical Decisions

### Component Organization

The application is structured around small, focused components, each responsible for a single concern.

Examples:

- `ThemeToggle.vue` manages theme switching
- `Welcome.vue` handles the initial user interaction
- `Dashboard.vue` coordinates training flow and user actions

This approach improves readability, reusability, and long-term maintainability.

---

### State & Shared Logic

Reusable logic is extracted into **composables**, such as:

- `useTheme` — centralizes theme state, persistence, and toggling logic

This pattern reduces duplication and keeps components declarative and lightweight.

---

## 🌍 Content & Internationalization Strategy

At this stage, the application uses static content for simplicity and performance.

The architecture is intentionally designed to support future integration with a headless CMS (such as **Strapi**), enabling:

- Dynamic content management
- Multi-language support at the content level
- Easier content updates without redeployment

---

## 🧪 Version Control

The project follows **Conventional Commits** to ensure a consistent and readable Git history.

Examples:

- `feat: add theme toggle`
- `refactor: move theme logic to composable`
- `chore: remove unused assets`

---

## 🛠️ Tech Stack

- **Vue 3** (Composition API)
- **Vite**
- **JavaScript (ES6+)**
- **Scoped CSS**
- **Font Awesome**
- **Git**
