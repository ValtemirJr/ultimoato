import { startTimer } from './timer.js';
import './fog-animation.js';

startTimer();

function playMusic() {
  const audio = new Audio('assets/music/Molossus.mp3');
  audio.loop = true;
  audio.play();
}

function confirmPlayMusic() {
  Swal.fire({
    title: 'Deseja reproduzir a música automaticamente?',
    text: 'Existe um arquivo de áudio que será tocado como música de fundo no site e precisamos de sua autorização para tocá-lo.',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Confirmar',
    cancelButtonText: 'Cancelar',
    customClass: {
      title: 'title',
      content: 'content',
      confirmButton: 'confirmButton',
      cancelButton: 'cancelButton',
    }
  }).then((result) => {
    if (result.isConfirmed) {
      playMusic();
    }
  });
}

confirmPlayMusic();
