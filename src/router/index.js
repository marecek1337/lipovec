import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../views/MainPage.vue'



import ZastupitelstvaKomisie from '../views/zastupitelstva/ZastupitelstvaKomisie.vue'
import ZastupitelstvaPoslanci from '../views/zastupitelstva/ZastupitelstvaPoslanci.vue'
import ZastupitelstvaZapisnice from '../views/zastupitelstva/ZastupitelstvaZapisnice.vue'


import DokumentyMain from '../views/dokumenty/DokumentyMain.vue'
/*
import DokumentyKontrolor from '../views/dokumenty/DokumentyKontrolor.vue'
import DokumentyVzn from '../views/dokumenty/DokumentyVzn.vue'
import DokumentyZmluvy from '../views/dokumenty/DokumentyZmluvy.vue'
import DokumentyPozvanky from '../views/dokumenty/DokumentyPozvanky.vue'
import DokumentyTlaciva from '../views/dokumenty/DokumentyTlaciva.vue'
import DokumentyAuditor from '../views/dokumenty/DokumentyAuditor.vue'
import DokumentyPlan from '../views/dokumenty/DokumentyPlan.vue'
import DokumentyRozpocet from '../views/dokumenty/DokumentyRozpocet.vue'
*/

import NovinkyPage from '../views/Novinky/NovinkyPage.vue'
import OznamyPage from '../views/Oznamy/OznamyPage.vue'
import Akcie2022Page from '../views/Akcie/2022/Akcie2022Page.vue'
import Akcie2023Page from '../views/Akcie/2023/Akcie2023Page.vue'
import Akcie2024Page from '../views/Akcie/2024/Akcie2024Page.vue'



const routes = [
  {
    path: '/novinky',
    name: 'Novinky',
    component: NovinkyPage
  },
  {
    path: '/novinky/:novinkyId',
    name: 'NovinkyDetailPage',
    component: () => import('@/views/Novinky/NovinkyDetailPage.vue')
  },
  {
    path: '/oznamy',
    name: 'Oznamy',
    component: OznamyPage
  },
  {
    path: '/oznamy/:oznamyId',
    name: 'OznamyDetailPage',
    component: () => import('@/views/Oznamy/OznamyDetailPage.vue')
  },
  {
    path: '/akcie/2022',
    name: 'Akcie2022',
    component: Akcie2022Page
  },
  {
    path: '/akcie/2022/:akcieId',
    name: 'Akcie2022DetailPage',
    component: () => import('@/views/Akcie/2022/Akcie2022DetailPage.vue')
  },
  {
    path: '/akcie/2023',
    name: 'Akcie2023',
    component: Akcie2023Page
  },
  {
    path: '/akcie/2023/:akcieId',
    name: 'Akcie2023DetailPage',
    component: () => import('@/views/Akcie/2023/Akcie2023DetailPage.vue')
  },
  {
    path: '/akcie/2024',
    name: 'Akcie2024',
    component: Akcie2024Page
  },
  {
    path: '/akcie/2024/:akcieId',
    name: 'Akcie2024DetailPage',
    component: () => import('@/views/Akcie/2024/Akcie2024DetailPage.vue')
  },
  {
    path: '/',
    name: 'MainPage',
    component: MainPage
  },
  {
    path: '/:postId',
    name: 'MainDetailPage',
    component: () => import('@/views/MainDetailPage.vue')
  },


  {
    path: '/zastupitelstvo/poslanci',
    name: 'zastupitelstvoPoslanci',
    component: ZastupitelstvaPoslanci
  }
  ,
  {
    path: '/zastupitelstvo/komisie',
    name: 'zastupitelstvoKomisie',
    component: ZastupitelstvaKomisie
  }
  ,
  {
    path: '/zastupitelstvo/zapisnice',
    name: 'zastupitelstvoZapisnice',
    component: ZastupitelstvaZapisnice
  }
  ,
  {
    path: '/dokumenty',
    name: 'dokumenty',
    component: DokumentyMain
  }
  ,
  {
    path: '/dokumenty/kontrolor',
    name: 'kontrolor',
    component: DokumentyMain
  }
  ,
  {
    path: '/dokumenty/vzn',
    name: 'vzn',
    component: DokumentyMain 
  }
  ,
  {
    path: '/dokumenty/zmluvy',
    name: 'zmluvy',
    component: DokumentyMain
  }
  ,
  {
    path: '/dokumenty/pozvanky',
    name: 'pozvanky',
    component: DokumentyMain
  }
  ,
  {
    path: '/dokumenty/tlaciva',
    name: 'tlaciva',
    component: DokumentyMain
  }
  ,
  {
    path: '/dokumenty/auditor',
    name: 'auditor',
    component: DokumentyMain
  }
  ,
  {
    path: '/dokumenty/plan',
    name: 'plan',
    component: DokumentyMain
  }
  ,
  {
    path: '/dokumenty/rozpocet',
    name: 'rozpocet',
    component: DokumentyMain
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router