import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MusicService } from 'src/app/services/music.service';

@Component({
  selector: 'app-add-music',
  templateUrl: './add-music.component.html',
  styleUrls: ['./add-music.component.scss']
})
export class AddMusicComponent implements OnInit {

  id: string = "";
  submitted = false;
  musicGroup = this.fb.group({});

  constructor(private fb: FormBuilder, private _service: MusicService, private _route: Router) {
    this.id = String(_service.getPlaylistLength());

    this.musicGroup = this.fb.group({
      musicId: [this.id],
      musicName: ['', Validators.required, Validators.minLength(2)],
      musicGenre: ['', Validators.required],
      musicImage: ['', Validators.required],
      musicFile: ['', Validators.required],
      musicSinger: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  get music() { return this.musicGroup.controls; }

  OnAdd() {
    this.submitted = true;
    if (this.musicGroup.invalid) {
      return;
    }
    this._service.addMusic(this.musicGroup.value);
    this._route.navigate(["/music"]);
  }
}
