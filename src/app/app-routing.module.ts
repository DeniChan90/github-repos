import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { RedirectComponent } from './components/redirect/redirect.component';
import { RepositoriesComponent } from './components/repositories/repositories.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'redirect', component: RedirectComponent },
  { path: 'repositories', component: RepositoriesComponent },
  { path: '**', redirectTo: 'repositories' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
