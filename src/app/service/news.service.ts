import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { New } from "../model/news";

@Injectable ({providedIn: 'root'})
export class NewsService {

    private apiUrl = 'https://project-works-rest-api.onrender.com/api/v1/GROUP-II/news';

    constructor(private http: HttpClient) {}

    getNews() {
        return this.http.get<New[]>(this.apiUrl);
    }

    getNew(id: string) {
        return this.http.get<New>(`${this.apiUrl}/${id}`);
    }
}