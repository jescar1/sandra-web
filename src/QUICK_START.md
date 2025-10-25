# 🚀 Quick Start - Instalación Rápida

## ⚡ Inicio Rápido (5 minutos)

### 1️⃣ Instalar TODAS las dependencias de una vez

Copia y pega este comando completo:

```bash
npm install react react-dom motion lucide-react class-variance-authority clsx tailwind-merge date-fns recharts react-day-picker sonner@2.0.3 vaul embla-carousel-react input-otp react-resizable-panels react-hook-form@7.55.0 @hookform/resolvers zod @radix-ui/react-accordion @radix-ui/react-alert-dialog @radix-ui/react-aspect-ratio @radix-ui/react-avatar @radix-ui/react-checkbox @radix-ui/react-collapsible @radix-ui/react-context-menu @radix-ui/react-dialog @radix-ui/react-dropdown-menu @radix-ui/react-hover-card @radix-ui/react-label @radix-ui/react-menubar @radix-ui/react-navigation-menu @radix-ui/react-popover @radix-ui/react-progress @radix-ui/react-radio-group @radix-ui/react-scroll-area @radix-ui/react-select @radix-ui/react-separator @radix-ui/react-slider @radix-ui/react-switch @radix-ui/react-tabs @radix-ui/react-toast @radix-ui/react-toggle @radix-ui/react-toggle-group @radix-ui/react-tooltip @radix-ui/react-slot
```

```bash
npm install -D typescript @types/react @types/react-dom vite @vitejs/plugin-react tailwindcss@next @tailwindcss/vite@next
```

### 2️⃣ Configurar archivos base

**vite.config.ts:**
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

**tsconfig.json** (actualizar paths):
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

**src/main.tsx:**
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

**src/lib/utils.ts:**
```typescript
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

### 3️⃣ Copiar archivos del proyecto

**Estructura que necesitas crear:**
```
src/
├── App.tsx
├── main.tsx
├── components/
│   ├── layout/
│   │   └── Navbar.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Partners.tsx
│   │   ├── TrustIndicators.tsx
│   │   ├── Services.tsx
│   │   ├── Stats.tsx
│   │   ├── Process.tsx
│   │   ├── Calculator.tsx
│   │   ├── Benefits.tsx
│   │   ├── Testimonials.tsx
│   │   ├── About.tsx
│   │   ├── Resources.tsx
│   │   ├── FAQ.tsx
│   │   ├── CTA.tsx
│   │   └── Contact.tsx
│   ├── shared/
│   │   └── AnimatedHouses.tsx
│   ├── ui/
│   │   └── [todos los componentes shadcn]
│   └── figma/
│       └── ImageWithFallback.tsx
├── assets/
│   └── images/
│       └── sandra-profile.png
├── lib/
│   └── utils.ts
└── styles/
    └── globals.css
```

### 4️⃣ Actualizar imports en TODOS los archivos

**Buscar y reemplazar globalmente:**

```
BUSCAR: import { Button } from "./ui/button"
REEMPLAZAR: import { Button } from "@/components/ui/button"

BUSCAR: import { ImageWithFallback } from "./figma/ImageWithFallback"
REEMPLAZAR: import { ImageWithFallback } from "@/components/figma/ImageWithFallback"

BUSCAR: import { AnimatedHouses } from "./AnimatedHouses"
REEMPLAZAR: import { AnimatedHouses } from "@/components/shared/AnimatedHouses"
```

### 5️⃣ Actualizar App.tsx

```typescript
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

### 6️⃣ Manejar la imagen de perfil

**Opción A: Usar tu propia imagen**
1. Coloca tu foto en `src/assets/images/sandra-profile.png`
2. En `Hero.tsx` actualiza:
```typescript
import profileImage from "@/assets/images/sandra-profile.png";
```

**Opción B: Usar URL externa**
```typescript
// En Hero.tsx, línea ~6
const profileImage = "https://tu-dominio.com/imagen.jpg";
// Y comenta el import
```

### 7️⃣ Correr el proyecto

```bash
npm run dev
```

Abre: `http://localhost:5173`

---

## 🔧 Script de Búsqueda y Reemplazo

Si usas VS Code, usa estos regex para actualizar todos los imports automáticamente:

**Find (Regex habilitado):**
```regex
from ['"]\.\/(.*?)['"]
```

**Replace:**
```
from "@/components/$1"
```

---

## 📋 Checklist Post-Instalación

- [ ] `npm run dev` funciona sin errores
- [ ] Todos los componentes se renderizan
- [ ] No hay warnings de imports en consola
- [ ] Navegación scroll funciona
- [ ] Calculadora funciona
- [ ] Animaciones se ven
- [ ] Responsive en móvil funciona
- [ ] Build funciona: `npm run build`

---

## 🐛 Solución de Problemas Comunes

### Error: "Cannot find module '@/components/...'"
**Solución:**
1. Verifica que `vite.config.ts` tenga el alias configurado
2. Reinicia el servidor de desarrollo
3. Verifica que tsconfig.json tenga paths configurado

### Error: "motion is not defined"
**Solución:**
```bash
npm install motion
```

### Error: "Module not found: lucide-react"
**Solución:**
```bash
npm install lucide-react
```

### Tailwind no funciona
**Solución:**
1. Verifica que globals.css esté importado en main.tsx
2. Verifica que el plugin de Tailwind esté en vite.config.ts
3. Usa Tailwind v4: `npm install -D tailwindcss@next @tailwindcss/vite@next`

### Build falla
**Solución:**
```bash
# Limpiar caché
rm -rf node_modules
rm -rf .vite
npm install
npm run build
```

---

## 🎨 Personalizar Colores Rápidamente

En `src/styles/globals.css`:

```css
:root {
  --primary: #1e3a8a;        /* Azul principal */
  --primary-foreground: #ffffff;
  
  /* Cambiar estos valores: */
  --primary: #TU_COLOR;
  --accent: #TU_COLOR_ACENTO;
}
```

Colores usados en el sitio:
- Azul marino: `#1e3a8a` (botones, títulos)
- Dorado/Amber: `#d97706` (acentos, badges)
- Slate: `#64748b` (texto secundario)

---

## 📱 Probar Responsive

```bash
# Móvil
Resize browser to 375px width

# Tablet
Resize browser to 768px width

# Desktop
Resize browser to 1440px width
```

O usa DevTools de Chrome:
1. F12
2. Toggle device toolbar (Ctrl+Shift+M)
3. Selecciona iPhone 12 Pro / iPad / Desktop

---

## ✅ ¡Listo!

Tu proyecto debería estar 100% funcional. Si encuentras algún error:

1. Revisa la consola del navegador
2. Revisa la terminal donde corre `npm run dev`
3. Verifica que todas las dependencias estén instaladas
4. Verifica que todos los imports usen el alias `@/`

**Para producción:**
```bash
npm run build
npm run preview
```

El build estará en `/dist` listo para deploy.
