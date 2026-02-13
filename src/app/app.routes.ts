import { Routes } from '@angular/router';
import { ProgramService } from './services/program.service';

export const routes: Routes = [
    {
        path: 'home',
        loadComponent: () => import('./components/home/main-page/main-page.component').then(m => m.MainPageComponent),
        providers: [ProgramService]
    },
    {
        path: 'gift',
        loadComponent: () => import('./components/gift/gift-page/gift-page.component').then(m => m.GiftPageComponent)
    },
    {
        path: 'test',
        loadComponent: () => import('./components/home/home/home.component').then(m => m.HomeComponent)
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];
