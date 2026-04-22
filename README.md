Despliegue-de-una-PWA
Actividad: Investigación, Implementación y Despliegue de una PWA

PWA Test - Implementación y Despliegue
1. Web App Manifest (manifest.json)
El manifiesto es un archivo JSON que permite que la web sea instalable.

theme_color: Define el color de la barra de herramientas del navegador.
background_color: Color de la pantalla de carga (splash screen) antes de que la app inicie.
display:
standalone: Se abre en su propia ventana, sin barra de direcciones (parece app nativa).
browser: Se abre como una pestaña normal.
icons: Array de imágenes necesarias para el icono en el escritorio y la pantalla de carga.
2. Service Workers
Actúan como un Proxy de Red entre el navegador y el servidor.

Registro: Se realiza en el hilo principal de JS.
Ciclo de Vida:
Installation: Descarga y guarda archivos en caché.
Activation: Limpia cachés antiguos.
Fetching: Intercepta peticiones para decidir si servirlas desde el caché o internet.
3. Estrategias de Caching
Stale-While-Revalidate: Sirve desde el caché inmediatamente, pero busca una actualización en red de fondo.
Cache First: Ideal para assets estáticos (imágenes, fuentes). Solo va a red si no hay caché.
Network First: Ideal para datos dinámicos. Intenta red, y si falla (offline), usa el caché.
4. Seguridad y TLS (HTTPS)
HTTPS es obligatorio: Por seguridad, los Service Workers pueden interceptar tráfico sensible; el navegador solo los habilita bajo una conexión cifrada.
Install Prompt: Sin un certificado SSL válido, el navegador nunca mostrará el icono de "Instalar App".