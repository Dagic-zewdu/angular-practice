import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss',
})
export default class DetailComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  router: Router = inject(Router);
  detailId = 0;
  constructor() {
    this.detailId = Number(this.route.snapshot.params['id']);
  }
  // ngOnInit(): void {
  //   this.router.navigate(['/about']);
  // }
}
