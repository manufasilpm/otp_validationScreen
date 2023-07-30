import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
   isAuthenticated():boolean {

    if(localStorage.getItem('usermail')!=null){
      return true;
    }else return false
   
  }

  constructor() { }
}
