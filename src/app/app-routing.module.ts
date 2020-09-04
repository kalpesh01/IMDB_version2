import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';

import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { EducationComponent } from './education/education.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { RatingBasicComponent } from './rating-basic/rating-basic.component';
import { NodejsComponent } from './nodejs/nodejs.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'rating', component: RatingBasicComponent },
  { path: 'register', component: RegisterComponent },
  // { path: 'Nodejs', component: NodejsComponent },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: '', component: PersonalInfoComponent },
      { path: 'education', component: EducationComponent },
      { path: 'contact-us', component: ContactUsComponent },
      { path: 'Nodejs', component: NodejsComponent },
    ],
  },

  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
