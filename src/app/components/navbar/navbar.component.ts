import { Component, OnInit } from '@angular/core';

/**
 * Navbar component
 */

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  /**
   * @ignore
   */
  constructor() { }


  /**
   * Lifecycle hook that is called after data-bound properties of a directive are initialized.
   * https://angular.io/api/core/OnInit
   */
  ngOnInit() {
  }

}
