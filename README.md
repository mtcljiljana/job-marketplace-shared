
# 🧰 @mtcljiljana/jobsy-shared

**Shared helpers and utilities** for the Jobsy application. This package consolidates common logic, types, and service integrations used across multiple parts of the platform.

---

## 📦 Installation

This package is published to **GitHub Packages** under the `@mtcljiljana` scope.

To install:

```bash
npm install @mtcljiljana/jobsy-shared --registry=https://npm.pkg.github.com
```

Make sure your `.npmrc` includes:

```ini
@mtcljiljana:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken=<YOUR_GITHUB_PERSONAL_ACCESS_TOKEN>
```

---

## 🛠️ Usage

You can import and use utilities from this package in your project:

```ts
import { someHelper } from '@mtcljiljana/jobsy-shared';
// use someHelper()
```

Make sure to check the available exports in `src/index.ts`.

---

## ⚙️ Build

This package supports both CommonJS and ES Modules builds. To build the package:

```bash
npm install
npm run build
```

Build outputs are located in the `build/` directory:
- `build/cjs/` — CommonJS
- `build/esm/` — ES Modules
- `build/src/` — TypeScript definitions

---

## 🚀 Publishing

This package is published via **GitHub Actions** when changes are pushed to the `main` branch.

### GitHub Actions: `.github/workflows/publish.yml`

- Builds the project
- Sets up a scoped `.npmrc` file inside `build/`
- Publishes to GitHub Packages using the `GITHUB_TOKEN`

To publish manually or test locally, run:

```bash
# .npmrc should be configured with a valid token
npm publish --registry=https://npm.pkg.github.com
```

Make sure the version in `package.json` is updated to avoid conflicts.

---

## 📁 Project Structure

```
jobsy-shared/
├── src/                 # Source TypeScript code
├── build/               # Compiled output
├── scripts/             # Build scripts and Babel config
├── package.json
├── .npmrc               # Optional, or created in build/
```

---

## 📚 Dependencies

Includes useful libraries commonly used across services:

- [`express`](https://www.npmjs.com/package/express)
- [`mongoose`](https://www.npmjs.com/package/mongoose)
- [`winston`](https://www.npmjs.com/package/winston)
- [`@elastic/elasticsearch`](https://www.npmjs.com/package/@elastic/elasticsearch)
- [`cloudinary`](https://www.npmjs.com/package/cloudinary)
- [`jsonwebtoken`](https://www.npmjs.com/package/jsonwebtoken)

---

## 🧑‍💻 Author

**Ljiljana Matic**

[GitHub: @mtcljiljana](https://github.com/mtcljiljana)

---

## 📄 License

[MIT](./LICENSE)