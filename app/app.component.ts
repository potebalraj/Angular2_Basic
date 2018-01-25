import { Component } from '@angular/core';
import { User } from './shared/models/user';

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.css']
})

export class AppComponent {
    message = "Hello !";
    users: User[] = [
        { id: 1, firstName: 'Balraj', lastName: 'Pote' },
        { id: 2, firstName: 'Virat', lastName: 'Kohli' },
        { id: 3, firstName: 'Sachin', lastName: 'Tendulkar' }
    ];
    activeUser: User;

    selectUser(user) {
        this.activeUser = user;
        console.log(this.activeUser);
    }

    onUserCreated(event)
    {
        this.users.push(event.user)
    }
}