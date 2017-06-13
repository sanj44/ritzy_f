import { Component } from '@angular/core';
import { ProductListService } from '../_services/product-list-service/index';
import { IProduct } from '../_services/product-list-service/product'; 
@Component({
    moduleId: module.id.toString(),
    templateUrl: 'product-list.component.html',
	providers: [ProductListService] 
})

export class ProductListComponent {
	 iproducts: IProduct[]; 
	 productName: string; 
   constructor(private _product: ProductListService){ 
   } 
   ngOnInit() : void { 
      this._product.getproducts() 
      .subscribe(iproducts => this.iproducts = iproducts); 
   }
} 