/**
 * It generates the landing page image with its own custom css styling.
 * We did this to keep the landing page's image in a different component but also to fill the entire page.
 */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-image',
  templateUrl: './main-image.component.html',
  styleUrls: ['./main-image.component.css']
})
export class MainImageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
