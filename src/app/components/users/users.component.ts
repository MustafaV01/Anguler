import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users!: User[];
  showExtended: boolean = true;
  //pentru a nu putea arata restu de informati
  loaded: boolean = true;


  constructor() { }

  ngOnInit() {

    setTimeout(() => {

    }, 2000);
    ///2000 == timpul in milesecunde

    this.users = [
      {
        firstName: `Dragos`,
        lastName: `Burghelea`,
        age: 24,
        adress: {
          street: `H. S`,
          city: `Iasi`,
          state: `RO`
        }
      },
      {
        firstName: `Martin`,
        lastName: `Kevin`,
        age: 30,
        adress: {
          street: `d. S`,
          city: `bucurest`,
          state: `RO`
        }
      },
      {
        firstName: `Ion`,
        lastName: `Jonson`,
        age: 42,
        adress: {
          street: `H.a`,
          city: `Cluj`,
          state: `RO`
        }
      }
    ];

    this.showExtended = false;


    // this.addUser({
    //   firstName: `UserName`,
    //   lastName: `UserLastName`,
    //   age: 11,
    //   adress: {
    //     street: `00`,
    //     city: `00`,
    //     state: `--`
    //   }
    // });
  }

  addUser(user: User) {
    this.users.push(user);
  }

}
