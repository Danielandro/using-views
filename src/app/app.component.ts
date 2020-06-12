import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentPage = 'intro';

  changePage(): void {
    this.currentPage = this.currentPage === 'intro' ? 'start' : 'intro';
  }
}
