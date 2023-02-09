

let display = document.getElementById('display');

let title = document.getElementById('title');

let slider = document.getElementById('slider');


let previous = document.getElementById('pre');

let pause = document.getElementById('pause');

let next = document.getElementById('nxt');

let index_no = 0 ;

let playing_song = 0 ;

let track = document.createElement("audio") ;

let songs = [{ image: 'images/cover1.jpg', song: "songs/song1.mp3",songTitle: 'Thattan Thattan From Karnan'}, { image: 'images/cover2.jpg', song: "songs/song2.mp3",songTitle: 'Thentral Vanthu From Avatharam' },
 { image: 'images/cover3.png', song: "songs/song3.mp3",songTitle: 'Yaar Azhaippathu From Maara' }] ;




 function load(index_no) {
    display.src = songs[index_no].image ;
    title.innerHTML = songs[index_no].songTitle ;
    track.src = songs[index_no].song ;

    slider.value = 0 ;
    pausesong();
}
load(index_no) ;




function play() {
    if (playing_song == false) {
        playsong();
    } else {
        pausesong();
    }
}

function playsong()
{
    pause.innerHTML='<i class="fa-solid fa-pause"></i>' ;
    playing_song = true ;
    track.play() ;

}

function pausesong() {
    pause.innerHTML ='<i class="fa-solid fa-play"></i>' ;
    playing_song = false ;
    track.pause() ;
}


function next_song() {

    if (index_no < songs.length-1) {
        index_no += 1;
        load(index_no);
    } else {
        index_no = 0 ;
        load(index_no) ;
    }

}

function previous_song() {

    if (index_no > 0) {
        index_no -= 1;
        load(index_no);
    } else {
        index_no = songs.length-1 ;
        load(index_no) ;
    }
    
}


function slider_duration() {

    slider.max = track.duration ;

    track.currentTime = slider.value ;
}