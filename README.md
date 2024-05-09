# NxdevNextMonorepoAntd

- NxDev Next Monorepo with 2 React Apps & 3 shared libraries.
- Styled with Tailwind and ShadCN
- [Building NxDev Next Monorepo](https://nx.dev/nx-api/next)

## Initial Setup

```bash
cd C:\Users\vinod.chandran\Documents\Source\Repos
git clone https://github.com/vc4u2c/nxdev-next-monorepo-tailwind.git
cd nxdev-react-monorepo-tailwind
npm i

# Display all targets
npx nx show project store --web
npx nx show project store-e2e --web
npx nx show project inventory --web
npx nx show project inventory-e2e --web

# Building the Apps for Deployment
npx nx run-many -t build

# Run the apps
npx nx serve store
npx nx serve inventory

# Run Unit tests in parallel
npx nx run-many -t test
npx nx view-logs

# Run E2E tests in parallel
npx nx run-many -t e2e
npx playwright show-report .\dist\.playwright\apps\store-e2e\playwright-report
npx playwright show-report .\dist\.playwright\apps\inventory-e2e\playwright-report

# Linting
npx nx run-many -t lint

# Show the project dependency graph
npx nx graph
npx nx graph --affected
```

## Monorepo Creation Setup

This is how the Monorepo was setup. Please follow the section above if cloning the code.

```bash
# This setup along with commit history describes how the repo was created
# Download and install Node.js v20.12.0 from https://nodejs.org/en

# Download and Install Git SCM: https://git-scm.com/download/win
# 64 Bit Standalone Installer for Windows: https://github.com/git-for-windows/git/releases/download/v2.44.0.windows.1/Git-2.44.0-64-bit.exe

# Install VS Code extension Tailwind CSS IntelliSense

# Open VS Code
# CTRL + ` to open terminal

cd .\Documents\Source\Repos\React\
git config --global init.defaultBranch main

npm i -g npm@latest
npm -v
node-v
npm i -g nx

# Create a new Next monorepo with the following command
npx create-nx-workspace@latest --preset=next
# √ Where would you like to create your workspace? · nxdev-next-monorepo-tailwind
# √ Application name · store
# √ Would you like to use the App Router (recommended)? · Yes
# √ Would you like to use the src/ directory? · Yes
# √ Test runner to use for end to end (E2E) tests · playwright
# √ Default stylesheet format · tailwind
# √ Do you want Nx Cloud to make your CI fast? · skip

cd .\nxdev-next-monorepo-tailwind\
code . -r

npx nx g @nx/next:app inventory
# √ Which E2E test runner would you like to use? · playwright
# √ Would you like to use the App Router (recommended)? (Y/n) · true
# √ Would you like to use `src/` directory? (Y/n) · true
# √ What should be the project name and where should it be generated? · inventory @ apps/inventory

px nx g @nx/next:lib orders --directory=libs/orders
# √ Which stylesheet format would you like to use? · none
# √ What should be the project name and where should it be generated? · orders @ libs/orders

npx nx g @nx/next:lib products --directory=libs/products
# √ Which stylesheet format would you like to use? · none
# √ What should be the project name and where should it be generated? · products @ libs/products

npx nx g @nx/next:lib shared-ui --directory=libs/shared/ui
# √ Which stylesheet format would you like to use? · none
# √ What should be the project name and where should it be generated? · shared-ui @ libs/shared/ui

npx nx g @nx/next:component product-list --project=products --directory="libs/products/src/lib/product-list"
# √ Which stylesheet format would you like to use? · none
# √ Where should the component be generated? · libs/products/src/lib/product-list/product-list.tsx

npx nx g @nx/next:component order-list --project=products --directory="libs/orders/src/lib/order-list"
# √ Which stylesheet format would you like to use? · none
# √ Where should the component be generated? · libs/products/src/lib/order-list/order-list.tsx

npx nx g @nx/next:component order-details --directory="libs/orders/src/lib/order-details"
# √ Which stylesheet format would you like to use? · none
# √ Where should the component be generated? · libs/orders/src/lib/order-details/order-details.tsx

#npx nx g @nx/next:page home --directory="apps/inventory/src/app/pages/home" --withTests

npx nx g @nx/next:component profile --directory="apps/inventory/src/app/profile/"

# https://ui.shadcn.com/docs/installation/next
npx shadcn-ui@latest init
# √ Would you like to use TypeScript (recommended)? ... no / yes
# √ Which style would you like to use? » Default
# √ Which color would you like to use as base color? » Slate
# √ Where is your global CSS file? ... globals.css
# √ Are you using a custom tailwind prefix eg. tw-? (Leave blank if not) ...
# √ Where is your tailwind.config.js located? ... tailwind.config.js
# √ Configure the import alias for components: ... @/lib
# √ Configure the import alias for utils: ... @/lib/utils
# √ Are you using React Server Components? ... no / yes
# √ Write configuration to components.json. Proceed? ... yes

npx shadcn-ui@latest add button
npx shadcn-ui@latest add avatar popover seperator
npx shadcn-ui@latest add dropdown-menu input form
npx shadcn-ui@latest add separator
npx shadcn-ui@latest add tooltip
npx shadcn-ui@latest add table
npx shadcn-ui@latest add badge
npm i @tanstack/react-table

# https://stackoverflow.com/questions/70430316/how-to-add-module-aliases-to-jest-testing-in-next-js
npm i -D ts-jest

# https://github.com/jorenvanhee/tailwindcss-debug-screens
npm i tailwindcss-debug-screens --save-dev

npm i @react-hook/window-size

```

## Integrate with editors

Enhance your Nx experience by installing [Nx Console](https://nx.dev/nx-console) for your favorite editor. Nx Console
provides an interactive UI to view your projects, run tasks, generate code, and more! Available for VSCode, IntelliJ and
comes with a LSP for Vim users.

## Set up CI!

Nx comes with local caching already built-in (check your `nx.json`). On CI you might want to go a step further.

- [Set up remote caching](https://nx.dev/features/share-your-cache)
- [Set up task distribution across multiple machines](https://nx.dev/nx-cloud/features/distribute-task-execution)
- [Learn more how to setup CI](https://nx.dev/recipes/ci)
