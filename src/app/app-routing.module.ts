import { NgModule}from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ContactCreatePage } from './contact-create/contact-create.page'
import { PokemonSelectedCompnent } from './pokemon-selected/pokemon-selected.component'
import { ContactPage } from './pkoemons/pokemons.page'




const routes : Routes = [
  {
    path :'',
    pathMatch:'full',
    redirectTo : '/create'

  }
  ,
 {
 path: 'create',
   component:ContactCreatePage
},{
  path :'create/contacts',
  component : ContactPage
  }
 ,{
  path :'create/selected',
  component : PokemonSelectedCompnent
}
]
@NgModule({
  imports :[RouterModule.forRoot(routes) ],
  exports :[RouterModule]

})
export class AppRoutnigMudule{

}
