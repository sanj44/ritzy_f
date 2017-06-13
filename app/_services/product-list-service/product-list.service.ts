import { Injectable } from '@angular/core'; 
import { Http, Headers, RequestOptions, Response } from '@angular/http'; 
import { Observable } from 'rxjs/Observable'; 
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/do'; 
import { IProduct } from './product';  

@Injectable() 
export class ProductListService { 
   private _productListUrl='http://ritzy-b.herokuapp.com/product/productList'; 
   private _productAddUrl='http://ritzy-b.herokuapp.com/product/addNewProduct'; 
   iproducts: IProduct[];
   constructor(private _http: Http){} 
   getproducts(): Observable<IProduct[]> { 
      return this._http.post(this._productListUrl,"noOption:noValue") 
      .map((response: Response) => <IProduct[]> response.json()) 
      .do((data:any) => console.log(JSON.stringify(data))); 
   } 
   addProduct(body1: Object, files: Object): Observable<IProduct[]> {
		let body = new FormData();
		for ( var key in body1 ) {
			body.append(key, body1[key]);
		}
		console.log(files);
		for (var key1 in files) {
			body.append(key1, files[key1][0], files[key1][0].name);
		}
		body.append('sizeAvailability', 'L, XL');
        return this._http.post(this._productAddUrl, body) // ...using post request
                         .map(response => response.json()) // ...and calling .json() on the response to return data
                         .do((data:any) => console.log("uploaded successfully")); //...errors if any
    } 
} 