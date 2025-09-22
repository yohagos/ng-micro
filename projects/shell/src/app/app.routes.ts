import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'mfe1',
    loadChildren: () => import('./../../../mfe1/src/app/app.routes').then(m => m.routes),
  },
  {
    path: 'mfe2',
    loadChildren: () => import('./../../../mfe2/src/app/app.routes').then(m => m.routes),
  },
  {
    path: 'home',
    loadChildren: () => import('./shell-home/shell-home').then(m => m.ShellHome),
  },
  {
    path: '',
    redirectTo: 'mfe1',
    pathMatch: 'full',
  },
];
