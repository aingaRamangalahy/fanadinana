import { Injectable } from '@angular/core';
import { Mpiadina } from '../interfaces';
import { MainService } from './main.service';

@Injectable({
  providedIn: 'root'
})
export class MpiadinaService {
  apiUrl = "/api/v1/mpiadina";

  constructor(private mainService: MainService) { }

  getAll() {
    return this.mainService._GET(`${this.apiUrl}`);
  }

  getAllWithNote() {
    return this.mainService._GET(`${this.apiUrl}/note`)
  }

  getById(id: number) {
    return this.mainService._GET(`${this.apiUrl}`, id)
  }

  create(mpiadina: Mpiadina){
    return this.mainService._POST(`${this.apiUrl}`, mpiadina);
  }

  update(id: number, mpiadina: Mpiadina) {
    return this.mainService._PUT(`${this.apiUrl}`, id, mpiadina);
  }

  delete(id: number) {
    return this.mainService._DELETE(`${this.apiUrl}`, id);
  }
}
