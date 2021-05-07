import {Injectable}from '@angular/core'
import { Contact } from '../models/pokemon.model';

@Injectable({
    providedIn : 'root'
})
export class SelectedContactService{
    public _storage : string []=[]
    private _contacts : Contact [] = []
    private _contact  : Contact |null =null;
    public setContact(contact : Contact){
       this._contact = contact;
      this._contacts.push(this._contact)

     localStorage.setItem('pokemon', JSON.stringify(this._contacts));

      // localStorage.setItem("pokemon", JSON.stringify(this._contacts))

    }

    public contact():Contact | null{
        return this._contact;
  }

}
