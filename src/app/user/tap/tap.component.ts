import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.css']
})
export class TapComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(

  ) {
  }

  handlePollStart(response) {
    if (response) {
      if (response.running === false) {
        // go to tap page;
        this.router.navigate(['/user/finish']);
      }
    }
  }

}
