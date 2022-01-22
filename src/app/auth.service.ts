import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  status: string = "login";
  constructor() { }

  get checkStatus() : string{
    return this.status;
  }

  set setStatus(val: string) {
    this.status = val;
  }

}
