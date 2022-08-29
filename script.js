console.log("Welcome to soundela");
let audioElement= new Audio('songs/1.mp3');
let songIndex=0;
let masterPlay=document.getElementById('masterPlay');
let songInfo=document.getElementsByClassName('songInfo');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let masterSongName=document.getElementById('masterSongName');
let songItems=Array.from(document.getElementsByClassName('songItem'));
let songs=
[
    {songName:"Let me Love You", filePath:"songs/1.mp3", coverPath:"covers/1.jpg"},
    {songName:"Kusu Kusu", filePath:"songs/2.mp3", coverPath:"covers/2.jpg"},
    {songName:"Tu hi haqeeqat", filePath:"songs/3.mp3", coverPath:"covers/3.jpg"},
    {songName:"Meri aashiqui", filePath:"songs/4.mp3", coverPath:"covers/4.jpg"},
    {songName:"Satisfya", filePath:"songs/5.mp3", coverPath:"covers/5.jpg"},
    {songName:"Faded", filePath:"songs/6.mp3", coverPath:"covers/6.jpg"},
    {songName:"taare ne pasand menu", filePath:"songs/7.mp3", coverPath:"covers/7.jpg"},
    {songName:"Raata diya bujha ke", filePath:"songs/8.mp3", coverPath:"covers/8.webp"},
]
songItems.forEach((element,i)=>
{
    // console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText= songs[i].songName;
    
})
let ans;
masterPlay.addEventListener('click',()=>
{
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        ans.classList.remove('fa-circle-play');
        ans.classList.add('fa-circle-pause');  
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        ans.classList.remove('fa-circle-pause');
        ans.classList.add('fa-circle-play');
        makeallPlays();
        gif.style.opacity=0;

    }
})
document.addEventListener('keydown', (e)=>
{
    if(e.code=="Space" && audioElement.paused || e.code=="Space" && audioElement.paused)
    {
        audioElement.play(); 
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }
    else if(e.code=="Space")
    {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }
})
audioElement.addEventListener('timeupdate',()=>
{
    let progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
    if(progress==100)
    {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;
        myProgressBar.value=0;
    }
})
myProgressBar.addEventListener('change',()=>
{
    audioElement.currentTime=(myProgressBar.value * audioElement.duration)/100; 
    // console.log(audioElement.currentTime);
})
const makeallPlays=()=>
{
    Array.from(document.getElementsByClassName('songPlay')).forEach((element)=>
    {
         element.classList.add('fa-circle-play');
    })
    
}
const makeallPlays2=()=>
{
    Array.from(document.getElementsByClassName('songPlay')).forEach((element)=>
    {
         element.classList.add('fa-circle-play');
    })
    
}
Array.from(document.getElementsByClassName('songPlay')).forEach((element)=>
{
     element.addEventListener('click',(e)=>
     {
          if(audioElement.paused)
          {
              makeallPlays();
              songIndex=parseInt(e.target.id);
              ans=e.target;
              e.target.classList.remove('fa-circle-play');
              e.target.classList.add('fa-circle-pause');
              audioElement.src=`songs/${songIndex+1}.mp3`;
              audioElement.currentTime=0;
              masterPlay.classList.remove('fa-circle-play');
              masterPlay.classList.add('fa-circle-pause');
              audioElement.play();
              gif.style.opacity=1;
              
          }
          else
          {
            makeallPlays2();
            songIndex=parseInt(e.target.id);
            masterPlay.classList.add('fa-circle-play');
            audioElement.pause();
            gif.style.opacity=0;
          }
          masterSongName.innerText=songs[songIndex].songName;
     })
})
document.getElementById('next').addEventListener('click',(e)=>
{
    if(songIndex>=8)
    {
        songIndex=0;
    }
    else{
        songIndex+=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    audioElement.currentTime=0;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.play();
    gif.style.opacity=1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})
document.getElementById('previous').addEventListener('click',(e)=>
{
    if(songIndex<=0)
    {
        songIndex=0;
    }
    else{
        songIndex-=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    audioElement.currentTime=0;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.play();
    gif.style.opacity=1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})