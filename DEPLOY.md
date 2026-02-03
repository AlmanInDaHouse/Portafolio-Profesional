# 🚀 Guía de Despliegue en GitHub Pages

Esta guía te ayudará a publicar tu portafolio profesional en GitHub Pages paso a paso.

## 📋 Prerequisitos

✅ Tu proyecto ya está configurado con:
- SvelteKit con adapter-static
- Workflow de GitHub Actions
- Configuración base path

## 🔧 Pasos para Desplegar

### 1️⃣ Crear Repositorio en GitHub

1. Ve a [GitHub](https://github.com) e inicia sesión
2. Haz clic en el botón **"New"** o **"+"** → **"New repository"**
3. Configura tu repositorio:
   - **Repository name**: `Portafolio-Profesional` (o el nombre que prefieras)
   - **Visibility**: Public (necesario para GitHub Pages gratis)
   - **NO** marques "Initialize with README" (ya tienes archivos)
4. Haz clic en **"Create repository"**

### 2️⃣ Subir tu Código a GitHub

Abre tu terminal/PowerShell en la carpeta del proyecto y ejecuta:

```bash
cd "c:\Users\manul\Downloads\Portafolio-Profesional-main\Portafolio-Profesional-main"

# Si el nombre del repositorio es diferente, actualiza svelte.config.js primero
# Cambia la línea 15: base: dev ? '' : '/TU-NOMBRE-REPO'

# Verifica que estés en la rama main
git branch

# Si no estás en main, cámbiala
git checkout -b main

# Agrega el repositorio remoto (reemplaza TU-USUARIO con tu usuario de GitHub)
git remote add origin https://github.com/TU-USUARIO/Portafolio-Profesional.git

# O si ya tienes el remote configurado, actualiza la URL
# git remote set-url origin https://github.com/TU-USUARIO/Portafolio-Profesional.git

# Verifica que los cambios estén listos
git status

# Si hay cambios nuevos, agrégalos
git add .
git commit -m "fix: corregir workflow y configuración para GitHub Pages"

# Sube el código
git push -u origin main
```

### 3️⃣ Habilitar GitHub Pages

1. Ve a tu repositorio en GitHub
2. Haz clic en **Settings** (Configuración)
3. En el menú lateral, busca **Pages**
4. En **Source**, selecciona:
   - **Source**: GitHub Actions
5. **NO** necesitas seleccionar una rama manualmente, el workflow lo hará

### 4️⃣ Verificar el Despliegue

1. Ve a la pestaña **Actions** en tu repositorio
2. Deberías ver el workflow "Deploy to GitHub Pages" ejecutándose
3. Espera a que termine (toma 2-5 minutos)
4. Una vez completado con ✅, tu sitio estará disponible en:
   ```
   https://TU-USUARIO.github.io/Portafolio-Profesional
   ```

## 🔍 Verificación Local (Opcional)

Antes de subir a GitHub, puedes verificar que todo funcione localmente:

```bash
# Instalar dependencias
npm install

# Compilar el proyecto
npm run build

# Vista previa local
npm run preview
```

Abre tu navegador en `http://localhost:4173` para ver el resultado.

## ⚙️ Opciones de Configuración

### Cambiar el Nombre del Repositorio

Si usas un nombre diferente a `Portafolio-Profesional`, actualiza `svelte.config.js`:

```javascript
paths: {
  base: dev ? '' : '/TU-NOMBRE-REPO'
}
```

### Usar como Página Principal (username.github.io)

Si prefieres que tu portafolio sea `https://TU-USUARIO.github.io` en lugar de `https://TU-USUARIO.github.io/Portafolio-Profesional`:

1. Crea un repositorio con el nombre: `TU-USUARIO.github.io`
2. Actualiza `svelte.config.js`:
   ```javascript
   paths: {
     base: ''  // Deja vacío
   }
   ```

## 🔄 Actualizar tu Portafolio

Cada vez que hagas cambios:

```bash
git add .
git commit -m "feat: descripción de los cambios"
git push
```

El sitio se actualizará automáticamente en 2-5 minutos.

## 🐛 Solución de Problemas

### El workflow falla con error "Cannot find package 'vite'"

Este error ya ha sido corregido en el workflow actual. Si aún lo ves:
- Asegúrate de que `vite` esté listado en `devDependencies` del `package.json`
- El workflow ahora instala vite primero, antes que @sveltejs/kit

### El workflow falla en Actions

- Verifica que GitHub Pages esté habilitado en Settings > Pages
- Asegúrate de que el repositorio sea público
- Revisa los logs en la pestaña Actions para ver el error específico

### La página muestra 404

- Espera 5-10 minutos después del primer despliegue
- Verifica que la URL sea correcta: `https://TU-USUARIO.github.io/NOMBRE-REPO`
- Asegúrate de que el `base` path en `svelte.config.js` coincida con el nombre del repositorio

### Los estilos no cargan

- Verifica que el `base` path en `svelte.config.js` esté configurado correctamente
- El nombre debe coincidir exactamente con el nombre del repositorio (case-sensitive)

### El workflow no se ejecuta

- Verifica que el archivo esté en `.github/workflows/deploy.yml`
- Asegúrate de haber hecho push a la rama `main`
- Puedes ejecutarlo manualmente desde Actions > Deploy to GitHub Pages > Run workflow

## 📞 Información de Contacto

Si necesitas ayuda adicional, revisa:
- [Documentación de GitHub Pages](https://docs.github.com/es/pages)
- [Documentación de SvelteKit](https://kit.svelte.dev/docs)

---

**¡Tu portafolio estará online en minutos!** 🎉
