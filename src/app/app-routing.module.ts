import { NgModule}from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ContactCreatePage } from './contact-create/contact-create.page'
import { PokemonSelectedCompnent } from './pokemon-selected/pokemon-selected.component'
import { ContactPage } from './pkoemons/pokemons.page'
import { ProfileComponent } from './profile/profile.component'




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
  path :'contacts',
  component : ContactPage
  }
 ,{
  path :'selected',
  component : PokemonSelectedCompnent
  }
 ,{
  path :'profile',
  component : ProfileComponent
}
]
@NgModule({
  imports :[RouterModule.forRoot(routes) ],
  exports :[RouterModule]

})
export class AppRoutnigMudule{

}
