import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useAuth } from '../hooks/auth';

// function mouse() {

//   var tempoEspera = 30 * 1000;
//   var timeOut = setTimeout(inativo, tempoEspera);

//   function mouseActivity() {
//     clearInterval(timeOut);
//     timeOut = setInterval(inativo, tempoEspera);

//     console.log(`Houve atividade` );
//   }

//   function inativo() {
//     alert('Inativo há 30 segundos');

//   }

//   ['keyup', 'touchmove' in window ?
//   'touchmove' : 'mousemove', "onwheel" in document.createElement("div")
//    ? "wheel" : document.onwheel !== undefined ? "mousewheel" : "DOMMouseScroll"].forEach(function(ev) {
//     window.addEventListener(ev, mouseActivity);
//   });

// }

function TokenExpiration() {
  // const { verifyTokenExpiration, signOut } = useAuth();
  // const history = useHistory();
  // function messageLogOut() {
  //   Swal.fire('Atenção!', 'Você foi deslogado por inatividade.', 'info');
  // }
  // if (verifyTokenExpiration()) {
  //   signOut();
  //   messageLogOut();
  //   history.push('/');
  // }
}

export { TokenExpiration };
