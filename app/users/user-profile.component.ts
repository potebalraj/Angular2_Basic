import { Component, Input } from '@angular/core';
import { User } from '../shared/models/user';

@Component({
    selector: 'user-profile',
    template: `
            <div class="jumbotron" *ngIf="user">
                <h2>{{user.firstName}} {{user.lastName}}</h2>
                <input class="forms-control" [(ngModel)]="user.firstName">
            </div>
    `
})

export class UserProfileComponent {
    @Input() user: User;
}