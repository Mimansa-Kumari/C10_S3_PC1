import { Component, Input } from '@angular/core';
import { Contact } from '../models/contact';
import { CONTACTS } from '../models/contacts';

@Component({
  selector: 'app-contact-container',
  templateUrl: './contact-container.component.html',
  styleUrls: ['./contact-container.component.css']
})
export class ContactContainerComponent {
    contact: Contact[] = CONTACTS;
    constructor() { }

  ngOnInit(): void {
    console.log(this.contact);
  }
  value:Contact={};
  flag:boolean=true;
  addData(event:any)
    {
      if(event)
      {
        this.value=event;
        this.flag=true;
      }
      else
      {
        this.flag=false;
      }
    }
}
