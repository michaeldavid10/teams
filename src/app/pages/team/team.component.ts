import { Component, OnInit } from '@angular/core';
import {Team} from '../../interfaces/team';
import {TeamsService} from '../../services/teams.service';
import {Router, ActivatedRoute} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  private team: Team = {
    name: '',
    history: '',
    league: '',
  };

  new: boolean = false;
  id: string;

  constructor( private _teamsService: TeamsService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params
      .subscribe(params => {
        this.id = params['id'];
        if (this.id != 'new') {
          this._teamsService.getTeam(this.id)
            .subscribe((data: Team) => this.team = data);
        }
      });
  }

  ngOnInit() {
  }

  save() {
    console.log(this.team);

    if (this.id == 'new') {
      this._teamsService.newTeam(this.team)
        .subscribe((data: Team) => {
            this.router.navigate(['/team', data.name]);
          },
          error => console.error(error));
    } else {
      this._teamsService.updateTeam(this.team, this.id)
        .subscribe((data: Team) => {
            console.log(data);
          },
          error => console.error(error));
    }
  }

  addNew(form:NgForm) {
    this.router.navigate(['/team', 'new']);
    form.reset({
      league: "Alemania"
    });
  }

}
