import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { Signup1Component } from './Components/signup1/signup1.component';
import { Signup2Component } from './Components/signup2/signup2.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup-step1', component: Signup1Component },
  { path: 'signup-step2', component: Signup2Component },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
