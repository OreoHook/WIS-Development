# WIS-Development
Design and Development of Web Information Systems

## Running the app

```bash
# Running Front-End
yarn run start web

# Running Back-End
yarn run start api

# Running parallel Front-End and Back-End
yarn run nx -- run-many --target=serve --projects=api,web --parallel --maxParallel=2
```

## Unit Test

```bash
# testing Front-End
yarn run test web

# testing Back-End
yarn run test api

# Parallel testing
yarn run nx -- run-many --target=test --projects=api,web --parallel --maxParallel=2
```


## E2E Testing

```bash

# start Back-End first
yarn run start api

# Running Front-End E2e with Cypress
yarn run e2e web-e2e

```


## Features

- Create a professor profile
- Mark as completed
- Delete a professor profile
- Undo a professor profile
