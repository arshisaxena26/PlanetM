import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMusicComponent } from './components/add-music/add-music.component';
import { DetailedMusicComponent } from './components/detailed-music/detailed-music.component';
import { EditMusicComponent } from './components/edit-music/edit-music.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

const routes: Routes = [{ path: 'welcome', component: WelcomeComponent },
{ path: 'music', component: MainComponent },
{ path: 'music/:id', component: DetailedMusicComponent },
{ path: 'add', component: AddMusicComponent },
{ path: 'edit/:id', component: EditMusicComponent },
{ path: 'login', component: LoginComponent },
{ path: '', redirectTo: 'welcome', pathMatch: 'full' },
{ path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
