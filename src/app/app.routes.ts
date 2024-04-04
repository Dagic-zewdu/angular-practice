import { Routes } from '@angular/router';
import { AboutView, DetailedView, HomeView } from '../view';

export const routes: Routes = [
  {
    path: '',
    component: HomeView,
  },
  {
    path: 'about',
    component: AboutView,
  },
  {
    path: 'details/:id',
    component: DetailedView,
  },
];
