# 📦 Guía de Migración - Cardenas Mortgage Group Website

Esta guía te ayudará a migrar el proyecto completo a tu entorno de Vite.

## 📁 Estructura de Carpetas Recomendada

```
tu-proyecto-vite/
├── src/
│   ├── App.tsx
│   ├── main.tsx
│   ├── components/
│   │   ├── layout/
│   │   │   └── Navbar.tsx
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── Partners.tsx
│   │   │   ├── TrustIndicators.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── Stats.tsx
│   │   │   ├── Process.tsx
│   │   │   ├── Calculator.tsx
│   │   │   ├── Benefits.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Resources.tsx
│   │   │   ├── FAQ.tsx
│   │   │   ├── CTA.tsx
│   │   │   └── Contact.tsx
│   │   ├── shared/
│   │   │   └── AnimatedHouses.tsx
│   │   ├── ui/
│   │   │   └── [todos los componentes shadcn/ui]
│   │   └── figma/
│   │       └── ImageWithFallback.tsx
│   ├── assets/
│   │   └── images/
│   │       └── sandra-profile.png (tu imagen de perfil)
│   ├── styles/
│   │   └── globals.css
│   └── lib/
│       └── utils.ts
├── public/
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── tailwind.config.js (opcional para Tailwind v4)
```

## 📦 Dependencias Necesarias

### 1. Instalar dependencias principales

```bash
npm install react react-dom
npm install -D typescript @types/react @types/react-dom
npm install -D vite @vitejs/plugin-react
npm install -D tailwindcss@next @tailwindcss/vite@next
```

### 2. Instalar dependencias de UI y animaciones

```bash
# Motion (anteriormente Framer Motion)
npm install motion

# Lucide React (iconos)
npm install lucide-react

# Dependencias de Shadcn/UI
npm install @radix-ui/react-accordion
npm install @radix-ui/react-alert-dialog
npm install @radix-ui/react-aspect-ratio
npm install @radix-ui/react-avatar
npm install @radix-ui/react-checkbox
npm install @radix-ui/react-collapsible
npm install @radix-ui/react-context-menu
npm install @radix-ui/react-dialog
npm install @radix-ui/react-dropdown-menu
npm install @radix-ui/react-hover-card
npm install @radix-ui/react-label
npm install @radix-ui/react-menubar
npm install @radix-ui/react-navigation-menu
npm install @radix-ui/react-popover
npm install @radix-ui/react-progress
npm install @radix-ui/react-radio-group
npm install @radix-ui/react-scroll-area
npm install @radix-ui/react-select
npm install @radix-ui/react-separator
npm install @radix-ui/react-slider
npm install @radix-ui/react-switch
npm install @radix-ui/react-tabs
npm install @radix-ui/react-toast
npm install @radix-ui/react-toggle
npm install @radix-ui/react-toggle-group
npm install @radix-ui/react-tooltip
npm install @radix-ui/react-slot

# Utilidades
npm install class-variance-authority
npm install clsx
npm install tailwind-merge
npm install date-fns

# Componentes adicionales
npm install recharts
npm install react-day-picker
npm install sonner@2.0.3
npm install vaul
npm install embla-carousel-react
npm install input-otp
npm install react-resizable-panels
```

### 3. Instalar React Hook Form (para formularios)

```bash
npm install react-hook-form@7.55.0
npm install @hookform/resolvers
npm install zod
```

## 🚀 Pasos de Migración

### Paso 1: Configurar Vite

Crea o actualiza `vite.config.ts`:

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
```

### Paso 2: Configurar TypeScript

Actualiza `tsconfig.json`:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

### Paso 3: Configurar el archivo principal

Crea `src/main.tsx`:

```typescript
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/globals.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

### Paso 4: Crear index.html

Crea `index.html` en la raíz:

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Cardenas Mortgage Group - Sandra Cárdenas</title>
    <meta name="description" content="Asesoría hipotecaria profesional en Florida. Más de 10 años ayudando a familias latinas a alcanzar el sueño americano." />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

### Paso 5: Migrar archivos de componentes

#### Estructura de importaciones actualizada:

Para todos los componentes de secciones, actualiza las importaciones:

**ANTES (Figma Make):**
```typescript
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
```

**DESPUÉS (tu proyecto Vite):**
```typescript
import { Button } from "@/components/ui/button";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";
```

**Para App.tsx:**
```typescript
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Navbar } from "@/components/layout/Navbar";
// ... resto de imports
```

### Paso 6: Manejar las imágenes

**Opción 1: Usar la imagen de Figma (mantener import)**
Si tienes acceso a la imagen original, colócala en `src/assets/images/` y actualiza:

```typescript
// En Hero.tsx
import profileImage from "@/assets/images/sandra-profile.png";
```

**Opción 2: Usar URL directa**
```typescript
// En Hero.tsx
const profileImage = "https://tu-url-de-imagen.com/sandra.jpg";
```

### Paso 7: Configurar utilidades

Crea `src/lib/utils.ts` (si no existe):

```typescript
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

## 📝 Cambios Necesarios por Componente

### Hero.tsx
```typescript
// Cambiar:
import profileImage from "figma:asset/5205bf53cc3368afc23d3c3fd1050fc53216f456.png";

// Por:
import profileImage from "@/assets/images/sandra-profile.png";
// O usa una URL directa
```

### Todos los componentes de secciones
Actualizar todos los imports relativos a usar alias `@/`:

```typescript
// ANTES
import { Button } from "./ui/button";
import { AnimatedHouses } from "./AnimatedHouses";

// DESPUÉS
import { Button } from "@/components/ui/button";
import { AnimatedHouses } from "@/components/shared/AnimatedHouses";
```

## 🎨 Archivo globals.css

El archivo `styles/globals.css` ya está configurado correctamente. Solo cópialo tal cual.

## ✅ Checklist de Migración

- [ ] Instalar todas las dependencias
- [ ] Configurar vite.config.ts
- [ ] Configurar tsconfig.json
- [ ] Crear estructura de carpetas
- [ ] Copiar globals.css a src/styles/
- [ ] Migrar componentes UI (shadcn) a src/components/ui/
- [ ] Migrar componentes de layout a src/components/layout/
- [ ] Migrar componentes de secciones a src/components/sections/
- [ ] Migrar componentes compartidos a src/components/shared/
- [ ] Actualizar todas las importaciones con alias @/
- [ ] Configurar imágenes en src/assets/images/
- [ ] Crear main.tsx
- [ ] Crear index.html
- [ ] Actualizar App.tsx con nuevas rutas de import
- [ ] Probar el build: `npm run build`
- [ ] Probar el dev server: `npm run dev`

## 🚨 Problemas Comunes

### Error: Cannot find module '@/...'
**Solución:** Verifica que el alias esté configurado en `vite.config.ts` y `tsconfig.json`

### Error con Motion/Framer Motion
**Solución:** Asegúrate de usar `motion/react` no `framer-motion`

### Error con Tailwind
**Solución:** Verifica que estés usando Tailwind v4 con el plugin de Vite

### Imágenes no cargan
**Solución:** Verifica la ruta de las imágenes y que estén en `src/assets/`

## 📞 Estructura Final de Imports en App.tsx

```typescript
// src/App.tsx
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Partners } from "@/components/sections/Partners";
import { TrustIndicators } from "@/components/sections/TrustIndicators";
import { Services } from "@/components/sections/Services";
import { Stats } from "@/components/sections/Stats";
import { Process } from "@/components/sections/Process";
import { Calculator } from "@/components/sections/Calculator";
import { Benefits } from "@/components/sections/Benefits";
import { Testimonials } from "@/components/sections/Testimonials";
import { About } from "@/components/sections/About";
import { Resources } from "@/components/sections/Resources";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import { Contact } from "@/components/sections/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Partners />
      <TrustIndicators />
      <Services />
      <Stats />
      <Process />
      <Calculator />
      <Benefits />
      <Testimonials />
      <About />
      <Resources />
      <FAQ />
      <CTA />
      <Contact />
    </div>
  );
}
```

## 🎉 ¡Listo!

Después de seguir estos pasos, tu proyecto debería estar funcionando perfectamente en Vite.

Para iniciar el servidor de desarrollo:
```bash
npm run dev
```

Para hacer build de producción:
```bash
npm run build
```

Para previsualizar el build:
```bash
npm run preview
```
