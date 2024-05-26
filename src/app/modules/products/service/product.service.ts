import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, finalize } from 'rxjs';
import { URL_SERVICE } from 'src/config/config';
import { AuthService } from '../../auth';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  isLoading$: Observable<boolean>;
  isLoadingSubject: BehaviorSubject<boolean>;

  constructor(private http: HttpClient, public authservice: AuthService) {
    this.isLoadingSubject = new BehaviorSubject<boolean>(false);
    this.isLoading$ = this.isLoadingSubject.asObservable();
  }
  listProducts(page: number = 1, search: string) {
    this.isLoadingSubject.next(true);
    let headers = new HttpHeaders({
      'Authorization': 'Bearer' + this.authservice.token,
    });
    const URL =
      URL_SERVICE + '/admin/products?page=' + page + '&search=' + search;
    return this.http
      .get(URL, { headers: headers })
      .pipe(finalize(() => this.isLoadingSubject.next(false)));
  }

  configAll() {
    this.isLoadingSubject.next(true);
    let headers = new HttpHeaders({
      'Authorization': 'Bearer' + this.authservice.token,
    });
    const URL = URL_SERVICE + '/admin/products/config';
    return this.http
      .get(URL, { headers: headers })
      .pipe(finalize(() => this.isLoadingSubject.next(false)));
  }

  createProducts(data: any) {
    this.isLoadingSubject.next(true);
    let headers = new HttpHeaders({
      'Authorization': 'Bearer' + this.authservice.token,
    });
    const URL = URL_SERVICE + '/admin/products';
    return this.http
      .post(URL, data, { headers: headers })
      .pipe(finalize(() => this.isLoadingSubject.next(false)));
  }

  showProduct(product_id: string) {
    this.isLoadingSubject.next(true);
    let headers = new HttpHeaders({
      'Authorization': 'Bearer' + this.authservice.token,
    });
    const URL = URL_SERVICE + '/admin/products/' + product_id;
    return this.http
      .get(URL, { headers: headers })
      .pipe(finalize(() => this.isLoadingSubject.next(false)));
  }

  updateProducts(product_id: string, data: any) {
    this.isLoadingSubject.next(true);
    let headers = new HttpHeaders({
      'Authorization': 'Bearer' + this.authservice.token,
    });
    const URL = URL_SERVICE + '/admin/products/edit/' + product_id;
    return this.http
      .post(URL, data, { headers: headers })
      .pipe(finalize(() => this.isLoadingSubject.next(false)));
  }

  deleteProduct(product_id: string) {
    this.isLoadingSubject.next(true);
    let headers = new HttpHeaders({
      Authorization: 'Bearer' + this.authservice.token,
    });
    const URL = URL_SERVICE + '/admin/products/' + product_id;
    return this.http
      .delete(URL, { headers: headers })
      .pipe(finalize(() => this.isLoadingSubject.next(false)));
  }

  imagenAdd(data: any) {
    this.isLoadingSubject.next(true);
    let headers = new HttpHeaders({
      'Authorization': 'Bearer' + this.authservice.token,
    });
    let URL = URL_SERVICE + '/admin/products/imagens';
    return this.http
      .post(URL, data, { headers: headers })
      .pipe(finalize(() => this.isLoadingSubject.next(false)));
  }

  deleteImageProduct(imagen_id: string) {
    this.isLoadingSubject.next(true);
    let headers = new HttpHeaders({
      Authorization: 'Bearer' + this.authservice.token,
    });
    const URL = URL_SERVICE + '/admin/products/imagens/' + imagen_id;
    return this.http
      .delete(URL, { headers: headers })
      .pipe(finalize(() => this.isLoadingSubject.next(false)));
  }
}
