## Overview

This project is dedicated to leveling up react to a model/view/view model (MVVM) architecture.

The project uses is compiled uses ES6 syntax with typescript. It has eslint enabled and uses MobX observables to support MVVM two way binding.

### Why MVVM

MVVM allows the ability to extract the business logic for a view from the view
layer it self. Each view corresponds with exactly one view model.

By separating the business logic from the view, we can unit test the business
logic with normal js testing, such as mocha or jest, without having to perform
snapshot testing.

### Flux/MVVM

The flux library used is Mobx and implementations of stores can be found under
src/stores. Mobx is required as it provides the two way binding necessary
to simply implement the MVVM pattern.

### Actions/Services

It additionally follows the service/repo/dao pattern for performing actions.
Refer to src/actions for an example of this pattern.

### Typescript

This project implements typescript. These errors will output to the console
during development and provides typed definitions for models, services, etc.

Configure typescript rules in .tsconfig.json

To watch compilation output

tsc -w --skipLibCheck

### Linting

This project is set up with es-lint enabled. Configure linting rules
in .eslintrc.json


### Testing

This project is set up for TDD development. It uses the jest
testing suite.

npm run test

For e2e testing it uses Detox.

For testing ios:

detox build --configuration ios
detox test --configuration ios


## Available Scripts

In the project directory, you can run:

### `npm run start`

Starts RN node server.

### `npm run android`

Runs the android app

### `npm run ios`

Runs the ios app

### `npm run test`

Launches the test runner.

This project uses jest and is set up to test .spec.ts files.

### `npm run lint`

Runs es-lint linting rules.
