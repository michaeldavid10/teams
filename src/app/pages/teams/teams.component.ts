import { Component, OnInit } from '@angular/core';
import {TeamsService} from '../../services/teams.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  teams: any[] = [];
  loading: boolean = true;

  constructor(private _teamsService: TeamsService) {
    this._teamsService.getTeams()
      .subscribe((data: any[]) => {
          console.log(data);
          this.teams = data;
          this.loading = false;
        });
  }

  ngOnInit() {
  }

  deleteTeam( key$:string) {
    this._teamsService.deleteTeam(key$)
      .subscribe((data: any[]) => {
        if (data) {
          console.error(data);
        } else {
          delete this.teams[key$];
        }
      });
  }

}
