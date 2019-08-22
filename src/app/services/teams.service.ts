import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Team} from '../interfaces/team';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  teamsURL:string = 'https://prueba-e6a8b.firebaseio.com/teams.json';
  teamURL:string = 'https://prueba-e6a8b.firebaseio.com/teams/';

  constructor( private http: HttpClient ) { }

  newTeam(team: Team) {
    return this.http.post(this.teamsURL, team)
      .pipe(map(res => {
        console.log(res);
        return res;
      }));
  }

  updateTeam(team: Team, key$:string) {
    let url = `${this.teamURL}/${key$}.json`;
    return this.http.put(url, team)
      .pipe(map(res => {
        console.log(res);
        return res;
      }));
  }

  getTeam(key$:string) {
    let url = `${this.teamURL}/${key$}.json`;
    return this.http.get(url)
      .pipe(map(res => {
        return res;
      }));
  }

  getTeams() {
    return this.http.get(this.teamsURL)
      .pipe(map(res => {
        return res;
      }));
  }
}
