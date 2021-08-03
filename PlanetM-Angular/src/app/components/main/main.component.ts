import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { Music } from 'src/app/models/music';
import { MusicService } from 'src/app/services/music.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  providers: [NgbRatingConfig]
})

export class MainComponent implements OnInit {
  music: Music | undefined;
  favorites: Music[] = [];
  search = "";
  pause: boolean = false;
  currentRate = 0;
  playlist: Music[] = [];

  constructor(config: NgbRatingConfig, private _router: Router, private _service: MusicService) {
    this.music = _service.getSongById("1");
    _service.getSongs().subscribe((res:any) => {
       this.playlist = res.Music;
    });
    config.max = 5;
    config.readonly = true;
  }

  ngOnInit(): void {
  }

  addFavorites(song: Music) {
    song.favoriteSong = true;
    this.favorites.push(song);
    console.log(this.favorites);
  }

  removeFavorites(music: Music) {
    music.favoriteSong = false;
    this.favorites = this.favorites.filter(song => song != music);
    console.log(this.favorites);
  }

  searchSong() {
    this.music = this.playlist.find(song => song.musicName === this.search)
  }

  play(song: Music) {
    this.music = song;
  }

  toggle() {
    this.pause = !this.pause;
  }

  prev(id: string) {
    if (id == "1")
      id = "6";
    var y: number = +id;
    y = --y;
    this.music = this.playlist.find(song => song.musicId == String(y));
  }

  next(id: string) {
    if (id == "5")
      id = "0";
    var y: number = +id;
    y = ++y;
    this.music = this.playlist.find(song => song.musicId == String(y));
  }

  detail(id: string) {
    this._router.navigate(["/music/" + id]);
  }

  edit(id: string) {
    this._router.navigate(["/edit/" + id]);
  }

  delete(song: Music) {
    this.playlist.forEach((item, index) => {
      if (item === song) this.playlist.splice(index, 1);
    });
  }
}
