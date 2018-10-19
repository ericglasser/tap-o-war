import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TapOWarService {

  constructor(
    private http: HttpClient
  ) { }

  getTeamDesignation(): any {

  }

  startWar(): any {

    return this.http.get(
      '/start'
    );
  }
}
