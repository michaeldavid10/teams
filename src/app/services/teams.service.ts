import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Team} from '../interfaces/team';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  teamsURL:string = 'https://prueba-e6a8b.firebaseio.com/teams.json';

  constructor( private http:HttpClient ) { }

  newTeam(team: Team) {
    return this.http.post(this.teamsURL, team)
      .pipe(map(res => {
        console.log(res);
        return res;
      }));
  }
}
