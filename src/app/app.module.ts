import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { NewsComponent } from './news/news.component';
import { ContactComponent } from './contact/contact.component';
import { MediaComponent } from './media/media.component';
import { InformationComponent } from './information/information.component';
import { RulesComponent } from './rules/rules.component';
import { HttpClientModule } from '@angular/common/http';

import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import {
  GoogleLoginProvider
} from 'angularx-social-login';
import { CommonModule } from '@angular/common';
import { BaseModule } from './core/modules/base/base.module';
import { ProfileConfigComponent } from './profile-config/profile-config.component';
import { FormsModule } from '@angular/forms';
import { InscriptionComponent } from './inscription/inscription.component';
import { OkModalComponent } from './shared/ok-modal/ok-modal.component';
import { TeamDataComponent } from './inscription/team-data/team-data.component';
import { PlayerDataComponent } from './inscription/player-data/player-data.component';
import { ResumeDataComponent } from './inscription/resume-data/resume-data.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    FooterComponent,
    WelcomeComponent,
    PageNotFoundComponent,
    NewsComponent,
    ContactComponent,
    MediaComponent,
    InformationComponent,
    RulesComponent,
    ProfileConfigComponent,
    InscriptionComponent,
    OkModalComponent,
    TeamDataComponent,
    PlayerDataComponent,
    ResumeDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocialLoginModule,
    CommonModule,
    HttpClientModule,
    BaseModule,
    FormsModule
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
              '450842705465-9gf1q4fafo27b77r6odp78rk0h1v5rsp.apps.googleusercontent.com'
            )
          }
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [
    AppComponent,
    HttpClientModule]
})
export class AppModule { }
