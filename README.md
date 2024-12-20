# Syncore Astro Starter

A modern, high-performance starter template built with Astro, Svelte, and TailwindCSS.

## 📦 Current Stack Versions

- Node.js >= 18.14.1
- pnpm >= 8.0.0

### Core Dependencies
- Astro v4.0.3
- Svelte v4.2.8
- TailwindCSS v3.3.6
- TypeScript v5.3.3
- Vite v5.0.5

### Key Development Dependencies
- ESLint v8.55.0
- Prettier v3.1.0
- @typescript-eslint/parser v6.13.2
- astro-seo v0.8.0
- vite-plugin-pwa v0.17.2

## 🚀 Features

- ⚡️ [Astro](https://astro.build/) - Static Site Generator with excellent performance
- 🎨 [Svelte](https://svelte.dev/) - Reactive UI components
- 💅 [TailwindCSS](https://tailwindcss.com/) - Utility-first CSS framework
- 🔍 [SEO Optimized](https://github.com/jonasmerlin/astro-seo)
- 📱 PWA Support
- 🎯 TypeScript Support
- 📝 Markdown Support
- 🔄 RSS Feed
- 🗺️ Sitemap Generation
- 🌙 Dark Mode
- 📦 Asset Compression
- 🔧 ESLint + Prettier

## 📦 Project Structure

```
/
├── _articles/       # Markdown articles
├── public/          # Static assets
├── src/
│   ├── assets/      # Project assets (images, SVGs)
│   ├── components/  # UI Components
│   │   ├── global/  # Global components (Header, Footer, Layout)
│   │   ├── utils/   # Utility components
│   │   └── ...      # Feature-specific components
│   ├── pages/       # Page components and routes
│   └── styles/      # Global styles and Tailwind config
└── helpers/         # Helper functions and configurations
```

## 🛠️ Prerequisites

- Node.js >= 18.14.1
- pnpm >= 8.0.0

## 🚀 Getting Started

1. Clone the repository:
```bash
git clone https://github.com/your-username/syncore-astro-starter.git
```

2. Install dependencies:
```bash
pnpm install
```

3. Start development server:
```bash
pnpm dev
```

4. Build for production:
```bash
pnpm build
```

## 📝 Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm lint` - Lint code with ESLint
- `pnpm format` - Format code with Prettier
- `pnpm typecheck` - Type check with TypeScript

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
PUBLIC_SITE_URL=https://your-site.com
```

### SEO Configuration

Edit `helpers/seoConfig.ts` to update default SEO settings.

### PWA Configuration

Edit the manifest settings in `helpers/seoConfig.ts`.

## 🔄 Automatic Updates

This project uses Renovate for automated dependency updates:

- Updates run every weekend
- Minor and patch updates are automatically merged
- Major updates require manual review
- Configuration in `renovate.json`

## 📚 Best Practices

- Keep components small and focused
- Use TypeScript for type safety
- Follow ESLint and Prettier configurations
- Write meaningful commit messages
- Document complex logic
- Use semantic HTML
- Follow accessibility guidelines

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.