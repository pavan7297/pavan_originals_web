import { Component } from '@angular/core';
import { MainserviceService } from '../../service/mainservice.service';
import { datamodel } from '../../data/datamodel/demomodel';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { icon } from '../../data/datamodel/icon';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  data: datamodel[] = [];
  icon: icon[] = [];
  constructor(private mData: MainserviceService) {
    this.data = mData.getservicemaindata();
    // this.icon = mData.getMainIcons();
  }
}
