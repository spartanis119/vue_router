import { createRouter, createWebHistory } from 'vue-router'
//import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'active',
  routes: [
    // Esta es una manera de importar los vistas para luego renderizarlas, pero esta no es la mas optima pues hace que se carguen todas la vistar y luego si se muestra la que se quiere renderizar, haciendo que se cargen mas recursos y se mas lenta la pagina web. Para evitar esto se usa lazy-loader que permite cargar el componentes y renderizarlo cuando se necesite.
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView,
    // },
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/pokemons',
      name: 'pokemons',
      component: () => import('../views/PokemonsView.vue'),
    },
    // Rutas dinamica: Estas nos permiten que se tenga una diferente url segun un parametro que nosotros tengamos.
    // Para crearlas se debe agregar dos puntos y el nombre del parametro a pasar, este deber tener el mismo nombre que el agregado en al vista para coincidan, un ejemplo es el siguiente:
    {
      path: '/pokemons/:name',
      name: 'pokemon',
      component: () => import('../views/PokemonView.vue'),
    },
    // Esta ruta usa expresiones regulares para evuluar si las anteriores rutas no son accedidas desde el browser entonces nos mostrar una vista que sera un 404, importante dejarla al final de todas la rutas porque evalua las anteriores
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import("../views/NotFoundView.vue"),
    },
  ],
})

export default router
