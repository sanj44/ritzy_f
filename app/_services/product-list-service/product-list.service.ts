import { Injectable } from '@angular/core'; 
import { Http, Headers, RequestOptions, Response } from '@angular/http'; 
import { Observable } from 'rxjs/Observable'; 
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/do'; 
import { IProduct } from './product';  

@Injectable() 
export class ProductListService { 
   private _productListUrl='http://localhost:3000/product/productList'; 
   private _productAddUrl='http://localhost:3000/product/addNewProduct'; 
   iproducts: IProduct[];
   constructor(private _http: Http){} 
   getproducts(): Observable<IProduct[]> { 
      return this._http.post(this._productListUrl,"noOption:noValue") 
      .map((response: Response) => <IProduct[]> response.json()) 
      .do((data:any) => console.log(JSON.stringify(data))); 
   } 
   addProduct(body1: Object, files: Object): Observable<IProduct[]> {
        //let bodyString = JSON.stringify(body); 
        //let headers = new Headers(); //{ 'Content-Type': 'image' } 
       // let options = new RequestOptions({ headers: headers }); // Create a request option
		let body = new FormData();
		// body.append('categoryId', 'Creative Office Wear');
		// body.append('clothingType', 'Dresses');
		// body.append('colorAvailability', 'blue, black');
		// body.append('dateAvailabilityFrom', '12/12/2017');
		// body.append('dateAvailabilityTo', '12/12/2017');
		// body.append('kerywords', 'blue, black, green');
		// body.append('productDesc','asdfsdf');
		// body.append('productDetail', 'asdfsdfsda');
		// body.append('productId', '0141914');
		// body.append('productName', 'asdfsasd');
		// body.append('stock_available', '12');
		// body.append('stock_ordered', '12');
		// body.append('sizeAvailability', 'L, XL');
		for ( var key in body1 ) {
			body.append(key, body1[key]);
		}
		console.log(files);
		for (var key1 in files) {
			console.log("Sanjeet says ");
			//console.log(files[key1][0]);
			body.append(key1, files[key1][0], files[key1][0].name);
		}
		body.append('sizeAvailability', 'L, XL');
		
		// body.append('productId', '789585');
		// body.append('categoryId', 'xyz');
		// body.append('productName', 'xyz');
		// body.append('clothingType', 'xyz');
		// body.append('productDesc', 'xyz');
		// body.append('colorAvailability', 'xyz');
		// body.append('sizeAvailability', 'xyz');
		// body.append('dateAvailabilityFrom', '');
		// body.append('productDetail', 'xyz');
		// body.append('kerywords', 'xyz');
		// body.append('stock_available', 'xyz');
		// body.append('stock_ordered', 'xyz');
		// body.append('inr_stock_cost', 'xyz');
		// body.append('inr_mrp', 'xyz');
		// body.append('inr_sale_price', 'xyz');
		// body.append('inr_start_date', '');
		// body.append('inr_end_Date', '');
		// body.append('image6', '');
		// body.append('image5', '');
		// body.append('image4', '');
		// body.append('image3', '');
		// body.append('image2', '');
		// body.append('image1', '');
		
		// let body1 = '{productId:"95131241",categoryId:"12",productName:"casual shirts",clothingType:"summer wair",productDesc:"the quick brown fox jumps voer the lazy dog",colorAvailability:"black,blue",sizeAvailability:"sl,xl",dateAvailabilityFrom:"",productDetail:"the quick brown fox jups voer the lazy doh",kerywords:"the ,key",stock_available:"121",stock_ordered:"121",inr_stock_cost:"12121",inr_mrp:"345345",inr_sale_price:"345345",inr_start_date:"",inr_end_Date:"",image6:"",image5:"",image4:"",image3:"",image2:"",image1:""}';
        return this._http.post(this._productAddUrl, body) // ...using post request
                         .map(response => response.json()) // ...and calling .json() on the response to return data
                         .do((data:any) => console.log("uploaded successfully")); //...errors if any
    } 
} 