# Ecommerce Project with Next.js and Tailwind CSS
Welcome to the Ecommerce Project built with Next.js and Tailwind CSS (ShadCn). This project provides a robust foundation for developing a modern, responsive, and scalable ecommerce website.

## Built with
- **Next.js** - A React framework for building server-side rendered and statically generated applications
- **Tailwind CSS** - A utility-first CSS framework for rapidly building custom designs
- **TypeScript** - A superset of JavaScript that provides optional static typing
- **React Hook Form** - A library for flexible and extensible forms
- **Zustand** - A library for state management
- **Zod** - A TypeScript-first schema declaration library
- **ShadCn** - Beautifully designed components that you can copy and paste into your apps. 
  

## Development

### Start by cloning the repository:

```
git clone https://github.com/tejas-gk/carty-moron.git
```

### Install dependencies

```
cd carty-moron
npm i
```


## Documentation


```bash
# Start the dashboard server
cd dashboard
npm run dev
```
  
  ```bash
# Start the web server
cd web
npm run dev
```



## Project Structure
The project is organized into two main directories:

### dashboard: 
Contains the backend interface for managing products, orders, and other administrative tasks.
### web: 
Houses the frontend for customers to browse and purchase products.

```bash
carty-moron/
│
├── dashboard/
│   ├── src/
|   |   ├── components/
│   |   └── app/
│
├── web/
│   ├── src/
|   |   ├── components/
│   |   └── app/
│
└── ...

```


## Commit Convention

Before you create a Pull Request, please check whether your commits comply with
the commit conventions used in this repository.

When you create a commit we kindly ask you to follow the convention
`category(scope or module): message` in your commit message while using one of
the following categories:

- `feat / feature`: all changes that introduce completely new code or new
  features
- `fix`: changes that fix a bug (ideally you will additionally reference an
  issue if present)
- `refactor`: any code related change that is not a fix nor a feature
- `docs`: changing existing or creating new documentation (i.e. README, docs for
  usage of a lib or cli usage)
- `build`: all changes regarding the build of the software, changes to
  dependencies or the addition of new dependencies
- `test`: all changes regarding tests (adding new tests or changing existing
  ones)
- `ci`: all changes regarding the configuration of continuous integration (i.e.
  github actions, ci system)
- `chore`: all changes to the repository that do not fit into any of the above
  categories

  e.g. `feat(components): add new prop to the avatar component`


If you are interested in the detailed specification you can visit
https://www.conventionalcommits.org/ or check out the
[Angular Commit Message Guidelines](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines).



## Testing

Tests are written using [Vitest](https://vitest.dev). You can run all the tests from the root of the repository.
