# 📂 Estructura Detallada de Componentes

## 🗂️ Organización por Carpetas

### 📍 /components/layout/
Componentes de estructura y navegación que aparecen en todas las páginas.

```
layout/
└── Navbar.tsx          # Barra de navegación fija con menú responsive
```

**Navbar.tsx**
- Navegación sticky con efecto glassmorphism al hacer scroll
- Menú móvil animado con Motion
- Links de scroll smooth a secciones
- Botón CTA de llamada prominente

---

### 📍 /components/sections/
Todos los componentes de secciones principales del sitio.

```
sections/
├── Hero.tsx            # Sección principal con headline y CTA
├── Partners.tsx        # Logos de instituciones financieras
├── TrustIndicators.tsx # Métricas de confianza y certificaciones
├── Services.tsx        # Servicios ofrecidos (6 tarjetas)
├── Stats.tsx          # Estadísticas animadas con números contadores
├── Process.tsx        # Timeline del proceso (4 pasos)
├── Calculator.tsx     # Calculadora hipotecaria interactiva
├── Benefits.tsx       # 6 beneficios con glassmorphism
├── Testimonials.tsx   # 3 testimonios de clientes
├── About.tsx          # Biografía y experiencia profesional
├── Resources.tsx      # Guías descargables y blog
├── FAQ.tsx            # Preguntas frecuentes con accordion
├── CTA.tsx            # Call-to-action final
└── Contact.tsx        # Formulario de contacto y redes sociales
```

#### Descripción de cada sección:

**Hero.tsx** (Sección #1)
- Headline con gradiente animado
- Badges de confianza (5 estrellas, familias satisfechas)
- 2 botones CTA principales
- Imagen de perfil con tarjetas flotantes
- Estadísticas en línea (10+ años, 98%, $250M+)

**Partners.tsx** (Sección #2)
- Grid de logos de bancos/instituciones
- Efecto grayscale con hover a color
- Responsive grid

**TrustIndicators.tsx** (Sección #3)
- 6 indicadores principales en grid
- 3 tarjetas de certificaciones
- Mensaje de confianza destacado
- Iconos animados con hover

**Services.tsx** (Sección #4)
- 6 tarjetas de servicios en grid
- Cada tarjeta con icono, título, descripción y features
- Hover effects con elevación
- CTA box al final con gradiente

**Stats.tsx** (Sección #5)
- 4 estadísticas con números animados (count-up)
- Fondo con gradiente azul oscuro
- Iconos en círculos con gradiente dorado
- Patrón de fondo sutil

**Process.tsx** (Sección #6)
- Timeline de 4 pasos
- Línea conectora entre pasos (desktop)
- Números de paso en badges
- Animación escalonada al scroll

**Calculator.tsx** (Sección #7)
- Formulario interactivo con sliders
- Cálculo en tiempo real
- 4 inputs: precio, down payment, tasa, plazo
- Tarjetas de resultado con gradiente
- Totalmente funcional

**Benefits.tsx** (Sección #8)
- 6 tarjetas con glassmorphism
- Fondo oscuro con elementos animados
- Grid responsive 3 columnas
- Iconos coloridos con gradientes

**Testimonials.tsx** (Sección #9)
- 3 testimonios en tarjetas
- Fotos de clientes
- Rating de 5 estrellas
- Quote icon destacado

**About.tsx** (Sección #10)
- Grid 2 columnas
- Lista de experiencia profesional
- Quote destacado
- Habilidades en grid
- Licencias y certificaciones

**Resources.tsx** (Sección #11)
- 4 recursos descargables
- 3 artículos de blog con imágenes
- Categorías y fechas
- Botones de descarga

**FAQ.tsx** (Sección #12)
- 8 preguntas frecuentes
- Accordion de Shadcn/UI
- Animaciones smooth
- CTA final

**CTA.tsx** (Sección #13)
- Imagen de fondo con overlay
- Headline impactante
- Lista de beneficios con checkmarks
- 2 botones CTA
- 3 tarjetas de servicios destacados

**Contact.tsx** (Sección #14 - Footer)
- Formulario de contacto completo
- 3 métodos de contacto (teléfono, email, dirección)
- 4 iconos de redes sociales
- Footer con logo y copyright

---

### 📍 /components/shared/
Componentes compartidos que se usan en múltiples secciones.

```
shared/
└── AnimatedHouses.tsx  # Casas 2D flotantes para el fondo
```

**AnimatedHouses.tsx**
- 6 casas SVG con diferentes colores
- Animaciones de flotación infinitas
- Opacidad reducida para fondo
- Posicionamiento absolute

---

### 📍 /components/ui/
Componentes de Shadcn/UI (sistema de diseño base).

```
ui/
├── accordion.tsx       # Usado en: FAQ
├── button.tsx          # Usado en: Todas las secciones
├── input.tsx           # Usado en: Contact, Calculator
├── label.tsx           # Usado en: Calculator, Contact
├── slider.tsx          # Usado en: Calculator
├── textarea.tsx        # Usado en: Contact
└── [otros 30+ componentes]
```

---

### 📍 /components/figma/
Componentes helper de Figma Make.

```
figma/
└── ImageWithFallback.tsx  # Componente de imagen con fallback
```

**ImageWithFallback.tsx**
- Wrapper de <img> con manejo de errores
- Usado para todas las imágenes del sitio

---

## 🎨 Dependencias por Componente

### Navbar.tsx
```typescript
- lucide-react: Menu, X, Phone
- motion/react: motion, AnimatePresence
- @/components/ui/button
```

### Hero.tsx
```typescript
- lucide-react: ArrowRight, Star, Play, CheckCircle2
- motion/react: motion
- @/components/ui/button
- @/components/shared/AnimatedHouses
- @/components/figma/ImageWithFallback
```

### Calculator.tsx
```typescript
- react: useState
- lucide-react: Calculator, TrendingDown, Home, Percent
- motion/react: motion
- @/components/ui/button
- @/components/ui/input
- @/components/ui/label
- @/components/ui/slider
```

### Stats.tsx
```typescript
- react: useEffect, useState, useRef
- lucide-react: TrendingUp, Users, Home, Award
- motion/react: motion, useInView
```

### FAQ.tsx
```typescript
- lucide-react: HelpCircle
- motion/react: motion
- @/components/ui/accordion
```

### Contact.tsx
```typescript
- lucide-react: Facebook, Instagram, Linkedin, MessageCircle, Mail, Phone, MapPin, Send
- motion/react: motion
- @/components/ui/button
- @/components/ui/input
- @/components/ui/textarea
```

---

## 📊 Flujo de Datos

### Calculator.tsx - Estado Local
```typescript
const [loanAmount, setLoanAmount] = useState(300000);
const [downPayment, setDownPayment] = useState(60000);
const [interestRate, setInterestRate] = useState(6.5);
const [loanTerm, setLoanTerm] = useState(30);

// Cálculo reactivo
const monthlyPayment = calculateMonthlyPayment();
```

### Stats.tsx - Animación con useInView
```typescript
const ref = useRef(null);
const isInView = useInView(ref, { once: true });

// Counter animation cuando entra en vista
useEffect(() => {
  if (!isInView) return;
  // Animar números desde 0 hasta el valor
}, [isInView, value]);
```

### Navbar.tsx - Scroll State
```typescript
const [isScrolled, setIsScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 20);
  };
  window.addEventListener("scroll", handleScroll);
}, []);
```

---

## 🎯 Puntos de Entrada

### App.tsx
El componente principal que orquesta todo:

1. Renderiza Navbar (sticky top)
2. Renderiza todas las secciones en orden
3. No maneja estado global
4. Solo composición de componentes

### Navegación
El scroll smooth se maneja mediante:

```typescript
// En Navbar.tsx
const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    const offset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }
};
```

Cada sección debe tener un `id` correspondiente:
- `id="home"` - Hero
- `id="services"` - Services
- `id="calculator"` - Calculator
- `id="resources"` - Resources
- `id="about"` - About
- `id="contact"` - Contact

---

## 🔧 Personalización Rápida

### Cambiar colores del tema
Edita `styles/globals.css`:
```css
:root {
  --primary: #1e3a8a;  /* Azul marino */
  /* Cambiar a tus colores */
}
```

### Cambiar contenido
Cada componente tiene sus datos hardcoded para fácil edición:

```typescript
// En Services.tsx
const services = [
  {
    icon: Home,
    title: "Primera Casa",
    description: "...",
    // Editar aquí
  },
];
```

### Añadir nuevas secciones
1. Crear componente en `/components/sections/`
2. Importar en `App.tsx`
3. Añadir al JSX en orden deseado
4. Agregar `id` si necesita navegación

---

## 📱 Responsive Breakpoints

Todos los componentes usan breakpoints de Tailwind:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

Patrón común:
```typescript
className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
```

---

## ✅ Testing Checklist

Al migrar, verificar:
- [ ] Todas las secciones renderizán
- [ ] Navegación scroll funciona
- [ ] Calculadora calcula correctamente
- [ ] Animaciones se ejecutan
- [ ] Responsive en móvil
- [ ] Imágenes cargan
- [ ] Formulario de contacto tiene validación
- [ ] FAQ accordion abre/cierra
- [ ] Stats animan al scroll
- [ ] Hover effects funcionan
