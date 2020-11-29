import { Injectable } from '@angular/core';
import { Note, User } from '../interfaces/index.interface';
import { MainService } from './main.service';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  apiUrl = "/api/v1/users"
  constructor(private mainService: MainService) { }

  create(user: User) {
    return this.mainService._POST(`${this.apiUrl}`, user)
  }

  findAll() {
    return this.mainService._GET(`${this.apiUrl}`);
  }
}
