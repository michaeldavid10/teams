import { Component, OnInit } from '@angular/core';
import {Team} from '../../interfaces/team';

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

  constructor() { }

  ngOnInit() {
  }

  save() {
    console.log(this.team);
  }

}
