import { Component, Input } from '@angular/core';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

type Nullable<T> = T | null;

@Component({
  selector: 'app-ok-modal',
  templateUrl: './ok-modal.component.html',
  styleUrls: ['./ok-modal.component.css']
})
export class OkModalComponent {
  @Input()
  title: string = '';
  @Input()
  body: string = ''
  @Input()
  modalReference: Nullable<NgbModalRef> = null;

  constructor () {}

  public dismissModal() {
    this.modalReference!.close();
  }
}
