import {Injectable} from 'angular2/core';

@Injectable()

export class FilmService {
  getFilms() {
    return [{
				name: 'Interstellar'
		}, {
				name: 'The Hangover'
		}, {
				name: 'Titanic'
		}];
  }
}