# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    # Scrollscape — Travel frontend

    A modern React + TypeScript single-page frontend built with Vite for the Scrollscape travel experience.

    ## Features

    - React 18 + TypeScript
    - Fast HMR with Vite
    - Opinionated ESLint + TS config

    ## Quick start

    Prerequisites: Node.js 18+ and npm or pnpm

    Install dependencies:

    ```bash
    npm install
    # or
    pnpm install
    ```

    Run development server:

    ```bash
    npm run dev
    # or
    pnpm dev
    ```

    Build for production:

    ```bash
    npm run build
    # or
    pnpm build
    ```

    Preview the production build:

    ```bash
    npm run preview
    # or
    pnpm preview
    ```

    ## Repository

    This repository is hosted at: https://github.com/kaustubhhhh7/Scrollscape-travel-frontend.git

    ## Contributing

    - Open issues or PRs on the GitHub repo.
    - Follow existing coding style and commit message conventions.

    ## License

    See the repository for license information.

    Enjoy exploring Scrollscape!
