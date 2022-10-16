import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {MatSidenavModule} from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'budget-tracker';
  events: string[] = [];
  opened: boolean | undefined;
  constructor(private modalService: NgbModal) {}

  openModal(content: any)
  {
    this.modalService.open(content, { size: 'lg' });
  }
}
