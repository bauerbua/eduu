import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiEndpoints } from '../../../assets/api/api-endpoints';

@Injectable({
    providedIn: 'root',
})
export class BaseService {

    constructor(public http: HttpClient) {}

    get<T>(endpoint: string, options?: T): Observable<T | T[]> {
        return this.http.get<any | any[]>(apiEndpoints.BASE_URL + endpoint, options);
    }

    post<T, U>(endpoint: string, body: T, options?: U): Observable<T | T[]> {
        return this.http.post<any | any[]>(apiEndpoints.BASE_URL + endpoint, body, options);
    }

    update<T, U>(endpoint: string, body: T, options?: U): Observable<T | T[]> {
        return this.http.patch<any | any[]>(apiEndpoints.BASE_URL + endpoint, body, options);
    }

    delete<T>(endpoint: string, id: number, options?: T): Observable<T | T[]> {
        return this.http.delete<any | any[]>(apiEndpoints.BASE_URL + endpoint + '/' + id, options);
    }
}
