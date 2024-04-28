import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { FunctionService } from 'src/app/services/function.service';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  diverr = false;
  divedit = false;
  id: any;
  product: any;
  productId: any;
  category: any;
  productName: any;
  singleProduct: any;
  relNumber: any;
  image: any;

  constructor(
    public global: GlobalService,
    public functions: FunctionService,
    private ActivatedRoute: ActivatedRoute,
    private _route: Router
  ) {
    this.ActivatedRoute.paramMap.subscribe((params) => {
      this.id = params.get('productId');
      // let product: any;

      global.getSingleProduct(this.id).subscribe(
        (data) => {
          this.global.singleProduct = data;
        },
        (e) => {
          console.log(e);
        },
        () => {
          this.global.loadingFlag = false;
        }
      );

      // global.updateProduct(id, this.model).subscribe((data) => {
      //   this.global.singleProduct = data;
      //   console.log(this.global.singleProduct);
      // });
      // $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
      // get related products
    });

   }
   model: Product = {
    id: '',
    title: '',
    description: '',
    price: '',
    discountPercentage: '',
    rating: '',
    stock: '',
    brand: '',
    category: '',
    thumbnail: '',
    images: [],
  };

  // ================================

  handleChange(eve: any) {
    this.image = eve.target.files[0];
  }
  handleSubmit(form: NgForm) {
    if (form.valid) {
      let formData = new FormData();

      formData.append('title', this.model.title);
      formData.append('description', this.model.description);
      formData.append('price', this.model.price);
      formData.append('discountPercentage', this.model.discountPercentage);
      formData.append('rating', this.model.rating);
      formData.append('stock', this.model.stock);
      formData.append('brand', this.model.brand);
      formData.append('category', this.model.category);
      formData.append('thumbnail', this.model.thumbnail);
      formData.append('images', this.model.images);
      // ==================
      this.global.addNewProduct(formData).subscribe((res) => {
        console.log(res);
        if (res) {
          this.divedit = true;
        } else {
          this.diverr = true;
        }
      });
    }
  }

  ngOnInit(): void {
    this.ActivatedRoute.data.subscribe((data) => {
      this.global.userType = data['userType'];
      if (
        this.global.userType == 'admin' &&
        localStorage.getItem('user') != null
      ) {
        this.global.navbarFlag = false;
        this.global.isLogin = true;
      }
      console.log(this.global.userType);
    });
  }

}
