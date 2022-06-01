import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferenciasService {
  private url = 'http://localhost:9090/api/transferencias';

  constructor(
    private http:HttpClient
  ) { }  

  getTransferencias(): Observable<any>{    
    return this.http.get( this.url );
  }

  createTransferencia(jsonBody:any): Observable<any>{
    return this.http.post( this.url, jsonBody );
  }
}
