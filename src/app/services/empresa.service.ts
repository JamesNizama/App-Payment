import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empresa } from '../models/empresa';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  private url: string = 'http://localhost:5130/api/Empresa';

  constructor(private http:HttpClient) { }

  getAll():Observable<Empresa[]>{
    return this.http.get<Empresa[]>(this.url);
  }

  getById(id:number):Observable<Empresa[]>{
    return this.http.get<Empresa[]>(`${this.url}/${id}`);
  }

  getByname(nombre:string):Observable<Empresa[]>{
    return this.http.get<Empresa[]>(`${this.url}/${nombre}`);
  }

  saveCliente(emp: Empresa):Observable<Empresa>{
    return this.http.post<Empresa>(this.url, emp);
  }

  updateCliente(emp: Empresa): Observable<Empresa>{
    return this.http.put<Empresa>(`${this.url}/${emp.id_empresa}`, emp);
  }

  deleteCliente(id: number ): Observable<void>{
    return this.http.delete<void>(`${this.url}/${id}`);
  }
}
