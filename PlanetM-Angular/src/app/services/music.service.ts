import { Injectable } from '@angular/core';
import { Music } from '../models/music';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  song: Music | undefined;
  index: number = 0;

  playlist: Music[] = [{ musicId: "1", musicName: "Cheap Thrills", musicGenre: "Pop", musicImage: "../../../assets/images/song.jpg", musicFile: "../../../assets/songs/song.mp3", musicSinger: "Sia", favoriteSong: false, musicRating: 1 },
  { musicId: "2", musicName: "Astronaut In The Ocean", musicGenre: "Hip-Hop", musicImage: "../../../assets/images/astronaut.jfif", musicFile: "../../../assets/songs/Astronaut In The Ocean.mp3", musicSinger: "Masked Wolf", favoriteSong: false, musicRating: 3 },
  { musicId: "3", musicName: "Fearless", musicGenre: "Electronic", musicImage: "../../../assets/images/fearless.jpg", musicFile: "../../../assets/songs/Fearless.mp3", musicSinger: "Lost Sky", favoriteSong: false, musicRating: 4 },
  { musicId: "4", musicName: "Friends", musicGenre: "Pop", musicImage: "../../../assets/images/friends.jpg", musicFile: "../../../assets/songs/Friends.mp3", musicSinger: "Marshmello", favoriteSong: false, musicRating: 5 },
  { musicId: "5", musicName: "Kings Queens", musicGenre: "Pop", musicImage: "../../../assets/images/kings.jfif", musicFile: "../../../assets/songs/Kings Queens.mp3", musicSinger: "Ava Max", favoriteSong: false, musicRating: 2 }];

  constructor(private _http: HttpClient) { }

  getSongById(id: string) {
    return this.playlist.find(song => song.musicId == id);
  }

  editSongById(id: string, music: Music) {
    music.musicImage = "../../../assets/images/" + music.musicImage;
    music.musicFile = "../../../assets/songs/" + music.musicFile;
    this.song = this.playlist.find(song => song.musicId == id);
    if (this.song)
      this.index = this.playlist.indexOf(this.song);

    this.playlist[this.index] = music;
  }

  getPlaylistLength() {
    return this.playlist.length + 1;
  }

  addMusic(music: Music) {
    music.musicImage = "../../../assets/images/" + music.musicImage;
    music.musicFile = "../../../assets/songs/" + music.musicFile;
    this.playlist.push(music);
  }

  getSongs() {
    return this._http.get('../assets/db/music.json');
  }
}
