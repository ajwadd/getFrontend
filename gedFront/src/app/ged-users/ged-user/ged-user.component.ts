import { Component, OnInit } from '@angular/core';
import { AuthenticationService, TokenPayload } from './../../services/authentication.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-ged-user',
  templateUrl: './ged-user.component.html',
  styleUrls: ['./ged-user.component.css']
})
export class GedUserComponent implements OnInit {
  credentials: TokenPayload = {
    ID_OPERATEUR_CREATION: 0,
    NOM : '',
    PRENOM : '',
    EMAIL : '',
    PASSWORD : ''

  }

  constructor(private auth: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
  }

   login () {
     this.auth.login(this.credentials).subscribe(() => {
       this.router.navigateByUrl('/profile')
     },
     err => {
       console.error(err)
     }
     )
   }

   register () {
    this.auth.register(this.credentials).subscribe(() => {
      this.router.navigateByUrl('/profile')
    },
    err => {
      console.error(err)
    }
    )
  }

}
