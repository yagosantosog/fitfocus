# FitFocus - Fitness Training Program App

Uma aplicação web moderna e responsiva para acompanhamento de treinos, construída com **Vue 3**, com foco em organização, clareza de arquitetura e experiência do usuário.

O projeto oferece uma experiência de treino estruturada, com uma interface simples e intuitiva, sustentada por uma base de código limpa e escalável.

---

## 🚀 Visão Geral

A aplicação guia o usuário por um programa de treinamento estruturado baseado na metodologia **Bro Split**:

**Push → Pull → Legs → Repeat**

A interface foi pensada para ser minimalista e objetiva, permitindo que o foco permaneça totalmente no fluxo do treino e no acompanhamento do progresso.

---

## 🧠 Funcionalidades

- 🌗 Suporte a tema claro e escuro
- 🧩 Arquitetura baseada em componentes
- ⚙️ Lógica compartilhada via Vue Composables
- 📱 Design responsivo para diferentes tamanhos de tela
- 🧼 Separação clara de responsabilidades
- 🔄 Estrutura escalável, preparada para evolução futura

---

## 🏗️ Arquitetura & Decisões Técnicas

### Organização dos Componentes

A aplicação é estruturada em componentes pequenos e bem definidos, cada um responsável por uma única função.

Exemplos:

- `ThemeToggle.vue` — controle de alternância de tema
- `Welcome.vue` — primeira interação com o usuário
- `Dashboard.vue` — coordenação do fluxo de treino e ações principais

Essa abordagem melhora a legibilidade do código, facilita a reutilização e torna a manutenção mais simples ao longo do tempo.

---

### Estado & Lógica Compartilhada

Lógicas reutilizáveis são extraídas para **composables**, como:

- `useTheme` — centraliza o estado do tema, persistência e alternância

Esse padrão reduz duplicação de código e mantém os componentes mais declarativos e enxutos.

---

## 🌍 Conteúdo & Estratégia de Internacionalização

Neste estágio, a aplicação utiliza conteúdo estático, priorizando simplicidade e performance.

A arquitetura foi pensada para permitir futura integração com um **Headless CMS** (como o **Strapi**), possibilitando:

- Gerenciamento dinâmico de conteúdo
- Suporte a múltiplos idiomas
- Atualizações de conteúdo sem necessidade de novo deploy

---

## 🧪 Controle de Versão

O projeto segue o padrão de **Conventional Commits**, garantindo um histórico de commits consistente e fácil de entender.

Exemplos:

- `feat: add theme toggle`
- `refactor: move theme logic to composable`
- `chore: remove unused assets`

---

## 🛠️ Tecnologias Utilizadas

- **Vue 3** (Composition API)
- **Vite**
- **JavaScript (ES6+)**
- **CSS Scoped**
- **Font Awesome**
- **Git**
