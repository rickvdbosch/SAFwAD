import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

const baseUrl: string = environment.serviceBaseUrl;

@Injectable({
  providedIn: 'root'
})
export class ValuesService {
  constructor(private httpClient: HttpClient) { }

  public getValues(): Observable<string[]> {
    return this.httpClient.get<string[]>(`${baseUrl}values`);
    }
}
