import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Music } from 'src/app/models/music';
import { MusicService } from 'src/app/services/music.service';

@Component({
  selector: 'app-edit-music',
  templateUrl: './edit-music.component.html',
  styleUrls: ['./edit-music.component.scss']
})
export class EditMusicComponent implements OnInit {

  id: string = "";

  musicGroup = this.fb.group({});

  constructor(private _activeRoute: ActivatedRoute, private fb: FormBuilder, private _service: MusicService, private _route: Router) {
    _activeRoute.params.subscribe(p => {
      this.id = p.id
    });

    this.musicGroup = this.fb.group({
      musicId: [this.id],
      musicName: ['', Validators.required],
      musicGenre: ['', Validators.required],
      musicImage: ['', Validators.required],
      musicFile: ['', Validators.required],
      musicSinger: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  OnEdit(music: any) {
    this._service.editSongById(this.id, music.value);
    this._route.navigate(["/music"]);
  }

}
