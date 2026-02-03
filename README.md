# Portafolio — Manuel Grande

Proyecto: Portafolio profesional construido con SvelteKit + TailwindCSS

Descripción
- Portafolio personal interactivo y responsivo para mostrar proyectos, habilidades y contacto.
- Incluye secciones: Hero, Sobre mí, Proyectos (con modal), Habilidades y Contacto.

Cómo ejecutar (local)
1. Instalar dependencias:
   npm install
2. Ejecutar en modo desarrollo:
   npm run dev
3. Construir para producción:
   npm run build
   npm run preview

Deploy a GitHub Pages

Este repo está configurado para desplegarse en GitHub Pages como una página de proyecto. El workflow de GitHub Actions construye la aplicación (adapter-static) y publica el contenido estático en Pages.

URL de acceso una vez desplegado (espera unos minutos tras el primer push):
https://AlmanInDaHouse.github.io/Portafolio-Profesional

Notas:
- SvelteKit usa kit.paths.base = '/Portafolio-Profesional' para que los assets funcionen en la URL del repo. Si cambias el nombre del repo, actualiza esa configuración.
- Para publicar como user page (AlmanInDaHouse.github.io) necesitarías un repo con ese nombre y cambiar base a ''.

Contacto
- Tel: 644 55 12 93
- Email: manuelgrandeecija1@gmail.com
