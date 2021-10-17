import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeModule } from './pages/home/home.module';

import type { Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'home',
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes), HomeModule],
    exports: [RouterModule]
})
export class AppRoutingModule {}
