let musics = [
    {titulo: 'Locked out of Heaven', artista: 'Bruno Mars', src:'../Audios/Music1.2.mp3', img:'../Images/Music1.jpg'},
    {titulo: 'Astronaut In The Ocean', artista: 'Masked Wolf', src:'../Audios/Music2.2.mp3', img:'../Images/Music2.jpg'},
    {titulo: 'Descobridor dos sete mares', artista: 'Tim maia', src:'../Audios/Music3.2.mp3', img:'../Images/Music3.jpg'},
    {titulo: 'Saudades do tempo', artista: 'Maneva', src:'../Audios/Music4.2.mp3', img:'../Images/Music4.jpg'},
    {titulo: 'Muleque de Vila', artista: 'Projota', src:'../Audios/Music5.2.mp3', img:'../Images/Music5.jpg'},
    {titulo: 'Malvadão 3', artista: 'Xamã', src:'../Audios/Music6.2.mp3', img:'../Images/Music6.jpg'},
    {titulo: 'Galopa', artista: 'Pedro Sampaio', src:'../Audios/Music7.2.mp3', img:'../Images/Music7.jpg'},
    {titulo: 'Esquema preferido', artista: 'Os Barões da Pisadinha', src:'../Audios/Music8.2.mp3', img:'../Images/Music8.jpg'},
    {titulo: 'Parada Louca', artista: 'Mari Fernandez', src:'../Audios/Music9.2.mp3', img:'../Images/Music9.jpg'},
    {titulo: 'Dançarina', artista: 'Pedro Sampaio ft. Mc Pedrinho', src:'../Audios/Music10.2.mp3', img:'../Images/Music10.jpg'}
]

let music = document.querySelector('audio');
let indexSongs = 0;

let artistName = document.getElementById('artist_music_player');
let musicName = document.getElementById('name_music_player');
let image = document.getElementById("image_player")
let play = document.getElementById("play")
let pause = document.getElementById("pause")
let next = document.getElementById("next")
let prev = document.getElementById("previous")

prev.addEventListener('click', function(){
    indexSongs--;
    if (indexSongs < 0 ){
        indexSongs = 10;
    }
    renderMusic(indexSongs)
})

next.addEventListener('click', function(){
    indexSongs++;
    if (indexSongs > 10){
        indexSongs = 0 
    }
    renderMusic(indexSongs)
})

function renderMusic(index){
    music.setAttribute("src", musics[index].src)
    music.addEventListener('loadeddata', function(){
        musicName.textContent = musics[index].titulo;
        artistName.textContent = musics[index].artista;
        image.src = musics[index].img
    })
}

play.addEventListener('click', function(){
    music.play()
})

pause.addEventListener('click', function(){
    music.pause()
})