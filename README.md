# 036legacy

Stio web antiguo, revisitado y re-escrito para Astro.

![Alt text](brandwhite.png?raw=true 'Title')

## IMPORTANTE

❌ **NO utilizarlo para tus proyectos web, tiene elementos de JavaScript encriptados e interfieren en el desarrollo con TypeScript**

El motivo de la re-escritura de tecnología de esta web app fue **requerida** para reutilizar elementos para el proyecto de 036studios.

Tiene elementos encriptados del template [original](https://colorlib.com/wp/template/alime/) que a su vez contiene JQuery que hace restrictivo su desarrollo, además de que esto está orientado a Astro, varias cosas de las que se tenía planeado implementar no funcionan.

Puedes descargarlo y testearlo de cómo ha quedado el proyecto en sus días.

> Es el colmo usar JQuery y librerías de Javascript que ya manipulan el DOM, no lo hagan, hacen que [ref](https://www.solidjs.com/docs/latest#ref) se haya hecho por las "webas", de la misma manera para React y librerías a fines.
> Curiosidad: Me he demorado una semana en limpiar y pasar todo el proyecto antiguo a este a React.
> Curiosidad 2: Me he demorado menos de un día en re-limpiar todo el proyecto de React a Solid.js.
> Curiosidad 3: 2 días y medio en dejar a manera definitiva todo el proyecto de Solid.js a Vue.
>
> Curiosidad finalisima, me he demorado 2 días y hace 9 meses de julio del 2023 en dos días más en dejar todo el proyecto de Vue a Astro de manera definitiva.

## Cosas que no funcionan o funcionan mal

- **Firebase**: La conexión con las bases de datos no funcionan por el uso excesivo de JQuery que este tenía, por lo tanto no funciona los comentarios, el chatbox y el apartado de contacto.

- **Cambio de Estilos**: Al pasar de Arkano036 a 036 Creative Studios, el tema oscuro se mantiene opacando los textos negros, para que regrese a la normalidad pulsa Ctrl + Shift + R para recargar en su totalidad.

- **Interacción con JQuery**: Los elementos encriptados del template a veces dejan de funcionar (Carrusel de imágenes al inicio, fotos de instagram, etc.), para que regrese a la normalidad pulsa Ctrl + Shift + R para recargar en su totalidad.

### Por si quieres probar y verificar (Usa pnpm)

```bash
# git clone https://github.com/victor7w7r/036legacy

$ cd 036legacy
$ bun install
$ bun run dev
```
