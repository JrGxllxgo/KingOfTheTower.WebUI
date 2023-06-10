import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MediaComponent } from './media/media.component';
import { InformationComponent } from './information/information.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';
import { CommonModule } from '@angular/common';
import { BaseModule } from './core/modules/base/base.module';
import { FormsModule } from '@angular/forms';

import { ProfileConfigComponent } from './profile-config/profile-config.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { OkModalComponent } from './shared/ok-modal/ok-modal.component';
import { TeamDataComponent } from './inscription/team-data/team-data.component';
import { PlayerDataComponent } from './inscription/player-data/player-data.component';
import { ResumeDataComponent } from './inscription/resume-data/resume-data.component';
import { AdminDashboardComponent } from './dashboards/admin-dashboard/admin-dashboard.component';
import { NewGameComponent } from './shared/new-game/new-game.component';
import { NewGroupComponent } from './shared/new-group/new-group.component';
import { ListModalComponent } from './dashboards/list-modal/list-modal.component';
import { ToastrModule } from 'ngx-toastr';
import { NotifierComponent } from './notifier/notifier.component'
import { CommonConstants } from './core/constants/common';
import { CompetitionComponent } from './competition/competition.component';
import { NewStaffModalComponent } from './shared/new-staff-modal/new-staff-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    FooterComponent,
    WelcomeComponent,
    PageNotFoundComponent,
    MediaComponent,
    InformationComponent,
    ProfileConfigComponent,
    InscriptionComponent,
    OkModalComponent,
    TeamDataComponent,
    PlayerDataComponent,
    ResumeDataComponent,
    AdminDashboardComponent,
    NewGameComponent,
    NewGroupComponent,
    ListModalComponent,
    CompetitionComponent,
    NewStaffModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocialLoginModule,
    CommonModule,
    HttpClientModule,
    BaseModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass:'toast-top-left',
      preventDuplicates: true,
      timeOut: 5000
    })
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              CommonConstants.GOOGLE_LOG_API
            )
          }
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    },
    Location
  ],
  bootstrap: [
    AppComponent,
    HttpClientModule]
})
export class AppModule { }
