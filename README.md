# ReCocina — Sitio web (Propuesta C · "Huerta amable")

Página de inicio responsiva de ReCocina: computadora, tablet y celular. Es HTML, CSS y JavaScript puro, sin instalar nada.

## Estructura

```
index.html        → la página
css/styles.css    → estilos (colores y tipografías en :root, al inicio)
js/main.js        → menú móvil, filtro de productos y validación del formulario
img/              → logo y fotos provisionales (SVG)
```

## Cómo verla

Da doble clic en `index.html` y se abre en tu navegador.

Si quieres usarla como `localhost`, abre una terminal en esta carpeta y ejecuta:

```
python -m http.server 8000
```

Después entra a http://localhost:8000

## Pendientes antes de publicar

1. **Fotos.** Ya están integradas las 8 fotos. Cada una viene en WebP (ligera) y en JPG (respaldo); la del hero y la del equipo tienen además una versión de 800 px para celular. Los originales en alta resolución están en `img/originales/`. Para cambiar una foto, reemplaza el `.webp` y el `.jpg` que tienen el mismo nombre.
2. **Datos.** Busca en `index.html` estos marcadores y reemplázalos:
   - `[CIFRA]`: los datos reales de impacto.
   - `[PRECIO]`: los precios de los productos.
   - `[CORREO@RECOCINA]`, `[TELÉFONO]`, `[DIRECCIÓN DE LA COCINA]`: los datos de contacto. Actualiza también los enlaces `mailto:` y `tel:`.
3. **Logo.** `img/logo-recocina.svg` es un símbolo provisional. Si ya tienen logo, reemplázalo.
4. **Formulario.** Por ahora solo valida los campos y muestra un mensaje de confirmación; todavía no envía nada. Para recibir los mensajes puedes conectarlo a Formspree o a Netlify Forms, o a un backend propio (en `js/main.js` está marcado dónde hacerlo).

## Accesibilidad (POUR)

- **Perceptible:** contraste AA en textos y botones (el naranja de los botones es #C2561A), textos alternativos en las imágenes, íconos siempre acompañados de texto.
- **Operable:** enlace para "Saltar al contenido", navegación completa con teclado, foco visible en naranja, botones de al menos 44–56 px y respeto a la preferencia de "reducir movimiento".
- **Comprensible:** etiquetas en todos los campos, errores explicados en texto y un orden de lectura claro.
- **Robusto:** HTML semántico (`header`, `nav`, `main`, `section`, `footer`), atributos ARIA solo donde hacen falta y avisos para lectores de pantalla (`aria-live`) en el filtro y el formulario.

## Pasarla a Figma

- **Sin publicar:** abre `index.html` en Chrome y usa la extensión de html.to.design. Si la abriste con doble clic (`file://`), activa "Permitir el acceso a las URL de archivos" en la configuración de la extensión.
- **Con URL pública:** súbela a Netlify Drop o Vercel y pega la URL en el plugin dentro de Figma.

Para obtener marcos de escritorio, tablet y celular, captura la página con anchos de 1440, 768 y 390 px.

## Publicarla gratis

- **Netlify Drop:** arrastra esta carpeta completa a la página de Netlify Drop.
- **Vercel:** en una terminal dentro de esta carpeta, ejecuta `npx vercel`.
