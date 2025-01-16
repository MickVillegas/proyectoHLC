import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private _nameUser: string = "Nombre";
  public $nameUser = new BehaviorSubject(this.nameUser);
  nameUser$ = this.$nameUser.asObservable() as Observable<string>;

  //public emailUser: string = "Email";
  private _emailUser: string = "Email";
  public $emailUser = new BehaviorSubject(this.emailUser);
  emailUser$ = this.$emailUser.asObservable() as Observable<string>;

get nameUser(){
  return this._nameUser;
}

set nameUser(name: string){
  this._nameUser = name;
  this.$nameUser.next(name);
}

get emailUser(){
  return this._emailUser
}

set emailUser(email: string){
  this._emailUser = email;
  this.$emailUser.next(email);
}

  constructor() { }
}
