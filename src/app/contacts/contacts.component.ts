//Importing all components
import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';
import { Contacts } from '../contacts';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  //Declaring contacts array for CRUD operations
  public contacts = [];
  constructor(private contactsList: ContactsService) { }

  ngOnInit() {

     this.getContacts();
  }

  getContacts():void{
    this.contactsList.getContacts()
    .subscribe(data => {
      this.contacts = data;
      console.log(this.contacts);
    });
  }
  
  AddContacts(name,phone): void {
    name = name.trim();
    if (!name) { return; }
    phone = phone.trim();
    if (!phone) { return; }

    this.contactsList.addContact({ name:name, phone:phone } as Contacts)
      .subscribe(contact => {
        this.contacts.push(contact);
      });
  }

  delete(contact: Contacts): void {
    this.contacts = this.contacts.filter(c => c !== contact);
    this.contactsList.deleteContact(contact).subscribe();
  }
}
