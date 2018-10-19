import { Component, OnInit } from '@angular/core';
import { TapOWarService } from 'src/app/tap-owar.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private tapService: TapOWarService
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
}
