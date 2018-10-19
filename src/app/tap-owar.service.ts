import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TapOWarService {

  baseUrl = `http://tap-o-war.minerva.io:3001`;

  constructor(
    private http: HttpClient
  ) { }

  getTeamDesignation(): any {

  }

  startWar(): any {
    return this.http.get(
      `${this.baseUrl}/start`
    );
  }

  pollStart(team: string): any {
    const url = `${this.baseUrl}/click/${team}`;
    console.log('run: ${url}');
    return this.http.get(url);
  }
}
