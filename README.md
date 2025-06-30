# TidyTrek Landing Site

A modern, accessible landing page for TidyTrek - built with Astro

## 🚀 Features

- **Static Site Generation** - Fast load times with Astro
- **Accessible Design** - Semantic HTML with ARIA labels and keyboard navigation
- **Responsive Design** - Mobile-first approach with fluid layouts
- **CI/CD Deployment** - AWS S3 + CloudFront via GitHub Actions

## 🛠️ Development

```bash
# Install dependencies
npm ci

# Start dev server
npm run dev
```

## 🚀 Deployment

Automatically deploys to `/landing/` subdirectory on S3 via GitHub Actions when pushing to main branch. Uses CloudFront functions to check for existing cookies and route users to either the marketing landing page or React frontend application based on authentication state.

**Production URL**: https://tidytrek.co/landing/
