import { Component} from '@angular/core'
import { Contact  } from '../models/pokemon.model';

import { SelectedContactService } from '../services/pokemon-contact.service';

@Component({
    selector: 'app-contac-selected',
    templateUrl:'./pokemon-selected.component.html',
    styleUrls : ['./pokemon-selected.component.css']
})
export class ContactSelectedCompnent{
  constructor(private readonly selectedContactService: SelectedContactService) {
  }
    get contact(): Contact|null{
        return this.selectedContactService.contact()
  }
  public getdata() {
  return  JSON.parse(localStorage.getItem('pokemon'));
  }
    public Name() {
   return localStorage.getItem('username');
  }
}


