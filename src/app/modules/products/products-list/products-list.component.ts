import { Component, OnInit,ChangeDetectorRef,ChangeDetectionStrategy   } from '@angular/core';
import { ProductService } from '../../../services/products.service';
import { Product } from 'src/app/models/product.model'; 
import { DataViewModule } from 'primeng/dataview';
@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  //styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  
  products: Product[]=[];
  basket:Product[]=[];
  specipyProduct!:Product;
  sumBasket:number=0;

  constructor(private _productService: ProductService, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this._productService.getAllProducts().subscribe(
      (data: Product[]) => {
        this.products = data;
        
      },
      (error) => {
        console.error('Error fetching products', error);
      }
    );
  }
  getSeverity(item: any): string {
    if (item.price > 50) {
      return 'high';
    } else if (item.price > 20) {
      return 'medium';
    } else {
      return 'low';
    }
  }
 
  AddToBasket(prodToAdd: Product) {
    console.log("prodtoadd: ", prodToAdd);
    if (prodToAdd) {
      this.basket = [...this.basket, prodToAdd]; // יצירת מערך חדש עם המוצר החדש
      this.cdr.detectChanges(); // מניעת זיהוי שינויים
    }
    console.log("the basket: ",this.basket);
    
  }

  getProductById(id: number): void {
   this._productService.getProductById(id).subscribe(data=>{
    if(data)
    this.specipyProduct=data
  }
  )
  }
     trackByProductId(index: number, item: Product): number {
      return item.id;
    } 
   
      
       
      
      
   
  }
