import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DestinatariosService {
  private url = 'http://localhost:9090/api/destinatarios';
  private banks = 'https://bast.dev/api/banks.php';

  constructor(
    private http:HttpClient
  ) { }

  getBancos(): Observable<any>{
    const banks: any = this.http.get( this.banks );

    return banks;
  }

  getDestinatarios(): Observable<any>{
    return this.http.get( this.url );
  }

  createDestinatario(jsonBody:any): Observable<any>{
    return this.http.post( this.url, jsonBody );
  }

  updateDestinatario(id:number, jsonBody:any): Observable<any>{
    return this.http.put( this.url+"/"+id, jsonBody );
  }

  deleteDestinatario(id:number): Observable<any>{
    return this.http.delete( this.url+"/"+id );
  }
}
