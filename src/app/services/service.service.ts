import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private fs: Firestore) {
  }
}
