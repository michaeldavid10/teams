import { Component, OnInit } from '@angular/core';
import {Team} from '../../interfaces/team';
import {TeamsService} from '../../services/teams.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  team:Team = {
    name: '',
    history: '',
    league: '',
  }

  constructor( private _teamsService: TeamsService, private router: Router) { }

  ngOnInit() {
  }

  save() {
    console.log(this.team);

    this._teamsService.newTeam(this.team)
      .subscribe(data => {
        this.router.navigate(['/team', data.name]);
      },
      error => console.error(error));
  }

}
