import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Song } from '../models/song.interface';
import { FirestoreService } from '../services/data/firestore.service';
import { Router } from '@angular/router';
import {NavController} from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

public songList;

// random number stuff
randomNumber:number;


constructor(
  private firestoreService: FirestoreService,
  private router: Router,
  private navctrl : NavController,
) {}


ngOnInit()
{
  this.songList = this.firestoreService.getSongList().valueChanges();
  this.randomNumber = Math.floor(Math.random() * 100);
}


}
