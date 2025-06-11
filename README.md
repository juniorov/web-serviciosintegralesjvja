# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


### Icons
https://boxicons.com/?query=



```scss

// style.scss
@import 'ruta/a/tu/scss/mixins/_breakpoints.scss'; // Ajusta la ruta según tu estructura
// o @import 'ruta/a/tu/scss/_mixins.scss';

// Tus estilos globales o de componentes
body {
  font-size: 16px;

  @include media-up(sm) { // Desde 576px hacia arriba
    font-size: 17px;
  }

  @include media-up(md) { // Desde 768px hacia arriba
    font-size: 18px;
  }

  @include media-up(lg) { // Desde 992px hacia arriba
    font-size: 19px;
  }

  @include media-up(xl) { // Desde 1200px hacia arriba
    font-size: 20px;
  }
}

.mi-componente {
  padding: 10px;

  @include media-down(md) { // Hasta 768px (es decir, xs, sm, md)
    background-color: lightblue;
  }

  @include media-only(sm) { // Solo para el rango 'sm' (576px - 767.98px)
    border: 1px solid blue;
  }

  @include media-between(md, xl) { // Entre md y xl (768px - 1199.98px)
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
  }
}
```
