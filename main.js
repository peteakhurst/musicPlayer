window.onload = () => {

    const song_img_el = document.getElementById('song-image');
    const song_title_el = document.getElementById('song-title');
    const song_artist_el = document.getElementById('song-artist');
    const song_next_up = document.getElementById('song-next-up');

    const player_image = document.querySelector('.song-img');

    const play_btn = document.getElementById('play-btn');
    const play_btn_icon = document.getElementById('play-icon');
    const prev_btn = document.getElementById('prev-btn');
    const next_btn = document.getElementById('next-btn');

    const audio_player = document.getElementById('music-player');

    let current_song_index;
    let next_song_index;

    let songs = [{
            title: 'Slam',
            artist: 'Pendulum',
            song_path: 'music/slam.mp3',
            img_path: 'images/song-1.jpeg'
        },
        {
            title: 'Dont Mug Yourself',
            artist: 'The Streets',
            song_path: "music/DontMugYourself.mp3",
            img_path: 'images/song-2.jpeg'
        },
        {
            title: 'K.D.R',
            artist: 'Luca Brasi',
            song_path: 'music/K.D.R.mp3',
            img_path: 'images/song-3.jpeg'
        },
        {
            title: 'Shut Up',
            artist: 'Jonny Fritz',
            song_path: 'music/ShutUp.mp3',
            img_path: 'images/song-4.jpeg'
        }
    ]

    play_btn.addEventListener('click', TogglePlaySong);
    next_btn.addEventListener('click', () => ChangeSong());
    prev_btn.addEventListener('click', () => ChangeSong(false));


    InitPlayer();

    function InitPlayer() {
        current_song_index = 0;
        next_song_index = current_song_index + 1;
        UpdatePlayer();
    }

    function UpdatePlayer() {
        let song = songs[current_song_index];

        song_img_el.style = `background-image: url('${song.img_path}')`;
        song_title_el.innerText = song.title;
        song_artist_el.innerText = song.artist;

        song_next_up.innerText = songs[next_song_index].title + " by " + songs[next_song_index].artist;

        audio_player.src = song.song_path;
    }


    function TogglePlaySong() {
        if (audio_player.paused) {
            audio_player.play();
            play_btn_icon.classList.remove('fa-play');
            play_btn_icon.classList.add('fa-pause');

            player_image.classList.add('rotate');

        } else {
            audio_player.pause();
            play_btn_icon.classList.add('fa-play');
            play_btn_icon.classList.remove('fa-pause');


            player_image.classList.remove('rotate');
        }
    }

    function ChangeSong(next = true) {
        if (next) {
            current_song_index++;
            next_song_index = current_song_index + 1;
            if (current_song_index > songs.length - 1) {
                current_song_index = 0;
                next_song_index = current_song_index + 1;
            }

            if (next_song_index > songs.length - 1) {
                next_song_index = 0;
            }
        } else {
            current_song_index--;
            next_song_index = current_song_index + 1;

            if (current_song_index < 0) {
                current_song_index = songs.length - 1;
                next_song_index = 0;
            }
        }

        UpdatePlayer();
        TogglePlaySong();
    }
}