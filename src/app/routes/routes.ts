import { CanActivate } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';

import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { RecoverComponent } from './pages/recover/recover.component';
import { LockComponent } from './pages/lock/lock.component';
import { MaintenanceComponent } from './pages/maintenance/maintenance.component';
import { Error404Component } from './pages/error404/error404.component';
import { Error500Component } from './pages/error500/error500.component';
import { LoginGuard } from '../services/guards/login.guard';

export const routes = [

    {
        path: '',
        component: LayoutComponent, CanActivate: [LoginGuard],
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', loadChildren: './home/home.module#HomeModule' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'config', loadChildren: './usuario/usuario.module#UsuarioModule' },
            { path: 'client', loadChildren: './client/client.module#ClientModule' },
            { path: 'ventas', loadChildren: './venta/venta.module#VentaModule' }
        ]
    },

    // Not lazy-loaded routes
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'recover', component: RecoverComponent },
    { path: 'lock', component: LockComponent },
    { path: 'maintenance', component: MaintenanceComponent },
    { path: '404', component: Error404Component },
    { path: '500', component: Error500Component },

    // Not found
    { path: '**', redirectTo: 'home' }

];
