import { Routes } from '@angular/router';
import { ProgramService } from './services/program.service';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./components/intro/intro.component').then(m => m.IntroComponent)
    },
    {
        path: 'home',
        loadComponent: () => import('./components/home/main-page/main-page.component').then(m => m.MainPageComponent),
        providers: [ProgramService],
        canActivate: [() => { console.log('Tentative d\'accès à la route...'); return true; }]
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
