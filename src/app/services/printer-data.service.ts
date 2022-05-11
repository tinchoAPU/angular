import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrinterDataService {

  constructor(private httpClient: HttpClient) { }

  // @ts-ignore
  obtenerRazasGatos(): Observable<any[]> {
    const url = 'https://catfact.ninja/breeds';
    // @ts-ignore
    return this.httpClient.get(url);
    // console.error('valores: ' + data.total);
    // @ts-ignore
  }
}
