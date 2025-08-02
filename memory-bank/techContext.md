# Teknik Bağlam - Ahşap El Sanatları E-Ticaret Sitesi

## Kullanılan Teknolojiler

### Frontend Framework
- **Next.js 15.4.5**
  - App Router kullanımı
  - Server-side rendering (SSR)
  - Static site generation (SSG)
  - API routes desteği
  - Image optimization
  - Font optimization

### React Ekosistemi
- **React 19.1.0**
  - Modern React hooks
  - Concurrent features
  - Server components (gelecek)
- **React DOM 19.1.0**
  - Web platformu için renderer

### Stil Sistemi
- **Tailwind CSS 3.4.17**
  - Utility-first CSS framework
  - Custom color palette (navy, blue)
  - Responsive design utilities
  - Dark mode desteği (planlanan)
- **PostCSS 8.5.6**
  - CSS işleme pipeline
- **Autoprefixer 10.4.21**
  - CSS vendor prefix'leri

### İkon Kütüphanesi
- **Lucide React 0.536.0**
  - Modern, minimal ikonlar
  - TypeScript desteği
  - Tree-shaking uyumlu

### Font Sistemi
- **Geist** (Sans-serif)
  - Modern, okunabilir font
  - Google Fonts entegrasyonu
- **Geist Mono** (Monospace)
  - Kod blokları için

### Geliştirme Araçları

#### Kod Kalitesi
- **TypeScript 5**
  - Statik tip kontrolü
  - IntelliSense desteği
  - Refactoring güvenliği
- **ESLint 9**
  - Kod kalitesi kontrolü
  - Next.js konfigürasyonu
  - Custom rules (gelecek)

#### Build Araçları
- **Turbopack** (Development)
  - Hızlı development server
  - Hot module replacement
- **Webpack** (Production)
  - Production build optimizasyonu

#### Package Manager
- **npm**
  - Dependency management
  - Script execution

## Geliştirme Ortamı

### Sistem Gereksinimleri
- **Node.js**: 18.17.0 veya üzeri
- **npm**: 9.0.0 veya üzeri
- **Git**: Version control

### IDE/Editor Desteği
- **VS Code** (Önerilen)
  - TypeScript desteği
  - Tailwind CSS IntelliSense
  - ESLint entegrasyonu
  - Prettier (gelecek)

### Browser Desteği
- **Modern Browsers**
  - Chrome 90+
  - Firefox 88+
  - Safari 14+
  - Edge 90+

## Konfigürasyon Dosyaları

### TypeScript (tsconfig.json)
```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "es6"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ]
  }
}
```

### Tailwind CSS (tailwind.config.js)
```javascript
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: { /* custom colors */ },
        blue: { /* custom colors */ }
      }
    }
  }
}
```

### Next.js (next.config.ts)
```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Konfigürasyon seçenekleri
};

export default nextConfig;
```

## Bağımlılıklar

### Production Dependencies
```json
{
  "lucide-react": "^0.536.0",
  "next": "15.4.5",
  "react": "19.1.0",
  "react-dom": "19.1.0"
}
```

### Development Dependencies
```json
{
  "@eslint/eslintrc": "^3",
  "@types/node": "^20",
  "@types/react": "^19",
  "@types/react-dom": "^19",
  "autoprefixer": "^10.4.21",
  "eslint": "^9",
  "eslint-config-next": "15.4.5",
  "postcss": "^8.5.6",
  "tailwindcss": "^3.4.17",
  "typescript": "^5"
}
```

## Script Komutları

### Development
```bash
npm run dev        # Development server (Turbopack)
npm run build      # Production build
npm run start      # Production server
npm run lint       # ESLint kontrolü
```

### Gelecek Script'ler
```bash
npm run test       # Unit tests
npm run test:e2e   # E2E tests
npm run type-check # TypeScript kontrolü
npm run analyze    # Bundle analizi
```

## Teknik Kısıtlamalar

### Mevcut Kısıtlamalar
1. **Client-side State**: Henüz global state management yok
2. **Backend API**: Henüz backend entegrasyonu yok
3. **Database**: Henüz veritabanı bağlantısı yok
4. **Authentication**: Henüz kullanıcı girişi yok
5. **Payment Processing**: Henüz ödeme sistemi yok

### Gelecek Entegrasyonlar
1. **State Management**: Zustand veya Redux Toolkit
2. **Backend**: Next.js API Routes veya external API
3. **Database**: PostgreSQL veya MongoDB
4. **Authentication**: NextAuth.js veya Auth0
5. **Payment**: Stripe veya Iyzico
6. **CMS**: Strapi veya Sanity

## Performans Hedefleri

### Lighthouse Skorları
- **Performance**: 90+
- **Accessibility**: 95+
- **Best Practices**: 95+
- **SEO**: 95+

### Core Web Vitals
- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1

### Bundle Analizi
- **Initial Bundle Size**: < 200KB
- **Total Bundle Size**: < 500KB
- **Tree Shaking**: Aktif

## Güvenlik Gereksinimleri

### Mevcut Güvenlik
- **HTTPS**: SSL/TLS şifreleme
- **Content Security Policy**: CSP headers
- **XSS Protection**: Input sanitization

### Gelecek Güvenlik
- **Authentication**: JWT tokens
- **Authorization**: Role-based access
- **Rate Limiting**: API protection
- **CSRF Protection**: Cross-site request forgery

## Deployment Stratejisi

### Hosting Platformu
- **Vercel** (Önerilen)
  - Next.js native desteği
  - Automatic deployments
  - Edge functions
  - Global CDN

### Environment Variables
```bash
# Development
NEXT_PUBLIC_API_URL=http://localhost:3000/api
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...

# Production
NEXT_PUBLIC_API_URL=https://api.example.com
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_...
```

### CI/CD Pipeline
- **GitHub Actions** (Planlanan)
  - Automated testing
  - Build verification
  - Deployment automation

## Monitoring ve Logging

### Performance Monitoring
- **Vercel Analytics**: Built-in analytics
- **Google Analytics**: User behavior tracking
- **Sentry**: Error tracking (gelecek)

### Logging Stratejisi
- **Console Logs**: Development debugging
- **Structured Logging**: Production monitoring
- **Error Boundaries**: React error handling

## Test Stratejisi

### Test Araçları (Gelecek)
- **Jest**: Unit testing
- **React Testing Library**: Component testing
- **Playwright**: E2E testing
- **MSW**: API mocking

### Test Coverage Hedefleri
- **Unit Tests**: %80+ coverage
- **Integration Tests**: Critical paths
- **E2E Tests**: User journeys 