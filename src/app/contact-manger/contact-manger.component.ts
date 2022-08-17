import { Component, OnInit } from '@angular/core';
import { MyContact } from '../Model/Mycontact';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contact-manger',
  templateUrl: './contact-manger.component.html',
  styleUrls: ['./contact-manger.component.css']
})
export class ContactMangerComponent implements OnInit {
  public loading:boolean=false;
  public contacts:MyContact[] = [];
  public errorMessage:string | null=null;

  constructor(public cantService:ContactService) { }

  
  ngOnInit(): void {

 this.getAllContactData();
     

    // this.loading=true;
    // this.cantService.getAllContacts().subscribe((res)=>{
    //   this.loading=false;

    //     this.getContacts=res;
    //     console.log(res)

    // },(error)=>{
    //   this.errorMessage=error;
    //     this.loading=false;

    // })

    }
getAllContactData(){

  this.loading=true;
  this.cantService.getAllContacts().subscribe((data:MyContact[])=>{
  console.log(data)
  this.loading=false;
  this.contacts=data;  
  },(error)=>{
    this.errorMessage=error;
    this.loading=false;
  })




}
    deleteContact(contactId:string|undefined){
      if(contactId){
      this.cantService.deleteContacts(contactId).subscribe((data:{})=>{
         this.getAllContactData(); 
      },(error)=>{
        this.errorMessage=error;
        this.loading=false;
      })
    }
    
  }

}
















