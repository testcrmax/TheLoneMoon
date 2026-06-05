# Updated for Node 20 and modern tooling

## Local setup

1. Install Node.js LTS 20 (recommended). If you use nvm:

   nvm install 20
   nvm use 20

2. Install dependencies:

   npm install

3. Development

   - Start Hugo server:
     npm run start:hugo

   - Start webpack dev server:
     npm run start:webpack

   - Run both (concurrently):
     npm run start

4. Build

   npm run build


## Notes
- This project now uses Webpack 5, Babel 7, ESLint 8 and Hugo 0.140+. If you have build errors after upgrading, run `npm install` and share the logs so I can help fix any compatibility issues.
