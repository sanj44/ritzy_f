import { Component } from '@angular/core';
import { ProductListService } from '../_services/product-list-service/index';
import { addNewProduct } from './addnewproduct'; 

@Component({
    moduleId: module.id.toString(),
    templateUrl: 'product-add.component.html',
	providers: [ProductListService]
})

export class ProductAddComponent{
	  url1:any;
	  url2:any;
	  url3:any;
	  url4:any;
	  url5:any;
	  url6:any;
   constructor(private _product: ProductListService){ 
   } 
   public addnewproduct= new addNewProduct();
    public files= new addNewProduct();

   onChange1(event:any) {
	   if (event.target.files && event.target.files[0]) {
		var reader = new FileReader();

		reader.onload = (event:any) => {
		  this.url1 = event.target.result;
		}
		reader.readAsDataURL(event.target.files[0]);
	}
    this.files['image1'] = event.srcElement.files;
  }
  onChange2(event:any) {	  
	  if (event.target.files && event.target.files[0]) {
		var reader = new FileReader();

		reader.onload = (event:any) => {
		  this.url2 = event.target.result;
		}
		reader.readAsDataURL(event.target.files[0]);
	}
    this.files['image2'] = event.srcElement.files;
  }
  onChange3(event:any) {
	  if (event.target.files && event.target.files[0]) {
		var reader = new FileReader();

		reader.onload = (event:any) => {
		  this.url3 = event.target.result;
		}
		reader.readAsDataURL(event.target.files[0]);
	}
    this.files['image3'] = event.srcElement.files;
  }
  onChange4(event:any) {
	  if (event.target.files && event.target.files[0]) {
		var reader = new FileReader();

		reader.onload = (event:any) => {
		  this.url4 = event.target.result;
		}
		reader.readAsDataURL(event.target.files[0]);
	}
    this.files['image4'] = event.srcElement.files;
  }
  onChange5(event:any) {
	  if (event.target.files && event.target.files[0]) {
		var reader = new FileReader();

		reader.onload = (event:any) => {
		  this.url5 = event.target.result;
		}
		reader.readAsDataURL(event.target.files[0]);
	}
    this.files['image5'] = event.srcElement.files;
  }
  onChange6	(event:any) {
	  if (event.target.files && event.target.files[0]) {
		var reader = new FileReader();

		reader.onload = (event:any) => {
		  this.url6 = event.target.result;
		}
		reader.readAsDataURL(event.target.files[0]);
	}
    this.files['image6'] = event.srcElement.files;
 
  }
    submitProduct(){ 
	console.log(this.addnewproduct);
	console.log(this.files);
	alert("This is without validation please check console for resullt about product addition.");
       this._product.addProduct(this.addnewproduct, this.files)
	  .subscribe(addnewproduct => this.addnewproduct = addnewproduct); 
   }
} 