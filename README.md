# TidyTrek Landing Site

Simple marketing landing page built with Astro. Uses CloudFront functions to route authenticated users directly to the app.

## Additional Tidytrek Repos

- **Landing** (current repo)
- **[Frontend](https://github.com/rwbrockhoff/tidytrek-frontend)** - React app
- **[Backend](https://github.com/rwbrockhoff/tidytrek-backend)** - Node.js API
- **[Live App](https://tidytrek.co)** - Production website

## 🚀 Deployment

Automatically deploys to `/landing/` subdirectory on S3 via GitHub Actions when pushing to main branch. Uses CloudFront functions to check for existing cookies and route users to either the marketing landing page or React frontend application based on authentication state.

**Production URL**: https://tidytrek.co/landing/
