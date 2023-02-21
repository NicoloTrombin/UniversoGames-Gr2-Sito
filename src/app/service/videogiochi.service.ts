import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Videogioco, Linguaggio } from '../model/videogiochi';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class VideogiochiService{
    private apiUrl = 'http://localhost:3000/videogames';

    constructor(private http: HttpClient) {}

    getVideogiochi(): Observable<Videogioco[]> {
        return this.http.get<Videogioco[]>(this.apiUrl);
    }

    getVideogioco(id: string): Observable<Videogioco> {
        return this.http.get<Videogioco>(this.apiUrl + '/' + id);
    }

    addVideogioco(newVideogioco: Omit<Videogioco, 'id'>){
        return this.http.post(this.apiUrl, newVideogioco);
    }

    deleteVideogioco(id: string){
        return this.http.delete(this.apiUrl + '/' + id);
    }

    updateVideogioco(videogioco: Videogioco){
        return this.http.put(this.apiUrl, videogioco);
    }
}