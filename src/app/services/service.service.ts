import { Injectable } from '@angular/core';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  loader = new BehaviorSubject<Boolean>(false);

  constructor(private fs: Firestore) {
  }

  getProjects() {
  }
}
