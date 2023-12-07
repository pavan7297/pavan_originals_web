import { Component } from '@angular/core';
import { MainserviceService } from '../../service/mainservice.service';
import { datamodel } from '../../data/datamodel/demomodel';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  data: datamodel[] = [];
  constructor(private mData: MainserviceService) {
    this.data = mData.getservicemaindata();
  }
}
