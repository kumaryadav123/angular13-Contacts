import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyContact } from '../Model/Mycontact';
import { MyGroup } from '../Model/MyGroup';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-addcontact',
  templateUrl: './addcontact.component.html',
  styleUrls: ['./addcontact.component.css']
})
export class AddcontactComponent implements OnInit {

  public loading:boolean=false;
  public contact:MyContact={}as MyContact;
  public errorMessage:string |null=null;
  public group:MyGroup[]=[] as MyGroup[];


  constructor(private contService:ContactService,
    private router:Router) { }

  ngOnInit(): void {

    this.contService.getAllGroups().subscribe((data:MyGroup[])=>{
      this.group=data;

    },(error)=>{
      this.errorMessage=error;
    })
  }
public addSubmit(){
  this.contService.CreateContacts(this.contact).subscribe((data:MyContact)=>{
 this.router.navigate(['/']).then();
    
  },(error)=>{
    this.errorMessage=error;
    this.router.navigate(['/contacts/add']).then();
  })
}
}
