import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-match-list',
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.scss'],
})
export class MatchListComponent implements OnInit {

  testData = [
    "Alvaro",
    "Jesus",
    "Pablo",
    "Alvaro",
    "Jesus",
    "Pablo",
]

teamsSlidesOptions = {
  freeMode : true,
  slidesPerView: 3.5,
  spaceBetween: 10
}

  constructor() { }

  ngOnInit() {}

  test(){
    console.log("hola")
  }
}
