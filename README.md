# super-complex-application

This project is designed to mimic the structure of a production application for
the purposes of learning the technologies involved.

## the basic structure

The projects consists of a React.js frontend and an Express.js backend. Running
both of these in a development environment can be found in the single
package.json file.

### React.js

The React.js frontend was developed from scratch using the React.js libraries,
the Webpack bundler, and the Babel compiler to allow for JSX.

### Express.js

The Express.js API framework library is used as the backend for this project.

### Axios

The Axios HTTP client was used to facilitate the connection between the frontend
and backend.

## testing

The two testing suites within this project are unit testing and end-to-end (e2e)
testing, implemented with Jest and Cypress respectively.

### Cypress (e2e)

The cypress testing suite is used for the e2e testing of both the frontend and
the backend.

### Jest (unit)

Individual functions and methods from both the frontend and backend are tested
with the Jest library.

## development tools

### nodemon

While nodes file-watching support is still in it' early stages nodemon is used
to support more efficient development by reloading the backend dynamically when
changes are made during local development.

### concurrently

A nice little npm package that allows running the front and backend severs from
a single script.

### commitlint

Allows for the linting of commit messages against the conventional commits
standard.

### prettier

To enforce code-style standardisation, prettier is used alongside a .prettierrc
file.

### eslint

eslint is used as the sole linter for this project.
