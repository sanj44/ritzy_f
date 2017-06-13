import { Component, OnInit } from '@angular/core';
import { ModalService } from '../_services/modal-service/index';
import { ProductListService } from '../_services/product-list-service/index';
import { IProduct } from '../_services/product-list-service/product'; 

@Component({
    moduleId: module.id.toString(),
    templateUrl: 'home.component.html',
	providers: [ProductListService] 
})

export class HomeComponent {
	iproducts: IProduct[];
    private bodyText: string;

    constructor(private modalService: ModalService, private _product: ProductListService) {
    }

    ngOnInit() {
		this._product.getproducts() 
      .subscribe(iproducts => this.iproducts = iproducts);
        this.bodyText = 'your object will be checked';
    }

    openModal(id: string){
        this.modalService.open(id);
    }

    closeModal(id: string){
        this.modalService.close(id);
    }
}