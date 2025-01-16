import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardContent, IonCardSubtitle, IonCardTitle, IonMenuButton, IonButtons } from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCard, IonCardHeader, IonCardContent, IonCardSubtitle, IonCardTitle, IonMenuButton, IonButtons]
})
export class DetailsPage implements OnInit {
  public id!: string;
  private activatedRoute = inject(ActivatedRoute);  

  public contact:any;
  public backendData:any[] = [
    {id:'1', name: "Godzilla Showa", anios:"(1954 - 1975)", organization:"Toho"},
    {id:'2', name: "Godzilla Heisei", anios:"(1984 - 1995)", organization:"Toho"},
    {id:'3', name: "Godzilla Milenium", anios:"(1999 - 2004)", organization:"Toho"},
    {id:'4', name: "Godzilla Legendary", anios:"(2014 - 2024)", organization:"Legendary"},
    {id:'5', name: "Godzilla Reiwa", anios:"(2014 - 2024)", organization:"Toho"}
]

  constructor() { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.contact = this.backendData.find((c)=> c.id===this.id);
    console.log(this.id);
    console.log(this.contact)
  }

}
