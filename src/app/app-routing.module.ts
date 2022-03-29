import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MoreComponent } from './more/more.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path: "", redirectTo: 'login', pathMatch: 'full'
  },

  {
    path: "login", component: LoginComponent
  },

  {
    path: "signup", component: SignupComponent
  },
  {
    path: "about", component: AboutComponent
  },
  {
    path: "more", component: MoreComponent
  },
  {
    path: "contact", component: ContactComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
