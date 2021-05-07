import{Component, EventEmitter, Input, Output} from '@angular/core'
import { Pokemon } from '../models/pokemon.model'

@Component({
    selector : 'app-contact-list-item',
    templateUrl:'./pokemon-list-item.component.html',
    styleUrls:['./pokemon-list-item.component.css']
})
 export class PokemonListItemComponent{
      @Input() contact : Pokemon | undefined;
      @Output() clicked : EventEmitter<Pokemon> = new EventEmitter();
      public oncontactClicked(): void {
      this.clicked.emit(this.contact);

      }
 }
