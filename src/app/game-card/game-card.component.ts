import { Game } from './../models/game';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css']
})
export class GameCardComponent {
  @Input('game') game: Game;
  @Input('show-actions') showActions = true;
  constructor() { }

  
}
