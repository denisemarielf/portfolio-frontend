import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EducationContainerComponent } from './components/education-components/education-container/education-container.component';
import { ExperiencesContainerComponent } from './components/experience-components/experiences-container/experiences-container.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProyectosContainerComponent } from './components/proyecto-components/proyectos-container/proyectos-container.component';
import { SkillsContainerComponent } from './components/skill-components/skills-container/skills-container.component';
import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'experiencia', component: ExperiencesContainerComponent},
  { path: 'educacion', component: EducationContainerComponent},
  { path: 'habilidades', component: SkillsContainerComponent},
  { path: 'proyectos', component: ProyectosContainerComponent},
];

@NgModule({

  imports: [
    RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})
  ],
  exports: [RouterModule]

})
export class AppRoutingModule { }
