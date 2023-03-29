import { environment } from '../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { EMPTY, Observable, of } from 'rxjs';
import { Product } from '../interfaces/product.interface';

@Injectable({ providedIn: 'root' })
export class ProductsService {
  private readonly endPoint = `${environment.apiURL}/products`;
  private readonly http = inject(HttpClient);

  public getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.endPoint);
  }

  public getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.endPoint}/${id}`);
  }
}
