import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Receita } from 'src/app/models/receita';

@Injectable({
  providedIn: 'root'
})
export class ReceitaService {

  private edit = new BehaviorSubject<Receita>(null);
  botaoEdit = this.edit.asObservable();

  constructor() { }

  getReceitaFromScreen(receita: Receita){
    this.edit.next(receita);
  }
}
