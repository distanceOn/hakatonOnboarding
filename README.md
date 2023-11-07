# DotSales Frontend

React Frontend for DotSales app

## Stack of packages

- React v18.2
- TypeScript v5.2 (with optimized tsconfig)
- Tanstack Query v4.35 (with prepeared query-provider)
- EmotionJS v11.11 (with prepeared theme, global.style, theme provider and babel-plugin for the best DX)
- Axios v1.5.1
- ESLint v8.50 (with really useful plugins and config)
- Prettier v3.0 (with the most awesome config)
- Husky v8.0 (with configured pre-commit hook)
- Vite v4.9 (configured for all used plugins)

### Highly recommend using pnpm package manager!

Prepeared package.json scripts:

- dev: runs app in development mode
- build: builds app in dist folder
- preview: runs app in production mode and auto-open in browser on localhost:3030 (run only after build!)
- start: in series runs build and preview scripts
- lint: runs ESLint in report mode
- lint:script-fix: runs ESLint in autofix mode
- format: formats code with prettier (warning! may conflict with ESLint in autofix mode)
- prepare: husky hook autoinstall (auto runs on first init packages)
- precommit: used in husky hook
