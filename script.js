// Initialize the Variables

let songIndex = 0;
let audioElement = new Audio('./Songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar'); 
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let masterSongName = document.getElementById('masterSongName');

let songs = [
    {songName : "Heat Waves",filepath : "./Songs/1.mp3",coverPath:"./Covers/heatwaves.jpg" },
    {songName : "Mood",filepath : "./Songs/2.mp3",coverPath:"./Covers/mood.jpeg" },
    {songName : "Locked Away",filepath : "./Songs/3.mp3",coverPath:"./Covers/LockedAway.jpeg" },
    {songName : "Let Me Down Slowly",filepath : "./Songs/4.mp3",coverPath:"./Covers/LetMeDownSlowly.jpeg" },
    {songName : "Rockabye",filepath : "./Songs/5.mp3",coverPath:"./Covers/Rockabye.jpeg" },
    {songName : "Replay",filepath : "./Songs/6.mp3",coverPath:"./Covers/Replay.jpeg" },
    {songName : "Khaab",filepath : "./Songs/7.mp3",coverPath:"./Covers/Khaab.jpeg" },
    {songName : "Tarasti Hain Nigaahein",filepath : "./Songs/8.mp3",coverPath:"./Covers/Tarasti hai.jpeg" },
    {songName : "Mera Wala Sardar",filepath : "./Songs/9.mp3",coverPath:"./Covers/Mera Wala Sardar.jpeg" },
    {songName : "Maine Royaan",filepath : "./Songs/10.mp3",coverPath:"./Covers/Maine Royaan.jpeg" },
    {songName : "Duniya",filepath : "./Songs/11.mp3",coverPath:"./Covers/Duniya.jpeg" },
    {songName : "Laree Chooti",filepath : "./Songs/12.mp3",coverPath:"./Covers/Lareee Chooti.jpeg" }
]

songItems.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

// Handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause()
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})




// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration) * 100);
    myProgressBar.value = progress
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value *  audioElement.duration/100;
})
/* 
const makeAllPlays = () =>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) =>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-cirlce');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
    })
})
*/

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `Songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `Songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `Songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})