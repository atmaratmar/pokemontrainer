import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { ContactListComponent } from './pokemon-list/pokemon-list-componenet';
import { ContactSelectedCompnent } from './pokemon-selected/pokemon-selected.component';
import { ContactListItemComponent } from './pokemon-list-item/pokemon-list-item.component';
import { ContactPage } from './contacts/contacts.page';
import { AppRoutnigMudule } from './app-routing.module';
import { ContactCreatePage } from './contact-create/contact-create.page';


@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactSelectedCompnent,
    ContactListItemComponent,
    ContactPage,
    ContactCreatePage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutnigMudule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
