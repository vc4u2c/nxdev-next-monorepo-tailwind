# NxdevNextMonorepoAntd

- NxDev Next Monorepo with 2 React Apps & 3 shared libraries.
- Styled with Tailwind and ShadCN
- [Building NxDev Next Monorepo](https://nx.dev/nx-api/next)

## Initial Setup

```bash
cd C:\Users\vinod.chandran\Documents\Source\Repos
git clone https://github.com/vc4u2c/nxdev-next-monorepo-antd.git
cd nxdev-react-monorepo-tailwind
npm i

# Building the Apps for Deployment
TODO

# Run Unit tests in parallel
TODO

# Run E2E tests in parallel
TODO
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
```

## Integrate with editors

Enhance your Nx experience by installing [Nx Console](https://nx.dev/nx-console) for your favorite editor. Nx Console
provides an interactive UI to view your projects, run tasks, generate code, and more! Available for VSCode, IntelliJ and
comes with a LSP for Vim users.

## Start the application

Run `npx nx dev store` to start the development server. Happy coding!

## Build for production

Run `npx nx build store` to build the application. The build artifacts are stored in the output directory (e.g. `dist/` or `build/`), ready to be deployed.

## Running tasks

To execute tasks with Nx use the following syntax:

```
npx nx <target> <project> <...options>
```

You can also run multiple targets:

```
npx nx run-many -t <target1> <target2>
```

..or add `-p` to filter specific projects

```
npx nx run-many -t <target1> <target2> -p <proj1> <proj2>
```

Targets can be defined in the `package.json` or `projects.json`. Learn more [in the docs](https://nx.dev/features/run-tasks).

## Set up CI!

Nx comes with local caching already built-in (check your `nx.json`). On CI you might want to go a step further.

- [Set up remote caching](https://nx.dev/features/share-your-cache)
- [Set up task distribution across multiple machines](https://nx.dev/nx-cloud/features/distribute-task-execution)
- [Learn more how to setup CI](https://nx.dev/recipes/ci)

## Explore the project graph

Run `npx nx graph` to show the graph of the workspace.
It will show tasks that you can run with Nx.

- [Learn more about Exploring the Project Graph](https://nx.dev/core-features/explore-graph)

## Connect with us!

- [Join the community](https://nx.dev/community)
- [Subscribe to the Nx Youtube Channel](https://www.youtube.com/@nxdevtools)
- [Follow us on Twitter](https://twitter.com/nxdevtools)
