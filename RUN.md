# 🚀 FNR-FE — How to Run

A [Next.js](https://nextjs.org/) frontend application with **TypeScript**, **Tailwind CSS**, **Redux Toolkit**, and **MUI**.

---

## 📋 Prerequisites

Make sure the following are installed on your machine:

- [Node.js](https://nodejs.org/) **v20.18.0** (see `.nvmrc`)
  > Using [nvm](https://github.com/nvm-sh/nvm)? Run `nvm use` to automatically switch to the correct version.
- [pnpm](https://pnpm.io/) package manager (`npm install -g pnpm`)

> ⚠️ The **FNR-BE** backend server must also be running for API calls to work.  
> By default the frontend connects to `http://localhost:3000/api/`.

---

## ⚙️ Environment Setup

The project uses `.env.development` for local development. It is already included and configured:

```env
BASE_URL=http://localhost:3000/api/
```

If you need to override values (e.g. for a different backend URL), create a `.env.local` file in the project root:

```env
BASE_URL=http://your-backend-url/api/
```

> `.env.local` takes priority over `.env.development` and is git-ignored automatically.

---

## 📦 Installation

Install all dependencies:

```bash
pnpm install
```

---

## ▶️ Running the App

### Development mode (with hot reload)

```bash
pnpm dev
```

### Production mode

Build the app first, then start it:

```bash
pnpm build
pnpm start
```

---

## 🌐 Access

Once running, open your browser:

| Mode        | URL                        |
|-------------|----------------------------|
| Development | `http://localhost:3000`    |
| Production  | `http://localhost:3000`    |

---

## 🖥️ Running with PM2 (Production Process Manager)

The project includes an `ecosystem.config.js` for PM2:

```bash
# Install PM2 globally (if not already installed)
npm install -g pm2

# Start the app using PM2
pm2 start ecosystem.config.js

# View logs
pm2 logs FNR-FE

# Stop the app
pm2 stop FNR-FE

# Restart the app
pm2 restart FNR-FE
```

---

## 🛠️ Other Useful Commands

```bash
# Lint the project
pnpm lint
```

---

## 📁 Project Structure Overview

```
src/
├── pages/          # Next.js pages (file-based routing)
├── components/     # Reusable UI components
├── store/          # Redux Toolkit state management
└── ...
public/             # Static assets
```

---

## 📦 Key Libraries

| Library              | Purpose                          |
|----------------------|----------------------------------|
| Next.js 14           | React framework (SSR/SSG)        |
| TypeScript           | Type safety                      |
| Tailwind CSS         | Utility-first styling            |
| MUI (Material UI)    | UI component library             |
| Redux Toolkit        | State management                 |
| React Hot Toast      | Notifications                    |
| Swiper / React Slick | Carousel / slider components     |
| Recharts             | Charts and data visualization    |
| js-cookie            | Cookie management (auth tokens)  |
| Cloudinary           | Remote image hosting (`res.cloudinary.com`) |
