import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-structure',
  templateUrl: './structure.component.html',
  styleUrls: ['./structure.component.css'],
})
export class StructureComponent implements OnInit {
  pageTitle: string = 'Dashboard';
  constructor(
    private activaredRoute: ActivatedRoute,
    private router: Router,
    private titleService: Title
  ) {}
  ngOnInit() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((changeEvent) => {
        console.log(changeEvent);
        this.getChild(this.activaredRoute).data.subscribe((data: any) => {
          this.pageTitle = data['title'];
          console.log(this.pageTitle);
          // this.titleService.setTitle('DashApp' + ' - ' + this.pageTitle);
        });
      });
  }

  getChild(activatedRoute: ActivatedRoute): any {
    if (activatedRoute.firstChild) {
      return this.getChild(activatedRoute.firstChild);
    } else {
      return activatedRoute;
    }
  }
}
