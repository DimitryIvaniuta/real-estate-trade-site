# Real Estate Trade Site

A modern, responsive **single-page** React application showcasing a real estate development. Built with:

* **React** (v19.1.0)
* **TypeScript**
* **Vite** (v7.x)
* **Tailwind CSS**
* **ESLint** + **Prettier**
* **Vitest** (unit & snapshot testing)
* **Express** backend for contact form handling
* **PNPM** package manager
* Custom **dev-with-links** CLI script for clickable TypeScript errors in terminal

---

## 📁 Repository Structure

```
real-estate-trade-site/
├─ .github/                 # GitHub workflows (lint, test)
├─ node_modules/
├─ public/                  # Static assets
├─ src/                     # Frontend sources
│  ├─ assets/               # Images, SVGs, PDFs
│  ├─ components/           # React components
│  ├─ data/                 # Static data (properties list)
│  ├─ hooks/                # Custom React hooks (e.g. useScrollSpy)
│  ├─ sections/             # Section-level components (Hero, About, Gallery, etc.)
│  ├─ App.tsx               # Root component
│  ├─ main.tsx              # Entry point
│  └─ index.css             # Global styles + Tailwind imports
├─ server/                  # Express backend for `/api/contact`
│  ├─ index.js              # Sets up server, routes, email via nodemailer
│  └─ .env                  # Environment variables (SMTP creds, PORT)
├─ dev-with-links.mjs       # Wrapper to launch Vite with clickable errors
├─ tailwind.config.js
├─ vite.config.ts           # Vite & proxy config
├─ tsconfig.json            # TypeScript configuration
├─ .eslintrc.cjs            # ESLint rules + Prettier integration
├─ .pretierrc               # Prettier formatting rules
├─ package.json
├─ pnpm-lock.yaml
└─ README.md                # ← you are here
```

---

## 🚀 Quick Start

### Prerequisites

* Node.js ≥14.18.0 (tested on 18.x, 22.x)
* PNPM (if not installed globally, run `npm install -g pnpm`)

### Installation

```bash
# clone the repo
git clone https://github.com/yourusername/real-estate-trade-site.git
cd real-estate-trade-site

# install frontend + backend deps
pm install # at project root
cd server && npm install # for Express backend
cd ..
```

### Environment Variables

Create a `.env` file inside the `server/` folder:

```ini
# server/.env\ nPORT=3001
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your-smtp-user
SMTP_PASS=your-smtp-password
EMAIL_TO=agent@yourdomain.com
```

### Development

Run both frontend & backend concurrently:

```bash
pnpm start:all
```

* **Frontend** on [http://localhost:5173](http://localhost:5173)
* **Backend** (API proxy) on [http://localhost:3001](http://localhost:3001)

> `start:all` uses `concurrently` to run `server/index.js` and `dev-with-links.mjs`.

### Scripts

| Command          | Description                                |
| ---------------- | ------------------------------------------ |
| `pnpm dev`       | Launch only frontend with clickable errors |
| `pnpm server`    | Start Express backend (HTTP API)           |
| `pnpm start:all` | Run both backend and frontend in dev mode  |
| `pnpm build`     | Create production build in `dist/`         |
| `pnpm preview`   | Preview production build locally           |
| `pnpm lint`      | Run ESLint check                           |
| `pnpm lint:fix`  | Auto-fix lint issues                       |
| `pnpm test`      | Run Vitest unit & snapshot tests           |

---

## 🗂 Configuration

* **Vite** (`vite.config.ts`):

    * Proxy `/api` to Express on port 3001
    * React plugin, TypeScript checker

* **Tailwind** (`tailwind.config.js`):

    * Purge unused CSS in production
    * Custom theme colors

* **ESLint** + **Prettier**:

    * Combined via `eslint-config-prettier`

* **TypeScript** (`tsconfig.json`):

    * `jsx: react-jsx`
    * Path alias `@/` → `src/`

---

## 🖌️ Styling Guidelines

* Use **CSS Modules** (`.module.scss`) per-component
* Use Tailwind for utility classes when appropriate
* Global variables in `index.css` under `:root`

---

## 🧪 Testing

* **Vitest** for unit testing & coverage

```bash
# run all tests\ npm test
# watch mode\ npm run test:watch
# coverage report\ npm run coverage
```

---

## 📦 Production Deployment

1. Build:

   ```bash
   pnpm build
   ```
2. Host the `dist/` directory on any static server or CDN (Netlify, Vercel, GitHub Pages).
3. Ensure your Express API is deployed separately (Heroku, AWS, etc.) and update the proxy target in `vite.config.ts` or the fetch URL in the frontend.

---

## 📖 Usage

* **Hero**: Intro image + call-to-action button.
* **Sections**: Investment, Properties (cards), Gallery (Swiper), Location (Google Maps iframe), About, Contact form.
* **Contact Form**: Sends POST `/api/contact` → email via Nodemailer. No third-party forms used.

---

## 🤝 Contributing

1. Fork the repo
2. Create a feature branch (`git checkout -b feat/awesome-feature`)
3. Commit your changes (`git commit -m 'feat: add awesome feature'`)
4. Push (`git push origin feat/awesome-feature`)
5. Open a Pull Request

Please abide by the existing code style and include tests for new functionality.

---


## License

This project is licensed under the [MIT License](LICENSE).

---

## Contact

**Dzmitry Ivaniuta** — [dzmitry.ivaniuta.services@gmail.com](mailto:dzmitry.ivaniuta.services@gmail.com) — [GitHub](https://github.com/DimitryIvaniuta)
