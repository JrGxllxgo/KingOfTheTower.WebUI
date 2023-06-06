import { NgModule } from '@angular/core';
import { WelcomeComponent } from './welcome/welcome.component';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { NewsComponent } from './news/news.component';
import { MediaComponent } from './media/media.component';
import { InformationComponent } from './information/information.component';
import { ContactComponent } from './contact/contact.component';
import { RulesComponent } from './rules/rules.component';
import { ProfileConfigComponent } from './profile-config/profile-config.component';
import { InscriptionComponent } from './inscription/inscription.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {
    path:'welcome',
    component: WelcomeComponent
  },
  {
    path: 'news',
    component: NewsComponent
  },
  {
    path: 'media',
    component: MediaComponent
  },
  {
    path: 'information',
    component: InformationComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'rules',
    component: RulesComponent
  },
  {
    path: 'configprofile',
    component: ProfileConfigComponent
  },
  {
    path: 'inscription',
    component: InscriptionComponent
  },
  {
    path:'**',
    component: PageNotFoundComponent
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
