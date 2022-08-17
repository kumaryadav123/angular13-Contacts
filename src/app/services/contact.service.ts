import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { MyContact} from '../Model/Mycontact';
import { MyGroup } from '../Model/MyGroup';
@Injectable({
  providedIn: 'root'
})
export class ContactService {
  contacts() {
    throw new Error('Method not implemented.');
  }

private baseUrl:string=`http://localhost:3000`;
  

  constructor(private http:HttpClient) { }

// Get all The Conatcs Data
  public getAllContacts():Observable<MyContact[]>{
    let dataurl:string=`${this.baseUrl}/contacts`;
    return this.http.get<MyContact[]>(dataurl).pipe(catchError(this.handleError))
  } 
// get Single Contacts 
public getContacts(contactId:string):Observable<MyContact>{
  let dataurl:string=`${this.baseUrl}/contacts/${contactId}`;
  return this.http.get<MyContact>(dataurl).pipe(catchError(this.handleError));
}

// Create Contacts
public CreateContacts(contact:MyContact):Observable<MyContact>{
  let dataurl:string=`${this.baseUrl}/contacts`;
  return this.http.post<MyContact>(dataurl,contact).pipe(catchError(this.handleError))
}

// update contacts
public updateContacts(contact:MyContact,contactId:string):Observable<MyContact>{
  let dataurl:string=`${this.baseUrl}/contacts/${contactId}`;
  return this.http.put<MyContact>(dataurl,contact).pipe(catchError(this.handleError))
}


// delete contact
public deleteContacts(contactId:string):Observable<MyContact>{
  let dataurl:string=`${this.baseUrl}/contacts/${contactId}`;
  return this.http.delete<MyContact>(dataurl).pipe(catchError(this.handleError))
}

// get all groups 
public getAllGroups():Observable<MyGroup[]>{
  let dataurl:string=`${this.baseUrl}/groups`;
  return this.http.get<MyGroup[]>(dataurl).pipe(catchError(this.handleError))
}


// Get  Single Groups
public getGroups(contact:MyContact):Observable<MyGroup>{
  let dataurl:string=`${this.baseUrl}/groups/${contact.groupId}`;
  return this.http.get<MyGroup>(dataurl).pipe(catchError(this.handleError));
}

 


  //Error solve 
  public handleError(error:HttpErrorResponse){

    let errorMessage:string="";

    if(error.error instanceof ErrorEvent){

      //Client Error
      errorMessage =`Error:${error.error.message}`
    }else{
      //server Side Error
      errorMessage=`Status:${error.status} \n Message:${error.message}`;
    }
    return throwError(errorMessage)

  }

}
