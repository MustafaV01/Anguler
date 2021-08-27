import { Component } from "@angular/core";

@Component({
    selector: `app-user`,
    templateUrl: `./user.component.html`,
    styleUrls: [`./uder.component.css`]
    // template: `<h2> Burghelea Dragos </h2>`
    //cu acesta putem scrie direct html aici dar preferam sa scriem in folder separat
})
export class UserComponent {
    // Properties
    firstName = `Dragos`;
    lastName = `Burghelea`;
    age = 24;
    adres = {
        street: `Lalelelor`,
        number: `7`
    };

    //Methods
    constructor() {
        // this.seyHey();
        console.log(this.age);
        this.birthdayPlus1()
        console.log(this.age);
    };

    seyHey() {
        console.log(`Helo, my first name is  ${this.firstName} `);
    }

    birthdayPlus1() {
        this.age += 1
    }
}