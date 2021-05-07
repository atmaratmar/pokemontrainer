import {Component, OnInit} from '@angular/core'
import { Pokemon } from '../models/pokemon.model';
import { PokemonsService } from '../services/pokemon.service';
import { SelectedPokemonService } from '../services/pokemon-contact.service';

@Component({
    selector:'app-contact-list',
    templateUrl:'./pokemon-list-componenet.html',
    styleUrls:['./pokemon-list-componenet.css']
})
export class PokemonListComponent implements OnInit{
    private _pokemons : Pokemon [] = []
    private _error : string='';
    constructor(private readonly contactService: PokemonsService,
        private readonly selectedContactService: SelectedPokemonService
        ) {

    }
     ngOnInit(): void{
    this.contactService.getPokemons()
      .subscribe((response: any) => {
        response.results.forEach((result: { name: string; }) => {
          this.contactService.getMoreData(result.name)
            .subscribe((response: any) => {
              this._pokemons.push(response);
              console.log(this._pokemons)
            });
        });
      });
  }


    get contacts(): Pokemon[]{
        return this._pokemons
    }
    handleContactClick(pokemon : Pokemon):void{
      this.selectedContactService.setContact(pokemon)
    }

}
