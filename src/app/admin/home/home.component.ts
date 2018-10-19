import { Component, OnInit } from '@angular/core';
import { TapOWarService } from 'src/app/tap-owar.service';
import { ThrowStmt } from '@angular/compiler';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private tapService: TapOWarService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  startWar() {
    this.tapService.startWar().subscribe(
      response => this.handleStartWar(response)
    );
  }

  handleStartWar(response) {
    // no response;
    console.log('called start war API...');

    // redirect to the war page;
    this.router.navigate(['/admin/war']);
  }
}
