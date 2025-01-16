import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IonGrid, IonRow, IonCol, IonItemSliding, IonItemOptions, IonItemOption, IonToast, IonContent, IonHeader, IonTitle, IonToolbar, IonMenuButton, IonButtons, IonList, IonItem, IonAvatar, IonLabel } from '@ionic/angular/standalone';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.page.html',
  styleUrls: ['./chats.page.scss'],
  standalone: true,
  imports: [IonGrid, IonRow, IonCol, IonItemSliding, IonItemOptions, IonItemOption, IonToast, IonAvatar, IonItem, IonList, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonMenuButton, IonButtons, IonLabel]
})
export class ChatsPage implements OnInit {

  public titulo:string= "Chats";
  public backendData:any[] = [
    {id:'1', name: "Godzilla Showa", image: "./img/images.jpeg"},
    {id:'2', name: "Godzilla Heisei", image: "./img/heisei-godzilla-has-the-best-face-v0-853tlp1fe4o81.jpg"},
    {id:'3', name: "Godzilla Milenium", image: "./img/bruh-i-cant-with-millennium-godzillas-face-v0-ylim5qu9kasb1.jpg"},
    {id:'4', name: "Godzilla Legendary", image: "./img/dgqaxzq-41c6d426-406c-4647-9855-3852765f8fc7.jpg"},
    {id:'5', name: "Godzilla Reiwa", image: "./img/godzilla-minus-1-1280x720.jpeg"}
]

public isToastOPen: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  removeChar(id: string){
    const index = this.backendData.findIndex((chat) => {chat.id === id})
    this.backendData.splice(index, 1);
    this.isToastOPen = true
  }

hideToas(){
  this.isToastOPen = false;
}

}
