import { Injectable } from '@angular/core';
import  { Auth } from 'aws-amplify';

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  constructor() { }

  logout(){
    Auth.signOut();
    Auth.currentAuthenticatedUser
  }
}
