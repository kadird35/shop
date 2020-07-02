import { Component, OnInit } from '@angular/core';
import { Category } from './category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor() { }
  cat_title = "Kategori Listesi"

  categories : Category[]= [
    {cat_id:1, cat_name:"Bilgisayar"},
    {cat_id:2, cat_name:"Ekran"},
    {cat_id:3, cat_name:"Klavye"},
    {cat_id:4, cat_name:"Mouse"},
    {cat_id:5, cat_name:"Yazıcı"}

  ]

  ngOnInit(): void {
  }

}
