# 🏠 Cardenas Mortgage Group - Standalone Website

## 📋 Descripción

Esta es una versión **100% standalone** del sitio web profesional de Sandra Cárdenas para Cardenas Mortgage Group. 

**No necesita instalación, compilación ni frameworks**. Solo abre `index.html` en tu navegador y funciona.

## ✨ Características

- ✅ **HTML, CSS y JavaScript puro** - Sin React, sin build tools
- ✅ **Tailwind CSS via CDN** - Estilos modernos sin instalación
- ✅ **Lucide Icons via CDN** - Iconos hermosos
- ✅ **100% Funcional** - Calculadora, acordeón, formularios, animaciones
- ✅ **Responsive** - Funciona perfecto en móvil, tablet y desktop
- ✅ **Animaciones suaves** - CSS animations y JavaScript
- ✅ **Sin dependencias locales** - Todo via CDN

## 🚀 Cómo Usar

### Opción 1: Abrir directamente

1. Descarga la carpeta `standalone`
2. Haz doble clic en `index.html`
3. ¡Listo! El sitio se abre en tu navegador

### Opción 2: Con servidor local (recomendado)

Si tienes Python instalado:

```bash
cd standalone
python -m http.server 8000
```

Luego abre: `http://localhost:8000`

Si tienes Node.js:

```bash
cd standalone
npx serve
```

### Opción 3: Con VS Code

1. Instala la extensión "Live Server"
2. Abre la carpeta `standalone` en VS Code
3. Click derecho en `index.html` → "Open with Live Server"

## 📁 Estructura de Archivos

```
standalone/
├── index.html          # Página principal con Hero y Navbar
├── styles.css          # Estilos personalizados y animaciones
├── script.js           # JavaScript para interactividad
├── sections.html       # Todas las secciones restantes (copiar contenido a index.html)
└── README.md           # Este archivo
```

## 🎨 Personalización Rápida

### Cambiar Colores

Edita en `styles.css`:

```css
/* Busca estas líneas y cambia los colores */
background: linear-gradient(to right, #1e3a8a, #1e40af); /* Azul */
background: linear-gradient(to right, #d97706, #f59e0b); /* Dorado */
```

O edita el config de Tailwind en `index.html`:

```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: '#TU_COLOR_AQUI',
                secondary: '#TU_COLOR_AQUI',
            }
        }
    }
}
```

### Cambiar Contenido

Todo el contenido está en HTML plano. Simplemente busca el texto que quieres cambiar y edítalo directamente.

Por ejemplo, para cambiar el teléfono:
- Busca: `+1 813-903-0657`
- Reemplaza con tu número

### Cambiar Imagen de Perfil

En `index.html`, busca:

```html
<img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=1000&fit=crop" alt="Sandra Cardenas">
```

Reemplaza la URL con tu propia imagen (puede ser local o URL):

```html
<!-- Imagen local -->
<img src="images/mi-foto.jpg" alt="Sandra Cardenas">

<!-- O URL externa -->
<img src="https://tu-dominio.com/foto.jpg" alt="Sandra Cardenas">
```

## 🔧 Componentes Incluidos

### ✅ Navbar
- Navegación sticky con efecto scroll
- Menú móvil responsive
- Links de scroll suave

### ✅ Hero
- Headline con gradiente animado
- Badges de confianza
- Casas animadas en el fondo
- Tarjetas flotantes
- CTA buttons

### ✅ Partners
- Grid de logos de bancos
- Efectos hover

### ✅ Services
- 6 tarjetas de servicios
- Hover effects
- Iconos animados

### ✅ Calculator (Calculadora)
- Sliders interactivos
- Cálculo en tiempo real
- Totalmente funcional
- Responsive

### ✅ FAQ
- Accordion funcional
- 8 preguntas frecuentes
- Animaciones suaves

### ✅ Contact
- Formulario completo
- Información de contacto
- Footer con copyright

## 📱 Responsive Breakpoints

- **Móvil**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

Todo el sitio se adapta automáticamente.

## 🎯 Funcionalidad Incluida

### JavaScript Features:

1. **Navegación Suave**
   ```javascript
   scrollToSection('services') // Scroll suave a cualquier sección
   ```

2. **Calculadora Hipotecaria**
   - Cálculo de pago mensual
   - Sliders interactivos
   - Actualización en tiempo real

3. **Accordion FAQ**
   - Abrir/cerrar preguntas
   - Solo uno abierto a la vez

4. **Animaciones al Scroll**
   - Elementos aparecen al entrar en vista
   - Intersection Observer API

5. **Menú Móvil**
   - Toggle menu hamburguesa
   - Cierre automático al hacer click

6. **Navbar con Scroll Effect**
   - Cambia de estilo al hacer scroll
   - Glassmorphism effect

## 🎨 Animaciones CSS

Todas las animaciones están en `styles.css`:

- `fadeIn` - Aparición suave
- `fadeInRight` - Entrada desde derecha
- `floatCard` - Tarjetas flotantes
- `float` - Casas flotantes
- `countUp` - Números contadores
- `pulse` - Pulsación

## 🌐 CDN Usados

Este proyecto usa CDNs para funcionar sin instalación:

```html
<!-- Tailwind CSS v3 -->
<script src="https://cdn.tailwindcss.com"></script>

<!-- Lucide Icons -->
<script src="https://unpkg.com/lucide@latest"></script>
```

**Nota**: Requiere conexión a internet para cargar estos recursos. Si quieres una versión completamente offline, descarga estos archivos localmente.

## 📊 Secciones del Sitio

1. **Hero** - Sección principal con headline y CTA
2. **Partners** - Logos de instituciones financieras
3. **Trust Indicators** - Métricas y certificaciones
4. **Services** - 6 servicios principales
5. **Stats** - Estadísticas animadas
6. **Process** - 4 pasos del proceso
7. **Calculator** - Calculadora de hipoteca
8. **Benefits** - 6 beneficios clave
9. **Testimonials** - 3 testimonios de clientes
10. **About** - Biografía de Sandra
11. **Resources** - Guías y blog
12. **FAQ** - Preguntas frecuentes
13. **CTA** - Call to action final
14. **Contact** - Formulario y footer

## 🔍 SEO

El sitio incluye:
- Meta tags optimizados
- Descripciones relevantes
- Títulos jerárquicos (h1, h2, h3)
- Alt text en imágenes
- URLs semánticas

## 🚀 Deploy

### Para subir a un hosting:

1. **Netlify/Vercel**: Arrastra la carpeta `standalone`
2. **GitHub Pages**: Sube los archivos a tu repo
3. **Hosting tradicional**: Sube via FTP

No necesitas configuración especial, es HTML estático.

## 📝 Notas Importantes

### Calculadora
Los cálculos son aproximados. Para cotizaciones reales, los clientes deben contactarte.

### Formularios
Los formularios no envían datos automáticamente. Necesitas agregar backend para eso.

Para hacerlo funcional:
1. Usa un servicio como Formspree, Netlify Forms o EmailJS
2. O agrega tu propio backend PHP/Node.js

### Imágenes
Actualmente usa Unsplash para la foto de perfil. Reemplázala con la imagen real de Sandra.

## 🎯 Próximos Pasos

1. **Reemplaza la imagen** de perfil con la foto real
2. **Personaliza los colores** según tu marca
3. **Actualiza el contenido** con información real
4. **Conecta el formulario** a un servicio de email
5. **Agrega Google Analytics** si lo necesitas
6. **Sube a un hosting** para ponerlo en línea

## 💡 Tips

- Usa "Find & Replace" para cambiar información repetida (teléfono, email, etc.)
- Prueba en diferentes navegadores (Chrome, Firefox, Safari)
- Verifica en móvil antes de publicar
- Optimiza las imágenes antes de subir (usa TinyPNG)
- Considera agregar un chatbot o WhatsApp button

## 🐛 Solución de Problemas

**Los iconos no aparecen**
- Verifica conexión a internet
- Asegúrate de que `lucide.createIcons()` se ejecute

**La calculadora no funciona**
- Abre la consola del navegador (F12)
- Busca errores en JavaScript

**El menú móvil no abre**
- Verifica que el JavaScript se cargue correctamente
- Revisa la consola por errores

**Estilos se ven rotos**
- Verifica que Tailwind CDN cargue
- Revisa que styles.css esté enlazado

## ✅ Checklist Pre-Launch

- [ ] Reemplazar imagen de perfil
- [ ] Actualizar número de teléfono
- [ ] Actualizar email
- [ ] Actualizar dirección
- [ ] Verificar NMLS #
- [ ] Probar calculadora
- [ ] Probar formulario de contacto
- [ ] Probar en móvil
- [ ] Probar en diferentes navegadores
- [ ] Optimizar imágenes
- [ ] Agregar favicon
- [ ] Configurar Google Analytics (opcional)
- [ ] Probar todos los links
- [ ] Verificar que todos los íconos aparezcan

## 📞 Soporte

Para preguntas sobre el código, revisa los comentarios en cada archivo.

---

**Desarrollado para Cardenas Mortgage Group**  
Sandra Cárdenas | NMLS #183516  
© 2025 Todos los derechos reservados
