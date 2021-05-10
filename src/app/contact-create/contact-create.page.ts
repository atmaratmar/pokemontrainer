import {Component, OnInit} from '@angular/core'
import { NgForm } from '@angular/forms'
import {Router} from '@angular/router'

@Component({
  selector : 'contact-create.page',
  templateUrl: './contact-create.page.html',
  styleUrls:['./contact-create.page.css']
})
export class ContactCreatePage  implements OnInit{
  constructor(private readonly router: Router ) {
  }
  onSubmit(createForm: NgForm): void {
    //store user after submation
     console.log("first")
    localStorage.setItem('username', createForm.value.name)
    
       console.log("second")
     this.router.navigate(['pokemon']);
    if (localStorage.getItem('username') !== null || "") {
        console.log('third')
         this.router.navigate(['pokemon']);
       }
    this.router.navigate(['pokemon']);
     console.log(createForm.value.name)
    //added
  }

ngOnInit(): void {
  if (localStorage.getItem('username') !== null||"") {
         this.router.navigate(['pokemon']);
  }
  else {
    this.router.navigate(['pokemon']);
  }
  }
}
