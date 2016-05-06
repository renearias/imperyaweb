# Imperya App Angular 2.0 Seed version

# install Sing Seed version with npm
`npm install`

# install TypeScript typings
`npm run typings-install`

# start the server
`npm start`
go to [http://0.0.0.0:3000](http://0.0.0.0:3000) or [http://localhost:3000](http://localhost:3000) in your browser

# Table of Contents
* [File Structure](#file-structure)
* [Getting Started](#getting-started)
    * [Dependencies](#dependencies)
    * [Running the app](#running-the-app)
* [Contributing](#contributing)
* [TypeScript](#typescript)
* [Typings](#typings)
* [Frequently asked questions](#frequently-asked-questions)
* [Support, Questions, or Feedback](#support-questions-or-feedback)
* [License](#license)


## File Structure
We use the component approach in our starter. This is the new standard for developing Angular apps and a great way to 
ensure maintainable code by encapsulation of our behavior logic. A component is basically a self contained app usually 
in a single file or a folder with each concern as a file: style, template, specs, e2e, and component class. Here's how it looks:
```
sing-app/
  |───src/
  |   │   app.html                                       
  |   │   app.ts                                         * Here we create root routing and render all views
  |   │   index.html                                     * Index.html: where we generate our index page
  |   │   main.ts                                        * Our entry file for our browser environment
  |   │   polyfills.ts                                   * Our polyfills file
  |   │
  |   ├───app/
  |   │   ├───another                                    * Simple Another page
  |   │   │       another.html
  |   │   │       another.ts
  |   │   │
  |   │   ├───core/                                      * Full basic layout of template, services and pipes are here
  |   │   │   │   config.ts
  |   │   │   │   core.html
  |   │   │   │   core.ts
  |   │   │   │
  |   │   │   ├───chat-sidebar/                          * ChatSidebar component
  |   │   │   │   │   chat-service.ts
  |   │   │   │   │   chat-sidebar.html
  |   │   │   │   │   chat-sidebar.ts
  |   │   │   │   │
  |   │   │   │   └───chat-message/                      * ChatMessage component
  |   │   │   │           chat-message.html
  |   │   │   │           chat-message.ts
  |   │   │   │
  |   │   │   ├───navbar/                                * Navbar component
  |   │   │   │       navbar.html
  |   │   │   │       navbar.ts
  |   │   │   │
  |   │   │   ├───notifications/                         * Notifications component
  |   │   │   │       notification-load.ts                 * NotificationsLoad directive
  |   │   │   │       notifications.html
  |   │   │   │       notifications.ts
  |   │   │   │
  |   │   │   ├───pipes/                                 * Folder for angular2 custom pipes
  |   │   │   │       pipe.ts
  |   │   │   │
  |   │   │   ├───sidebar/                               * Sidebar component
  |   │   │   │       sidebar.html
  |   │   │   │       sidebar.ts
  |   │   │   │
  |   │   │   │
  |   │   │   └───widget/                                * Widget directive
  |   │   │           widget.ts
  |   │   │
  |   │   ├───dashboard/                                 * Simple Dashboard page
  |   │   │       dashboard.html
  |   │   │       dashboard.ts
  |   │   │
  |   │   ├───error/                                     * Error page
  |   │   │       error.html
  |   │   │       error.ts
  |   │   │
  |   │   └───login/                                     * Login page
  |   │           login.html
  |   │           login.ts
  |   │
  |   ├───assets/
  |   │   ├───demo/
  |   │   │   └───notifications/                         * Templates for notification-dropdown
  |   │   │
  |   │   ├───fonts/                                     * All fonts
  |   │   │   ├───font-awesome/
  |   │   │   ├───glyphicons/
  |   │   │   └───google/
  |   │   │
  |   │   └───images/                                    * JPEG, PNG files
  |   │
  |   └───scss/                                          * All styles for layout
  |
  |──tsconfig.json                                       * Config that webpack uses for typescript
  |──typings.json                                        * Our typings manager
  |──package.json                                        * What npm uses to manage it's dependencies
  |
  |──webpack.config.js                                   * Our development webpack config
  └──webpack.prod.config.js                              * Our production webpack config
  
  
```

# Getting Started
## Dependencies
What you need to run this app:
* `node` and `npm` (`brew install node`)
* Ensure you're running the latest versions Node `v4.1.x`+ and NPM `2.14.x`+

Once you have those, you should install these globals with `npm install --global`:
* `webpack` (`npm install --global webpack`)
* `webpack-dev-server` (`npm install --global webpack-dev-server`)
* `karma` (`npm install --global karma-cli`)
* `protractor` (`npm install --global protractor`)
* `typings` (`npm install --global typings`)
* `typescript` (`npm install --global typescript`)

## Running the app
After you have installed all dependencies you can now run the app. Run `npm run server` to start a local server using
 `webpack-dev-server` which will watch, build (in-memory), and reload for you. The port will be displayed to you
  as `http://0.0.0.0:3000` (or if you prefer IPv6, if you're using `express` server, then it's `http://[::1]:3000/`).

### server
```bash
# development
npm run server
# production
npm run build:prod
npm run server:prod
```

## Other commands

### build files
```bash
# development
npm run build:dev
# production
npm run build:prod
```

### watch and build files
```bash
npm run watch
```

### run lint
```bash
npm run lint
```

# TypeScript
> To take full advantage of TypeScript with autocomplete you would have to install it globally and use an editor with the correct TypeScript plugins.

## Use latest TypeScript compiler
TypeScript 1.7.x includes everything you need. Make sure to upgrade, even if you installed TypeScript previously.

```
npm install --global typescript
```

## Use a TypeScript-aware editor
We have good experience using these editors:

* [Visual Studio Code](https://code.visualstudio.com/)
* [Webstorm 10](https://www.jetbrains.com/webstorm/download/)
* [Atom](https://atom.io/) with [TypeScript plugin](https://atom.io/packages/atom-typescript)
* [Sublime Text](http://www.sublimetext.com/3) with [Typescript-Sublime-Plugin](https://github.com/Microsoft/Typescript-Sublime-plugin#installation)

# Typings
> When you include a module that doesn't include Type Definitions inside of the module you need to include external Type Definitions with Typings

## Use latest Typings module
```
npm install --global typings
```

## Custom Type Definitions
When including 3rd party modules you also need to include the type definition for the module
if they don't provide one within the module. You can try to install it with typings

```
typings install node --save
```

If you can't find the type definition in the registry we can make an ambient definition in
this file for now. For example

```typescript
declare module "my-module" {
  export function doesSomething(value: string): string;
}
```


If you're prototying and you will fix the types later you can also declare it as type any

```typescript
declare var assert: any;
```

If you're importing a module that uses Node.js modules which are CommonJS you need to import as

```typescript
import * as _ from 'lodash';
```

You can include your type definitions in this file until you create one for the typings registry
see [typings/registry](https://github.com/typings/registry)

# Frequently asked questions
* What's the current browser support for Angular 2 Beta?
  * Please view the updated list of [browser support for Angular 2](https://github.com/angularclass/awesome-angular2#current-browser-support-for-angular-2)
* Why is my service, aka provider, is not injecting parameter correctly?
  * Please use `@Injectable()` for your service for typescript to correctly attach the metadata (this is a TypeScript problem)
* How do I start the app when I get `EACCES` and `EADDRINUSE` errors?
  * The `EADDRINUSE` error means the port `3000` is currently being used and `EACCES` is lack of permission for webpack to build files to `./dist/`
* What are the naming conventions for Angular 2?
 * please see issue [#185](https://github.com/AngularClass/angular2-webpack-starter/issues/185) and PR [196](https://github.com/AngularClass/angular2-webpack-starter/pull/196)
* How do I async load a component?
 * the component must have `.async.ts` and require using webpack `loader: () => require('./about/about')('About')`

# Support, Questions, or Feedback
> Contact us anytime for anything about this repo or Angular 2

* [Mail: contact@flatlogic.com](mailto:contact@flatlogic.com)
* [Twitter: @Flatlogic](https://twitter.com/Flatlogic)

___

enjoy

##[Flatlogic](http://flatlogic.com)
> Looking for Angular development or consulting services? contact@flatlogic.com.com

# License
 &copy; 2016 Flatlogic LLC, All Rights Reserved
