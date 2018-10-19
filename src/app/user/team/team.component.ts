import { Component, OnInit } from '@angular/core';
import { TapOWarService } from 'src/app/tap-owar.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  team: string = '';

  constructor(
    private tapService: TapOWarService
  ) { }

  ngOnInit() {

    // // call api for team designation;
    // this.tapService.getTeamDesignation().subscribe(
    //   response => this.handleTeamDesignation(response),
    //   error => console.log(error),
    //   () => console.log('finished retrieving team designation;')
    // );

    if (Math.random() > .5 ) {
      this.team = 'Red';
    } else {
      this.team = 'Blue';
    }

    // query on 300ms to get [start] from api;
  }

  handleTeamDesignation(response: string) {
    this.team = response;
  }

}
