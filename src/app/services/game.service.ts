import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class GameService {

  constructor(private db: AngularFireDatabase) { }

  create(game) { 
    return this.db.list('/games').push(game);
  }

  getAll() {
    return this.db.list('/games');
  }
  
  get(gameId) { 
    return this.db.object('/games/' + gameId);
  }

  update(gameId, game) { 
    return this.db.object('/games/' + gameId).update(game);
  }

  delete(gameId) { 
    return this.db.object('/games/' + gameId).remove();
  }

}


