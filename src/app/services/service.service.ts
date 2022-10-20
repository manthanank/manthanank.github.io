import { Injectable } from '@angular/core';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Project } from '../pages/projects/projects';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private fs: Firestore) {
  }

  getProjects() {
  }
}
