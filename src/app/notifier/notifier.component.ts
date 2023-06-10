import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr'
import { NotifierService } from '../services/notifier.service';

@Component({
  selector: 'app-notifier',
  templateUrl: './notifier.component.html',
  styleUrls: ['./notifier.component.css']
})
export class NotifierComponent {
  
  constructor( private _toastr:NotifierService ){ }
}
