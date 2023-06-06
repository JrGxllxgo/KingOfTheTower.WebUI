import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { CommonConstants } from './core/constants/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'KingOfTheTower.WebUI';
  constructor(
    public router:Router,
    public _translateService: TranslateService) {
      this._translateService.addLangs(['es', 'en']);
      this._translateService.setDefaultLang(CommonConstants.DEFAULT_LANGUAGE);
    }
}
