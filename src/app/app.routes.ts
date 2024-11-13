import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { authGaurd } from './core/auth-guard';


export const routes: Routes = [
    {
        path:"home",
        component:HomeComponent,
        canActivate:[authGaurd]
    },
    {
        path:"register",
        component:RegisterComponent
    },
    {
        path:"login",
        component:LoginComponent
    }
];
