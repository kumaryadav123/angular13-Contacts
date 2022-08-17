import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcontactComponent } from './addcontact/addcontact.component';
import { ContactMangerComponent } from './contact-manger/contact-manger.component';
import { EditcontactComponent } from './editcontact/editcontact.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ViewcontactComponent } from './viewcontact/viewcontact.component';

const routes: Routes = [

  {path:"",redirectTo:'contacts/admin',pathMatch:'full'},
  {path:'contacts/admin',component:ContactMangerComponent },
  {path:'contacts/add',component:AddcontactComponent},
  {path:'contacts/edit/:contactId',component:EditcontactComponent},
  {path:'contacts/view/:contactId',component:ViewcontactComponent},
  {path:'**',component:PagenotfoundComponent}
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
