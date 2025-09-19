# 🛍️ OnePage – Free & Open Source Shopify Theme

**A Shopify theme built to sell one product brilliantly.**

OnePage is a lightweight, conversion-focused Shopify theme designed for merchants who sell **just one hero product**. Perfect for gadgets, supplements, ebooks, courses, or any direct-to-consumer product.

## ✨ Features

- 🎯 **Single-product focus** – optimized layout for 1 product stores
- 📱 **Mobile-first design** – sticky "Buy Now" button, thumb-friendly navigation
- ⚡ **Fast performance** – minimal code, optimized for Core Web Vitals
- 🛡️ **Trust & social proof** – reviews, testimonials, guarantees, badges
- 🎥 **Video-ready** – showcase your product with YouTube/Vimeo embed
- ❓ **FAQ section** – answer objections before checkout
- ♿ **Accessibility-ready** – clean structure, high contrast
- 🌍 **Multi-language & multi-currency support**

## 📦 Installation

1. Clone or download this repository
2. In your Shopify Admin, go to **Online Store > Themes > Add theme > Upload zip**
3. Upload the OnePage `.zip` file
4. Customize sections using the Shopify theme editor

## 🚀 Development

### Prerequisites
- Node.js (>= 18.x)
- Shopify CLI (`npm install -g @shopify/cli @shopify/theme`)
- A development store (free with a Shopify Partner account)

### Getting Started
```bash
# Install dependencies
npm install

# Start local development
npm run dev

# Build for production
npm run build

# Deploy to your store
npm run deploy
```

## 🛠️ Tech Stack

- Shopify Online Store 2.0
- Liquid + JSON templates
- Vanilla JavaScript for interactive blocks
- CSS Grid & Flexbox for layouts
- Mobile-first responsive design

## 📁 Theme Structure

```
onepage/
├── assets/                 # CSS, JS, and image files
│   ├── base.css           # Base styles and utilities
│   └── global.js          # JavaScript functionality
├── config/                # Theme configuration
│   └── settings_schema.json
├── layout/                # Layout templates
│   └── theme.liquid       # Main layout file
├── locales/               # Translation files
│   └── en.default.json
├── sections/              # Reusable sections
│   ├── hero-section.liquid
│   ├── usp-section.liquid
│   ├── features-section.liquid
│   ├── video-section.liquid
│   ├── testimonials-section.liquid
│   ├── trust-section.liquid
│   ├── faq-section.liquid
│   ├── final-cta-section.liquid
│   ├── sticky-cart.liquid
│   ├── header.liquid
│   ├── footer.liquid
│   └── product-template.liquid
├── snippets/              # Reusable code snippets
│   ├── icon-account.liquid
│   ├── icon-cart.liquid
│   └── icon-cart-empty.liquid
└── templates/             # Page templates
    └── product.liquid
```

## 🎨 Customization

### Theme Settings
- **Colors**: Customize your brand colors
- **Typography**: Choose from system fonts
- **Layout**: Adjust page width and spacing
- **Buttons**: Customize button styles and radius

### Sections
Each section can be customized through the Shopify theme editor:
- **Hero Section**: Product image/video, title, price, CTA
- **USP Section**: Trust badges and benefits
- **Features Section**: Product features with images
- **Video Section**: YouTube/Vimeo product demos
- **Testimonials**: Customer reviews carousel
- **Trust Section**: Guarantees and payment methods
- **FAQ Section**: Expandable Q&A
- **Final CTA**: Urgency and final push

### Mobile Sticky Cart
The theme includes a sticky "Buy Now" button that appears on mobile devices when users scroll down, ensuring easy access to purchase.

## 🔧 Advanced Customization

### Adding Custom CSS
Add your custom styles to `assets/base.css` or create a new CSS file and include it in `layout/theme.liquid`.

### Modifying JavaScript
The main JavaScript functionality is in `assets/global.js`. You can extend the `OnePageTheme` object or add new functionality.

### Creating New Sections
1. Create a new `.liquid` file in the `sections/` directory
2. Add the section to your template
3. Define the section schema for customization options

## 📱 Mobile Optimization

- **Sticky Cart**: Persistent buy button on mobile
- **Touch-Friendly**: 44px minimum touch targets
- **Fast Loading**: Optimized images and minimal JavaScript
- **Responsive Images**: Proper sizing for different screen sizes

## ♿ Accessibility Features

- **Keyboard Navigation**: Full keyboard support
- **Screen Reader Support**: Proper ARIA labels and semantic HTML
- **High Contrast**: Meets WCAG AA standards
- **Focus Management**: Clear focus indicators
- **Skip Links**: Quick access to main content

## 🚀 Performance

- **Lazy Loading**: Images load as needed
- **Minimal JavaScript**: Only essential functionality
- **Optimized CSS**: Efficient selectors and minimal unused styles
- **Fast Rendering**: Critical CSS inlined, non-critical loaded asynchronously

## 🤝 Contributing

OnePage is **100% open source** 🎉. Feel free to contribute with:
- Bug fixes
- Feature suggestions
- Design improvements

### Steps:
1. Fork this repo
2. Create a feature branch (`feature/amazing-idea`)
3. Submit a pull request

## 📜 License

MIT License – free for personal & commercial use.
You're free to customize, fork, and use it in your own projects.

## 🙌 Credits

Built with ❤️ by Pacific Softwares.

## 🔮 Roadmap

- [ ] Dark mode toggle
- [ ] More demo layouts (gadget, ebook, supplement)
- [ ] Built-in upsell block (Buy 2, Save 10%)
- [ ] PWA support (app-like experience)
- [ ] A/B testing integration
- [ ] Advanced analytics tracking

## 📞 Support

- **Documentation**: [GitHub Wiki](https://github.com/your-org/shopify-themes/wiki)
- **Issues**: [GitHub Issues](https://github.com/your-org/shopify-themes/issues)
- **Email**: support@pacificsoftwares.com

---

**Ready to sell your product?** [Download OnePage](https://github.com/your-org/shopify-themes/releases) and start converting visitors into customers today!
