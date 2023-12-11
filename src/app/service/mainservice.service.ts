import { Injectable } from '@angular/core';
import { datamodel } from '../data/datamodel/demomodel';
import { demo } from '../data/data/demo';
import { icon } from '../data/datamodel/icon';
import { IconData } from '../data/data/IconData';

@Injectable({
  providedIn: 'root'
})
export class MainserviceService {

  constructor() { }

  getservicemaindata(): datamodel[] {
    return demo;
  }
  getMainIcons():icon[]{
    return IconData;
  }
}
