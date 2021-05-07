import{Component, EventEmitter, Input, Output} from '@angular/core'
import { Contact } from '../models/pokemon.model'

@Component({
    selector : 'app-contact-list-item',
    templateUrl:'./pokemon-list-item.component.html',
    styleUrls:['./pokemon-list-item.component.css']
})
 export class ContactListItemComponent{
      @Input() contact : Contact | undefined;
      @Output() clicked : EventEmitter<Contact> = new EventEmitter();
      public oncontactClicked(): void {
      this.clicked.emit(this.contact);

      }
 }
