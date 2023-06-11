import { NgModule } from '@angular/core';
import { WelcomeComponent } from './welcome/welcome.component';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { MediaComponent } from './media/media.component';
import { InformationComponent } from './information/information.component';
import { ProfileConfigComponent } from './profile-config/profile-config.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { AdminDashboardComponent } from './dashboards/admin-dashboard/admin-dashboard.component';
import { CompetitionComponent } from './competition/competition.component';
import { StaffDashboardsComponent } from './dashboards/staff-dashboards/staff-dashboards.component';

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
    path: 'media',
    component: MediaComponent
  },
  {
    path: 'information',
    component: InformationComponent
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
    path: 'dashboard',
    component: AdminDashboardComponent
  },
  {
    path: 'staff',
    component: StaffDashboardsComponent
  },
  {
    path: 'competition',
    component: CompetitionComponent
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
