#Text Work 3000

Quick, browser-based text transformations with live stats, theming, and routing.
```md
[Live demo](https://grathan-p.github.io/Text_Work-3000/)
```

##Features
1. One-click transforms: Uppercase, Lowercase, Remove Extra Spaces, Copy, Clear
2. Live stats: word/character counts and estimated reading time with inline preview
3. Light/Dark mode with localStorage persistence and instant body background updates
4. Alerts for every action; buttons disable when input is empty
5. Hash-based routing for static hosts: Home (#/), About (#/about)

##Tech Stack
- React 18 (CRA / react-scripts 5)
- React Router DOM 7 (HashRouter)
- Bootstrap 5 (CDN)
- Testing: Testing Library + jest-dom

#Getting Started
```bash
npm install
npm start
```
> Runs at http://localhost:3000/

#Build
`npm run build`
> Outputs static assets to build/ (drop on any static host).

#Deployment
> Static-friendly via hash routing; no server config needed.
> Deployed example: https://grathan-p.github.io/Text_Work-3000/
