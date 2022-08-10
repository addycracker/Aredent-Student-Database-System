import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

	constructor() { }

	doLogin(data: any) {
		if (data.email == "ardentstudent@gmail.com" && data.password == "studentmeanb20") {
			return {
				code: 200,
				message: "Login Successful",
				data: data
			};
		} else {
			return {
				code: 503,
				message: "Invalid Credentials",
				data: null
			};
		}
	}

}

