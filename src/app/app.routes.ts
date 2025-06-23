import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'basic',
    title: 'Basic Pipes',
    loadComponent: () => import('./pages/basic-page/basic-page.component'),
  },
  {
    path: 'numbers',
    title: 'Number Pipes',
    loadComponent: () => import('./pages/numbers-page/numbers-page.component'),
  },
  {
    path: 'custom',
    title: 'Custom Pipes',
    loadComponent: () => import('./pages/custom-page/custom-page.component'),
  },
  {
    path: 'uncommon',
    title: 'Uncommon Pipes',
    loadComponent: () =>
      import('./pages/uncommon-page/uncommon-page.component'),
  },
  {
    path: '**',
    redirectTo: 'basic',
  },
];
