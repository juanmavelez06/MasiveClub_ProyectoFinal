import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { MessengerService } from 'src/app/services/messenger.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit
{

  cartItem: any = [
     //{id:1, ProductId:1, NombreProducto:'Guitarra', Cantidad:1, precio:1500},
     //{id:2, ProductId:2, NombreProducto:'Piano', Cantidad:2, precio:1200},
     //{id:3, ProductId:3, NombreProducto:'Ukelele', Cantidad:3, precio:500},
     //{id:4, ProductId:4, NombreProducto:'Megafono', Cantidad:4, precio:7000},
     //{id:5, ProductId:5, NombreProducto:'Bateria', Cantidad:5, precio:8000},
  ]

  cartTotal = 0

  constructor( private msg:MessengerService) { }

  ngOnInit(){} //El utlimo  de esta fila se borra

   /* this.msg.getMsg().subscribe(Product =>{
     this.AgregarProductos(Product)
    })
  }

    AgregarProductos(Product:any){
      this.cartItem.push({
        nombreProducto: Product.nombre,
        cantidad: Product.cantidad,
        precio: Product.precio
       })

       this.cartTotal = 0
       this.cartItem.forEach((item: { Cantidad: number; Precio: number; }) =>{
       this.cartTotal += (item.Cantidad * item.Precio)
     })
    }*/

}

