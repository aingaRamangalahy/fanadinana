import { Injectable } from '@angular/core';
import { User } from '../interfaces/index.interface';
import { MainService } from './main.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = "/api/v1/auth"
  constructor(private mainService: MainService) { }

  login(user: User) {
    return this.mainService._POST(`${this.apiUrl}/login`, user);
  }

}
