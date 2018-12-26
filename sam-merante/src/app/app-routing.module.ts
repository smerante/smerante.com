import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CVComponent } from './cv/cv.component';
import { ProjectsComponent } from './projects/projects.component';
import { CodeComponent } from './code/code.component';

const routes: Routes = [
  { path: 'code', component: CodeComponent},
  { path: 'projects', component: ProjectsComponent},
  { path: 'home', component: HomeComponent},
  { path: 'cv', component: CVComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '*', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
