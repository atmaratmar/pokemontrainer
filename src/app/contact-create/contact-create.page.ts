import {Component} from '@angular/core'
import { NgForm } from '@angular/forms'

@Component({
  selector : 'contact-create.page',
  templateUrl: './contact-create.page.html',
  styleUrls:['./contact-create.page.css']


})
export class ContactCreatePage{
  onSubmit(createForm: NgForm): void {
    //store user after submation
  localStorage.setItem('username',createForm.value.name)

}

}
