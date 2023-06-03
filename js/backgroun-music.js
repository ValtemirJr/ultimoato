export const  playMusic = () => {
    const audio = new Audio('assets/musics/Molossus.mp3');
    audio.loop = true;
    audio.play();
    document.body.removeEventListener('mousemove', playMusic);
}