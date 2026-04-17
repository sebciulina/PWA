# PWA Task Manager

A modern Progressive Web Application (PWA) Task Manager built with Next.js, React, and Tailwind CSS. Manage your tasks efficiently with a beautiful, responsive interface that works offline.

## ✨ Features

- ✅ **Create, read, update, delete tasks** - Full CRUD functionality
- 📱 **PWA Support** - Install as app on mobile/desktop
- 📊 **Progress Tracking** - Visual progress bar for completed tasks
- 💾 **Local Storage** - Tasks persist in browser
- 🎨 **Beautiful UI** - Modern design with smooth animations
- ⚡ **Fast & Responsive** - Built on Next.js with Turbopack
- 🌐 **Offline Ready** - Works without internet connection

## 🛠 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Runtime**: [Node.js](https://nodejs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [Motion](https://motion.dev/)
- **PWA**: [next-pwa](https://github.com/shadowwalker/next-pwa)
- **Language**: TypeScript

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository
```bash
git clone https://github.com/sebciulina/PWA.git
cd PWA
```

2. Install dependencies
```bash
npm install
```

3. Run development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🌳 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout (Server Component)
│   ├── page.tsx            # Dashboard/Home page
│   ├── global.css          # Global styles
│   ├── components/
│   │   ├── LayoutClient.tsx        # Client-side navigation
│   │   ├── AddTaskModal.tsx        # Add task modal
│   │   └── [other components]
│   └── settings/
│       └── page.tsx        # Settings page
├── public/
│   ├── manifest.json       # PWA manifest
│   └── icons/              # PWA icons
└── package.json
```

## 🌐 Deployment

### Deploy on Vercel (Recommended)

1. Install Vercel CLI
```bash
npm install -g vercel
```

2. Deploy
```bash
vercel
```

3. Follow prompts and your app will be live!

Learn more: [Next.js Deployment Documentation](https://nextjs.org/docs/app/building-your-application/deploying)

### Other Deployment Options
- **Railway**: Connect GitHub repo to Railway
- **OVHCloud VPS**: Manual server deployment
- **Cloudflare Pages**: Static export option

## 📝 Usage

1. **Add Task**: Click the + button to open the add task modal
2. **Complete Task**: Click on a task to mark it as complete/incomplete
3. **Track Progress**: View your progress bar on the dashboard
4. **Settings**: Access settings to clear all tasks

## 🔗 Links

- 📖 [GitHub Repository](https://github.com/sebciulina/PWA)
- 🚀 [Live Demo](https://pwa-i35gbh1f8-sebciulinas-projects.vercel.app)
- 📚 [Next.js Docs](https://nextjs.org/docs)

## 👤 Author

Created for educational purposes by Sebastian

## 📄 License

MIT

---

**Status**: ✅ Deployed on Vercel | ✅ PWA Ready | ✅ Open Source
