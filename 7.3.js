'use strict';

// Design a musical juke box using object oriented principles.
const noSongSelectedMessage = 'Select a song';

class Jukebox {

  constructor(songs) {
    this.songs = songs;
    // References a Song object.
    this.nowPlaying = null;
    this.queue = new Queue();
    this.currentPageNumber = 0;
    this.songsPerPage = 50;
    this.displayMessage = noSongSelectedMessage;
    this.displaySongs = [];
    updateDisplay();
  }

  addSong(song) {
    if (this.nowPlaying) {
      return this.queue.enqueue(song);
    }
    return playSong(song);
  }

  playSong(song) {
    // Assume setting nowPlaying starts playing the song.
    this.nowPlaying = song;
    this.displayMessage = `${song.songTitle} - ${song.artistName}`;
    setTimeout(() => {
      if (this.queue.peek()) {
        const nextSong = this.queue.dequeue();
        return playSong(nextSong);
      }
      this.nowPlaying = null;
      this.displayMessage = noSongSelectedMessage;
    }, song.duration);
  }

  updateDisplay() {
    const numSongs = this.songs.length;
    if (numSongs < songsPerPage) {
      
    }
  }
}

class Song {

  constructor(artistName, songTitle, duration) {
    this.artistName = artistName;
    this.songTitle = songTitle;
    this.duration = duration;
  }

}