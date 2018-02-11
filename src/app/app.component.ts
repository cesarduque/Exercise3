import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ]
})
export class AppComponent {
	joke: string;

	constructor(private httpClient: HttpClient) {}

	ngOnInit() {
		this.getJoke();
	}

	getJoke() {
		const url = 'https://api.icndb.com/jokes/random';
		setInterval(() => {
			this.httpClient.get<any>(url).subscribe((resultJoke) => {
				this.joke = resultJoke.value.joke;
			});
		}, 5000);
	}
}
