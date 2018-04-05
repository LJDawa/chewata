import { GameService } from './../services/game.service';
import { CategoryService } from './../services/category.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import 'rxjs/add/operator/take';

@Component({
  selector: 'new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.css']
})
export class NewGameComponent {
  categories$;
  game = {};
  id;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private gameService: GameService) {
    this.categories$ = categoryService.getAll();

    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) this.gameService.get(this.id).take(1).subscribe(g => this.game = g);
  }

  save(game) {
    if (this.id) this.gameService.update(this.id, game);
    else {
      this.gameService.create(game);
    }

    this.router.navigate(['/game']);
  }

  delete() {
    if (!confirm('Are you sure you want to delete this game?')) return;

    this.gameService.delete(this.id);
    this.router.navigate(['/new-game']);
  }

  formatGame(gameObject){

  }


}
