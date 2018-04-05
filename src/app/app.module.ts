import { GameService } from './services/game.service';
import { FormsModule } from '@angular/forms';
import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; 


import { AppComponent } from './app.component';
import { CardGamesComponent } from './card-games/card-games.component';
import { HomeComponent } from './home/home.component';
import { AuthService } from './auth.service';
import { UserService } from './user.service';
import { AuthGuard } from './auth-guard.service';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { SignupComponent } from './signup/signup.component';
import { NgModule } from '@angular/core';
import { EmailComponent } from './email/email.component';
import { NewGameComponent } from './new-game/new-game.component';
import { GameComponent } from './game/game.component';
import { GameCardComponent } from './game-card/game-card.component';
import { CategoryService } from './services/category.service';


@NgModule({
  declarations: [
    AppComponent,
    CardGamesComponent,
    HomeComponent,
    BsNavbarComponent,
    SignupComponent,
    EmailComponent,
    NewGameComponent,
    GameComponent,
    GameCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'card-games', component: CardGamesComponent/* , canActivate: [AuthGuard] */ },
      { path: 'new-game', component: NewGameComponent/* , canActivate: [AuthGuard]  */},
      { path: 'game', component: GameComponent/* , canActivate: [AuthGuard]  */},
      { path: 'signup', component: SignupComponent}
    ])
  ],
  providers: [
    AuthService,
    UserService,
    AuthGuard, 
    CategoryService,
    GameService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
