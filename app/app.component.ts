import {Component} from 'angular2/core';
import {FilmService} from './app.service';

@Component({
  selector: 'my-app',
  providers: [FilmService],
  template: `
  	<h1>{{title}}</h1>
  	<h2>{{title}} details!</h2>
  	<div><label>id: </label>{{title}}</div>
  	<div>
	    <label>name: </label>
    	<div><input [(ngModel)]="title" placeholder="name"></div>
  	</div>
  	<button type="button" (click)="simpleAlert()">PRESS</button>
  	<table>
  		<tr *ngFor="#film of films">
  				<td (click)="onSelect(film)">{{film.name}}</td>
  		</tr>
  	</table>
  `
})

export class AppComponent {

	constructor(private _filmService: FilmService) { }

	public title = '';

	public films = this._filmService.getFilms();

	onSelect(film) {
		this.title = film.name;
	}

	simpleAlert() {
			alert('Simple Alert!');
	}

}