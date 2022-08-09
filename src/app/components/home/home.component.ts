import { Component, OnInit } from '@angular/core';
import { Carousel } from 'src/app/models/Carousel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  Carousel: Carousel[] = [
    {id:1,descripcion: "Productos con la mejor calidad del mercado", img:"https://i.picsum.photos/id/679/1980/500.jpg?hmac=rXDKR9y5k93duMt3Q5YcZPjyZKDigBrCzWnOBmp5Rtc" },
    {id:2, descripcion:"Compra ya, Precio super economicos", img:"" },
    {id:3, descripcion: "Es tu hora de mostrar tu talento", img:"" },
  ]


}
