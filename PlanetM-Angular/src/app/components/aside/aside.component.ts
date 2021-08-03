import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {

  songs = [{ songId: 1, songName: "Two Of Us", songSinger: "Louis Tomlinson", songImage: "song1.png" },
  { songId: 2, songName: "Drag Me Down", songSinger: "One Direction", songImage: "song2.jpg" },
  { songId: 3, songName: "Bad Habits", songSinger: "Ed Sheeran", songImage: "song3.jpg" },
  { songId: 4, songName: "Back To You", songSinger: "Louis Tomlinson", songImage: "song4.jpg" }];

  constructor() { }

  ngOnInit(): void {
  }

}
