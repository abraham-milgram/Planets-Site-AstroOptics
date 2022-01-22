var song = document.getElementById("song");
var button = document.getElementById("song_btn");

button.onclick = function(){
    if(song.paused){song.play();}
    else{song.pause();}
}