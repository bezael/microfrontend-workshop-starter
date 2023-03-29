import {
  Component,
  ElementRef,
  ViewChild,
  ViewEncapsulation,
  inject,
} from '@angular/core';
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { Product } from './interfaces/product.interface';
import { ProductsService } from './services/products.service';
/*
  <h2 style="color: red">Products List (React Microfrontend)</h2>
    <div>
      This element is being loaded from a distance into the application through
      React App, utilizing Webpack Module Federation.
    < /div>

    <div className='container px-4 py-8 mx-auto'>
  <div class="grid grid-cols-1 gap-4 pt-20 pb-10 md:grid-cols-2 xl:grid-cols-4 lg:pt-40 lg:pb-20">

    */

const containerElementName = 'customReactComponentContainer';

@Component({
  selector: 'app-products',
  template: ` <div className="w-2/4 px-4 py-8 mx-auto">
    <span
      class="grid grid-cols-1 gap-4 pt-20 pb-10 md:grid-cols-2 xl:grid-cols-4 lg:pt-40 lg:pb-20"
      #${containerElementName}
    >
    </span>
  </div>`,
  // encapsulation: ViewEncapsulation.None,
})
export class ProductsComponent {
  @ViewChild(containerElementName, { static: true }) containerRef!: ElementRef;
  root!: any;

  private readonly productsSVc = inject(ProductsService);

  constructor() {
    this.handleClicked = this.handleClicked.bind(this);
  }

  handleClicked(product: any) {
    // this.removeUser(user.name, user.email);
    console.log('handleClicked', product);
  }

  removeUser(name: string, email: string): void {
    console.log('removeUser');
    // this.store.dispatch(new RemoveUser({ name, email } as IUser));
  }

  ngAfterViewInit() {
    this.root = createRoot(this.containerRef.nativeElement);
    this.root.render('Loading script...');
    // try {
    //   import('mf_products/ListProductsReactComponent').then((val) => {
    //     this.productsSVc.getProducts().subscribe({
    //       next: (products: Product[]) => {
    //         this.root.render(
    //           React.createElement(val.ListProductsReactComponent, {
    //             products,
    //             onClick: this.handleClicked,
    //           })
    //         );
    //       },
    //       error: (error) => console.log(error),
    //     });
    //   });
    // } catch (error) {
    //   console.log('Error', error);
    // }
  }

  ngOnDestroy() {
    this.root.unmountComponentAtNode(this.containerRef.nativeElement);
  }
}
