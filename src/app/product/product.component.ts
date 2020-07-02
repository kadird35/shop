import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { UyarilarService } from '../services/uyarilar.service';
import { ProductService } from '../services/product.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers:[ProductService]

})
export class ProductComponent implements OnInit {
  constructor(
    private alertifyService: UyarilarService,
    private productService:ProductService) {}
  title = 'Ürün Listesi';
  filterText = '';
  products: Product[];



  ngOnInit() {
    this.productService.getProducts().subscribe(data=>{
      this.products = data
    })
   
  }
  addToCart(product) {
    this.alertifyService.success(product.name + ' Eklendi.');

    // alertify.success(product.name + " Sepete Eklendi") // npm komutuyla eklediğimiz alertifyjs paketinden bir kullanım
    // bu komutun çalışması için yukarıda import satırlarının altında bir yere
    // declare let alertify:any; tanımını yazıyoruz.
    // alert(product.name + " Sepete Eklendi") //test amaçlı yazıldı
  }
}
