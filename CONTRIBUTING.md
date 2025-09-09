# Contributing Guidelines

Thank you for your interest in contributing to our open-source Shopify themes: **OnePage** and **Flowcart**!  
These guidelines ensure a consistent, accessible, and high-quality codebase for everyone.

---

## 🚀 Development Setup

### Prerequisites
- Node.js (>= 18.x)
- Git
- Shopify CLI (`npm install -g @shopify/cli @shopify/theme`)
- A development store (free with a Shopify Partner account)

### Getting Started
```bash
# 1. Clone the repository
git clone https://github.com/your-org/shopify-themes.git
cd shopify-themes

# 2. Install dependencies (if any custom tooling is added)
npm install

# 3. Start local development (replace THEME with onepage or flowcart)
shopify theme dev --theme THEME
```

---

## 🖊️ Coding Standards

### General
- **Liquid**: Use minimal logic in templates, prefer sections/snippets for reusability.
- **CSS**: TailwindCSS is recommended. Keep custom CSS scoped and minimal.
- **JavaScript**: Vanilla JS or lightweight Alpine.js. Avoid heavy frameworks.

### Formatting
- Use **2 spaces** for indentation.
- Run `npm run lint` before committing (if linting is set up).
- Keep line length ≤ 100 chars when possible.

### Accessibility
- All interactive elements must be keyboard-accessible.
- Provide `alt` text for images and ARIA labels where needed.
- Maintain proper heading structure (H1 → H2 → H3).

### Performance
- Optimize images before committing (`.jpg`, `.webp`, `.avif` preferred).
- Lazy-load offscreen images and videos.
- Avoid unnecessary JS animations.

### Mobile-First
- Always design and test for **small screens first**.
- Ensure tap targets are ≥ 44px.
- Use responsive typography and spacing via Tailwind utilities.

---

## 🌱 Git Workflow

### Branching
- **main** → stable, production-ready
- **dev** → integration branch for ongoing work
- **feature/XYZ** → for new features
- **fix/XYZ** → for bug fixes

Example:
```bash
git checkout -b feature/add-countdown-timer
```

### Commits
Follow the [Conventional Commits](https://www.conventionalcommits.org/) spec:
- `feat:` → new feature
- `fix:` → bug fix
- `docs:` → documentation only changes
- `style:` → formatting (no code change)
- `refactor:` → code refactor without behavior change
- `perf:` → performance improvements
- `test:` → adding/updating tests

Example:
```
feat(cart): add sticky cart drawer for mobile
```

### Pull Requests
- Create PRs into the `dev` branch.
- Keep PRs small and focused (≤ 300 lines if possible).
- Include before/after screenshots for UI changes.
- Request at least **1 review** before merging.

---

## 🐛 Issues & Feature Requests

- Use GitHub Issues to report bugs or suggest features.
- When reporting bugs, include:
  - Steps to reproduce
  - Expected vs actual behavior
  - Screenshots (if applicable)
  - Browser/OS/Device details

---

## 📂 Project Structure

```
/themes
  /onepage
    /sections
    /snippets
    /templates
    /assets
  /flowcart
    /sections
    /snippets
    /templates
    /assets
/docs
  CONTRIBUTING.md
```

---

## 💡 Contribution Tips

- Start small (typos, docs, small fixes) before tackling bigger features.
- Join discussions in Issues before coding large changes.
- Be kind, respectful, and collaborative.

---

## 📜 License

All contributions are subject to the project’s open-source license.  
By submitting a pull request, you agree that your work will be licensed under the same terms.

---

Happy coding! 🎉  
— The Theme Maintainers
