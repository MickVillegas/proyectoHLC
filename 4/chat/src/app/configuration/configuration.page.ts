import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IonToast, IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonInput, IonButton } from '@ionic/angular/standalone';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.page.html',
  styleUrls: ['./configuration.page.scss'],
  standalone: true,
  imports: [IonToast, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonList, IonItem, IonInput]
})
export class ConfigurationPage implements OnInit {

public nameUser: string;
public emailUser: string;
private storageService = inject(StorageService);
public isToastOpen: boolean = false;

  constructor() { 
    this.nameUser = this.storageService.nameUser;
    this.emailUser = this.storageService.emailUser;
  }

  ngOnInit() {
  }

saveData(){
  this.storageService.nameUser = this.nameUser
  this.storageService.emailUser = this.emailUser
  this.isToastOpen = true;
}

hideToast(){
  this.isToastOpen = false;
}

}
