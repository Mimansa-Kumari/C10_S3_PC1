import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Contact } from '../models/contact';
import { CONTACTS } from '../models/contacts';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.css']
})
export class ContactCardComponent {
  
  @Input()
  item:Contact={};

  @Output()
  content: EventEmitter<any> = new EventEmitter<any>();
  addDataEvent()
  {
    this.content.emit(this.item);
  }
  notAddDataEvent()
  {
    this.content.emit(null);
  }
}
