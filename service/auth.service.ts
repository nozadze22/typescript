import { Injectable } from '@angular/core';
import { USerRegister, User } from '../interfaces';
import { HttpClient } from '@angular/common/http';
import { AIP_CONFIG } from '../const';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }


  signIn() {
    
  }


  signUp(User: USerRegister) {
  return this.httpClient.post<User>(`${AIP_CONFIG.baseURL}/auth/sign_up`, User);
  }

 
}
