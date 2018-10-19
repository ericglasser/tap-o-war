import { Component, OnInit } from '@angular/core';
import { TapOWarService } from 'src/app/tap-owar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  team: string = '';

  constructor(
    private tapService: TapOWarService,
    private router: Router
  ) { }

  ngOnInit() {

    // // call api for team designation;
    // this.tapService.getTeamDesignation().subscribe(
    //   response => this.handleTeamDesignation(response),
    //   error => console.log(error),
    //   () => console.log('finished retrieving team designation;')
    // );

    if (Math.random() > .5) {
      this.team = 'red';
    } else {
      this.team = 'blue';
    }

    // query on 300ms to get [start] from api;
    this.tapService.pollStart(this.team).subscribe(
      response => this.handlePollStart(response),
      error => console.log(error)
    );
  }

  handleTeamDesignation(response: string) {
    this.team = response;
  }

  handlePollStart(response) {
    if (response) {
      if (response[this.team] !== 0) {
        // go to tap page;
        this.router.navigate(['/user/tap']);
      }
    }
  }
}
