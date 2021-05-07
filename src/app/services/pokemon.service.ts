import {Injectable} from '@angular/core'
import {HttpClient,HttpErrorResponse} from '@angular/common/http'
import {Contact} from '../models/pokemon.model'

@Injectable({
    providedIn: 'root'
})

export class ContactsService{

  private _contacts: Contact[] = []
    private _error : string='';


    constructor(private readonly http:HttpClient ){

    }
    getPokemons() {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=10`);
  }

  //get more data from pokemon
  getMoreData(name: string) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
  }

    public Contacts():Contact[]{
        return this._contacts;
    }
    public error(): string{
        return this._error
    };


}
