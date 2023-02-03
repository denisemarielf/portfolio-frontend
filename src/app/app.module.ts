import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';
import { ExperiencesContainerComponent } from './components/experience-components/experiences-container/experiences-container.component';
import { ExperienceComponent } from './components/experience-components/experiences-container/experience/experience.component';
import { EducationContainerComponent } from './components/education-components/education-container/education-container.component';
import { EducationComponent } from './components/education-components/education/education.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { SkillsContainerComponent } from './components/skill-components/skills-container/skills-container.component';
import { SkillComponent } from './components/skill-components/skill/skill.component';
import { ProyectoComponent } from './components/proyecto-components/proyecto/proyecto.component';
import { ProyectosContainerComponent } from './components/proyecto-components/proyectos-container/proyectos-container.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { LogButtonComponent } from './components/log-button/log-button.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './components/modal/modal.component';
import { ExperienciaFormularioComponent } from './components/experience-components/experiences-container/experiencia-formulario/experiencia-formulario.component';
import { EducationFormComponent } from './components/education-components/education-form/education-form.component';
import { ProyectoFormularioComponent } from './components/proyecto-components/proyecto-formulario/proyecto-formulario.component';
import { SobreMiFormularioComponent } from './components/sobre-mi/sobre-mi-formulario/sobre-mi-formulario.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SobreMiComponent,
    ExperiencesContainerComponent,
    ExperienceComponent,
    EducationContainerComponent,
    EducationComponent,
    SkillsContainerComponent,
    SkillComponent,
    ProyectoComponent,
    ProyectosContainerComponent,
    LoginComponent,
    HomeComponent,
    LogButtonComponent,
    ModalComponent,
    ExperienciaFormularioComponent,
    EducationFormComponent,
    ProyectoFormularioComponent,
    SobreMiFormularioComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgCircleProgressModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    NgbModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
