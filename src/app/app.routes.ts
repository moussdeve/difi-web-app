import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Admin } from './admin/admin';

export const routes: Routes = [
    {path: 'home', component: Home},
    {path: 'about', component: About},
    {path: 'admin', component: Admin}
];
