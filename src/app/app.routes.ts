import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then(m => m.HomeComponent)
  },
  {
    path: '**',
    loadComponent: () => import('./pages/error/error').then(m => m.ErrorComponent)
  }
];
