import { Component, OnInit } from "@angular/core";
import { User } from "src/app/models/User";

@Component({
    selector: `app-user`,
    templateUrl: `./user.component.html`,
    styleUrls: [`./uder.component.css`]
    // template: `<h2> Burghelea Dragos </h2>`
    //cu acesta putem scrie direct html aici dar preferam sa scriem in folder separat
})
export class UserComponent implements OnInit {

    // Properties
    user!: User;

    //Methods
    constructor() {

    }

    ngOnInit() {

        this.user = {
            firstName: `Dragos`,
            lastName: `Burghelea`,
            age: 24,
            adress: {
                street: `H. S`,
                city: `Iasi`,
                state: `RO`
            }
        }
    }
}

