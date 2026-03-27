import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then(m => m.HomeComponent)
  },
  {
    path: 'deep-dive',
    loadComponent: () => import('./pages/deep-dive/deep-dive').then(m => m.DeepDiveComponent)
  },
  {
    path: '**',
    loadComponent: () => import('./pages/error/error').then(m => m.ErrorComponent)
  }
];
