import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'home',
        loadComponent: () => import('./components/home/main-page/main-page.component').then(m => m.MainPageComponent)
    },
    {
        path: 'gift',
        loadComponent: () => import('./components/gift/gift-page/gift-page.component').then(m => m.GiftPageComponent)
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];
