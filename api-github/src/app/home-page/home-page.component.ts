import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PATH_DETAIL } from '../app.routes.constantes';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  title = "";
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }
  navigateToDetails() {
    if (this.title.length != 0) {
      this.router.navigate([PATH_DETAIL, this.title]);
    }
  }
  handleChange(event) {
    this.title = event.target.value
  }
}
