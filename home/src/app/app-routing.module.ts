import { ProductsComponent } from './components/products/products.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebComponentWrapper, WebComponentWrapperOptions } from '@angular-architects/module-federation-tools';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/products',
    pathMatch: 'full',
  },
  /*   {
    path: 'products',
    component: ProductsComponent,
  }, */
  {
    path: 'products',
    component: WebComponentWrapper,
    data: {
      remoteEntry: 'http://localhost:4001/remoteEntry.js',
      remoteName: 'react',
      exposedModule: './ListProductsReactComponent',
      elementName: 'react-element',
    } as WebComponentWrapperOptions,
  },
  {
    path: 'wishlist',
    component: WebComponentWrapper,
    data: {
      remoteEntry: 'http://localhost:4004/remoteEntry.js',
      remoteName: 'mf_wishlist',
      exposedModule: './App',
      elementName: 'vue-element',
    } as WebComponentWrapperOptions,
  },
  {
    path: 'login',
    component: WebComponentWrapper,
    data: {
      remoteEntry: 'http://localhost:4002/remoteEntry.js',
      remoteName: 'mf_oauth',
      exposedModule: './App',
      elementName: 'svelte-element',
    } as WebComponentWrapperOptions,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
