import { Component, Input } from '@angular/core';
import { Contact } from '../models/contact';
@Component({
  selector: 'app-contact-card-details',
  templateUrl: './contact-card-details.component.html',
  styleUrls: ['./contact-card-details.component.css']
})
export class ContactCardDetailsComponent {
  @Input()
  information:Contact={};
}
