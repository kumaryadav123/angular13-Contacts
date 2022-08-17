import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
 import { MyContact } from '../Model/Mycontact';
import { MyGroup } from '../Model/MyGroup';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-editcontact',
  templateUrl: './editcontact.component.html',
  styleUrls: ['./editcontact.component.css']
})
export class EditcontactComponent implements OnInit {
  public loading:boolean=false;
  public Id:string | null=null;
  public contact:MyContact= {} as MyContact;
  public errorMessage:string|null =null;
  public grpoup:MyGroup[]= [] as MyGroup[];
  public contactId:any
 
  constructor(private activatedRoute:ActivatedRoute,
    private contService:ContactService,
    private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param)=>{
      this.contactId=param.get('contactIdawedrfgh')
          });
    if(this.contactId){
      this.contService.getContacts(this.contactId).subscribe((data:MyContact)=>{
        this.contact=data;
        this.loading=false;
                // console.log('contactdata',data)
         this.contService.getAllGroups().subscribe((data:MyGroup[])=>{
         this.grpoup= data;

         })       
       
      },(error)=>{
        this.errorMessage=error;
        this.loading= false;
      })

    }

  }

}
