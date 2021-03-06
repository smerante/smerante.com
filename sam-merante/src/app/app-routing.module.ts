import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CVComponent } from './cv/cv.component';
import { ProjectsComponent } from './projects/projects.component';
import { CodeComponent } from './code/code.component';
import { ComponentsComponent } from './components/components.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthenticatedComponents } from './forum/authenticated/authenticated.component';
import { AuthGuardService } from './auth-guard.service';
import { ForumComponent } from './forum/forum.component';
import { GameComponent } from './game/game.component';
import { StocksComponent } from './stocks/stocks.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'components', component: ComponentsComponent },
  {
    path: 'forum', component: ForumComponent, children: [
      { path: 'authenticated', component: AuthenticatedComponents, canActivate: [AuthGuardService] }
    ]
  },
  { path: 'code', component: CodeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'home', component: HomeComponent },
  { path: 'cv', component: CVComponent },
  { path: 'game', component: GameComponent },
  { path: 'stocks', component: StocksComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '*', redirectTo: '/home' },
  { path: '**', redirectTo: '/home' },
  { path: '404', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
