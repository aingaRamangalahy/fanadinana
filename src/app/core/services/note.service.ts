import { Injectable } from '@angular/core';
import { Note } from '../interfaces/index.interface';
import { MainService } from './main.service';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  apiUrl = "/api/v1/notes"
  constructor(private mainService: MainService) { }

  create(note: Note) {
    return this.mainService._POST(`${this.apiUrl}`, note)
  }

  update(id: number, note: Note) {
    return this.mainService._PUT(`${this.apiUrl}`, id, note);
  }
}
