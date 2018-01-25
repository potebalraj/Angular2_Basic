import { Component, Output, EventEmitter } from '@angular/core';
import { User } from '../shared/models/user';

@Component({
    selector: "user-form",
    styles: [`
    form {
        padding:10px;
        background: #ECF0F1;
        border-radius: 3px;
        margin-bottom : 30px;
    }
`],
    template: `
    <form #form="ngForm" (ngSubmit)="onSubmit()" *ngIf="active">        
        <div class="form-group" [ngClass]="{'has-error': firstName.invalid && firstName.touched }">
            <input type="text" class="form-control" 
                   name="firstName" placeholder="First Name" required
                   [(ngModel)]="newUser.firstName" #firstName="ngModel">
            <span class="help-block" *ngIf="firstName.invalid && firstName.touched">First Name is Required.</span>
        </div>
        <div class="form-group" [ngClass]="{'has-error': lastName.invalid && lastName.touched}">
            <input type="text" class="form-control"
                   name="lastName" placeholder="Last Name" required
                   [(ngModel)]="newUser.lastName" #lastName="ngModel">
            <span class="help-block" *ngIf="lastName.invalid && lastName.touched">Last Name is Required.</span>
        </div>
        <button type="submit" class="btn btn-lg btn-block btn-primary" [disabled]="form.invalid">
            Create User
        </button>
    </form>
`
})

export class UserFormComponent {
    @Output() userCreated = new EventEmitter();
    newUser: User = new User();
    active: boolean = true;

    onSubmit() {
        this.userCreated.emit({ user: this.newUser })       

        this.newUser = new User();
        this.active = false;

        setTimeout(() => this.active = true,0)
    }
}