import { Injectable } from '@angular/core';
import { datamodel } from '../data/datamodel/demomodel';
import { demo } from '../data/data/demo';

@Injectable({
  providedIn: 'root'
})
export class MainserviceService {

  constructor() { }

  getservicemaindata(): datamodel[] {
    return demo;
  }
}
