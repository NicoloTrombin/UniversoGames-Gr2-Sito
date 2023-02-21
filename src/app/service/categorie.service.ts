import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Categoria } from "../model/categoria";

@Injectable ({providedIn: 'root'})
export class CategorieService {

    private apiUrl = 'http://localhost:3000/categories';

    constructor(private http: HttpClient) {}

    getCategorie() {
        return this.http.get<Categoria[]>(this.apiUrl);
    }

    getCategoria(id: string){
        return this.http.get<Categoria>(`${this.apiUrl}/${id}`);
    }
}