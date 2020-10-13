<h2 align="center">NLW3</h1>

Repository containing the application created in the third edition of the <a href="https://rocketseat.com.br">Rocketseat</a> NLW event.

<p align="center">
    <a href="https://opensource.org/licenses/MIT">
        <img alt="License" src="https://img.shields.io/badge/License-MIT-yellow.svg">
    </a>
    <a href="#">
        <img alt="License" src="https://img.shields.io/github/languages/count/MagicalStrangeQuark/NLW3">
    </a>
    <a href="#">
        <img alt="License" src="https://img.shields.io/github/last-commit/MagicalStrangeQuark/NLW3">
    </a>
    <a href="#">
        <img alt="License" src="https://img.shields.io/github/followers/MagicalStrangeQuark?style=social">
    </a>
</p>

<h2 align="center">🔏 Installing WEB Application</h2>

```bash
    yarn create react-app web --template typescript
```

```bash
    npx create-react-app web --template typescript
```

<h2 align="center">Typescript Installation</h2>

```
    sudo npm install -g typescript
```

<h2 align="center">Check the installation</h2>

```
    tsc --help
```

<h2 align="center">To compile our typescript code, located in index.ts, to javascript</h2>

```typescript
    interface User {
        name: string,
        age: number,
        address: {
            country: string,
            state: string
        }
    }

    function printUser(user: User) {
        console.log(user);
    }

    printUser({
        name: "Gabriela",
        age: 29,
        address: {
            country: "Brazil",
            state: "RS"
        }
    });
```

```javascript
    function printUser(user) {
        console.log(user);
    }
    
    printUser({
        name: "Gabriela",
        age: 29,
        address: {
            country: "Brazil",
            state: "RS"
        }
    });
```

```
    tsc index.ts
```

<h2 align="center">Run javascript script</h2>

```
    node index.js
```

<h2 align="center">🔏 Icons</h2>

```bash
    yarn add react-icons
```

```bash
    npm install react-icons
```

<h2 align="center">🔏 React Router DOM</h2>

```bash
    yarn add react-router-dom

    yarn add @types/react-router-dom
```

```bash
    npm install react-router-dom

    npm install @types/react-router-dom
```

<h2 align="center">🔏 Leaflet</h2>

```bash
    yarn add leaflet react-leaflet

    yarn add @types/react-leaflet
```

```bash
    npm install leaflet react-leaflet

    npm install @types/react-leaflet
```

<h2 align="center">Server</h2>

```
    mkdir server

    cd server

    yarn init -y
```

<h3 align="center">Express</h3>

```
    yarn add express

    yarn add @types/express
```

```
    yarn add typescript -D

    yarn tsc --init

    yarn add ts-node-dev -D
```

```
    yarn ts-node-dev --transpile-only --ignore-watch node_modules src/server.ts
```

<h3 align="center">SQLite</h3>

```
    yarn add typeorm sqlite3
```

<h3 align="center">Migrations</h3>

```
    yarn ts-node-dev ./node_modules/typeorm/cli.js migration:create -n create_orphanages_table
```