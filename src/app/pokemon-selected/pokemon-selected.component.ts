import { Component} from '@angular/core'
import { Pokemon  } from '../models/pokemon.model';

import { SelectedPokemonService } from '../services/pokemon-contact.service';

@Component({
    selector: 'app-contac-selected',
    templateUrl:'./pokemon-selected.component.html',
    styleUrls : ['./pokemon-selected.component.css']
})
export class PokemonSelectedCompnent{
  constructor(private readonly selectedContactService: SelectedPokemonService) {
  }
    get contact(): Pokemon|null{
        return this.selectedContactService.contact()
  }
  public getdata() {
  return  JSON.parse(localStorage.getItem('pokemon'));
  }
    public Name() {
   return localStorage.getItem('username');
  }
}


