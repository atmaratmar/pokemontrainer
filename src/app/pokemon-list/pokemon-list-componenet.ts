import {Component, OnInit} from '@angular/core'
import { Contact } from '../models/pokemon.model';
import { ContactsService } from '../services/pokemon.service';
import { SelectedContactService } from '../services/pokemon-contact.service';

@Component({
    selector:'app-contact-list',
    templateUrl:'./pokemon-list-componenet.html',
    styleUrls:['./pokemon-list-componenet.css']
})
export class ContactListComponent implements OnInit{
    private _contacts : Contact [] = []
    private _error : string='';
    constructor(private readonly contactService: ContactsService,
        private readonly selectedContactService: SelectedContactService
        ) {

    }
     ngOnInit(): void{
    this.contactService.getPokemons()
      .subscribe((response: any) => {
        response.results.forEach((result: { name: string; }) => {
          this.contactService.getMoreData(result.name)
            .subscribe((response: any) => {
              this._contacts.push(response);
              console.log(this._contacts)
            });
        });
      });
  }


    get contacts(): Contact[]{
        return this._contacts
    }
    handleContactClick(contact : Contact):void{
      this.selectedContactService.setContact(contact)
    }

}
