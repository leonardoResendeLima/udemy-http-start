import { Injectable } from "@angular/core";
import { Headers, Http } from "@angular/http";

@Injectable()
export class ServersService {

	constructor(private http: Http) { }

	storeServers(servers: any[]) {
		const headers = new Headers({
			'Content-Type': 'application/json'
		});
		return this.http.post('https://udemy-http-angular-41b76.firebaseio.com/data.json', servers, { headers: headers });
	}

	getServers() {
		return this.http.get('https://udemy-http-angular-41b76.firebaseio.com/data.json');
	}
}