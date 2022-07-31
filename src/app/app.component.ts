import { Component, VERSION } from '@angular/core';
import { DataService } from './data.service';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  images: any;
  constructor(private data: DataService) {}
  ngOnInit() {
    this.data.getData().subscribe((res) => {
      this.images = res;
      console.log(this.images);
    });
  }
  delete(delItem) {
    let index;
    for (let i = 0; i < this.images.length; i++) {
      if (this.images[i].id === delItem) index = i;
    }
    console.log(index);
    this.images.splice(index, 1);
  }
}
