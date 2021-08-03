import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Music } from 'src/app/models/music';
import { MusicService } from 'src/app/services/music.service';

@Component({
  selector: 'app-detailed-music',
  templateUrl: './detailed-music.component.html',
  styleUrls: ['./detailed-music.component.scss']
})
export class DetailedMusicComponent implements OnInit {

  id: string = "";
  music: Music | undefined;

  constructor(private _activeRoute: ActivatedRoute, private _service: MusicService) {
    _activeRoute.params.subscribe(p => {
      this.id = p.id;
      this.music = _service.getSongById(this.id);
    });
  }

  ngOnInit(): void {
  }
}
