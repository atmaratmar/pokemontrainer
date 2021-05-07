import {Injectable}from '@angular/core'
import { Pokemon } from '../models/pokemon.model';

@Injectable({
    providedIn : 'root'
})
export class SelectedPokemonService{
    public _storage : string []=[]
    private _contacts : Pokemon [] = []
    private _contact  : Pokemon |null =null;
    public setContact(contact : Pokemon){
       this._contact = contact;
      this._contacts.push(this._contact)

     localStorage.setItem('pokemon', JSON.stringify(this._contacts));

      // localStorage.setItem("pokemon", JSON.stringify(this._contacts))

    }

    public contact():Pokemon | null{
        return this._contact;
  }
}
