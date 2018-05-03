import { Component, OnInit } from '@angular/core';
import * as playback from 'playback';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = ''
  artist = ''
  album = ''

  stats = ''

  constructor() { }

  ngOnInit() {
    const itunes = window.require('playback');
    itunes.on('playing', data => {
      this.stats = 'Now Playing'
      if (!data.name && !data.artist) {
        this.title = '';
        this.artist = '';
        this.album = '';
      }
      if (data.name) { this.title = data.name; }
      if (data.artist) { this.artist = data.artist; }
      if (data.album) { this.album = data.album; }
    });
    itunes.on('paused', () => {
      this.stats = 'Paused';
    });
    itunes.play();
  }

}

