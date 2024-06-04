import { createRouter, createWebHistory } from 'vue-router';

import Home from './pages/Home.vue';
import About from './pages/About.vue';
import Projects from './pages/Projects.vue';
import Contacts from './pages/Contacts.vue';
import ProjectDetail from './pages/ProjectDetail.vue';
import TypeProjects from './pages/TypeProjects.vue';
import TechnologyProjects from './pages/TechnologyProjects.vue';
import Error404 from './pages/Error404.vue';

const router = createRouter({
  history: createWebHistory(),
  linkExactActiveClass: 'active',
  routes:[
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/chi-siamo',
      name: 'about',
      component: About,
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects,
    },
    {
      path: '/contatti',
      name: 'contacts',
      component: Contacts,
    },
    {
      path: '/dettaglio-progetto/:slug',
      name: 'projectDetail',
      component: ProjectDetail,
    },
    {
      path: '/tipi-progetto/:slug',
      name: 'typeProjects',
      component: TypeProjects,
    },
    {
      path: '/tecnologie-progetto/:slug',
      name: 'technologyProjects',
      component: TechnologyProjects,
    },
    {
      path: '/pathMatch(.*)*',
      name: 'error404',
      component: Error404,
    },

  ]
})

export { router }