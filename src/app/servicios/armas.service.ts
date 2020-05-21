import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArmasService {

  private armas:Arma[] = [
    {
      id: 0,
      nombre: "Glock 18",
      desc: "Una pistola bastante normalita, básica en el caso de los terroristas. Es bastante precisa, pero la ausencia de potencia de fuego no la hace demasiado práctica.",
      img: "glock18.png",
      precio: "$300",
      cargador: "20",
      potencia: "1",
      especial: "disparo en ráfagas x3",
      tipo: "pistola"
    },
    {
      id: 1,
      nombre: "P250",
      desc: "Una mala bestia. Para ser una pistola es muy potente, aunque cuenta con un retroceso bastante acusado. Si tienes la ocasión de hacer un primer disparo a un enemigo desprevenido, es capaz de matarlo al momento. No es recomendable para fuego sostenido.",
      img: "p250.png",
      precio: "$500",
      cargador: "13",
      potencia: "7",
      especial: "No",
      tipo: "pistola"
    },
    {
      id: 2,
      nombre: "Five-SeveN (FN)",
      desc: "Pese a su escasa potencia de fuego es una de las armas más populares del juego. Su extremadamente alta movilidad permite ataques relámpago, pero no es apta para novatos.",
      img: "five-seven.png",
      precio: "$650",
      cargador: "20",
      potencia: "2",
      especial: "No",
      tipo: "pistola"
    },
    {
      id: 3,
      nombre: "Desert Eagle",
      desc: "Una pistola que no necesita presentación. Dos en el pecho, muerto, una en la cabeza, muerto. El arma de los profesionales, pero debes tener en cuenta que reduce muchísimo tu velocidad de movimiento, dispara bastante despacio y se tarda un poco en recargar.",
      img: "desert-eagle.png",
      precio: "$800",
      cargador: "7",
      potencia: "16 (máxima)",
      especial: "No",
      tipo: "pistola"
    },
    {
      id: 4,
      nombre: "MP5-SD",
      desc: "Añadida en agosto de 2018, la MP5 es un arma conocida por todos los jugadores de Counter-Strike. La versión que se ha puesto a disposición de los jugadores es un arma con silenciador, es decir, la variante SD.",
      img: "mp5.png",
      precio: "$1500",
      cargador: "30",
      potencia: "2",
      especial: "No",
      tipo: "metralletas"
    },
    {
      id: 5,
      nombre: "UMP-45",
      desc: "Se suele considerar la 'hermana mayor' de la MP7. Ligeramente más cara que la anterior, también cuenta con el mismo bonus de recompensa y una fiabilidad aún mayor.",
      img: "ump45.png",
      precio: "$1500",
      cargador: "25",
      potencia: "2",
      especial: "No",
      tipo: "metralletas"
    },
    {
      id: 6,
      nombre: "MP9 (sólo Antiterroristas)",
      desc: "Barata... y poco más. Demasiado retroceso para ser útil en comparación con otras, ahorra un poco para no tener que conformarte con ella.",
      img: "mp9.png",
      precio: "$1250",
      cargador: "30",
      potencia: "1",
      especial: "No",
      tipo: "metralletas"
    },
    {
      id: 7,
      nombre: "MAC-10 (sólo Terroristas)",
      desc: "La única ventaja que tiene sobre el resto es que es la más barata. Ahorra un poco más para conseguir otra porque su retroceso no la hace muy práctica.",
      img: "mac-10.png",
      precio: "$1200",
      cargador: "30",
      potencia: "1",
      especial: "No",
      tipo: "metralletas"
    },
    {
      id: 8,
      nombre: "AK-47 (sólo Terroristas) - Fusil de asalto",
      desc: "El arma más popular del mundo. Aunque se supone que una de sus ventajas (en el mundo real) es que es barata, aquí es de los fusiles relativamente caros. No obstante, sus prestaciones son muy altas. Puedes usarla como arma estándar sin ningún problema de forma efectiva. No obstante, procura no disparar más de dos o tres tiros por ráfaga para evitar que pierdas el control.",
      img: "ak-47.png",
      precio: "$2700",
      cargador: "30",
      potencia: "4",
      especial: "No",
      tipo: "rifles"
    },
    {
      id: 9,
      nombre: "M4A4 (sólo Antiterroristas) - Fusil de asalto",
      desc: "Fiable y efectiva, podríamos considerarlo el arma estéticamente estándar del equipo antiterrorista, aunque es algo cara. No ofrece malas prestaciones en comparación a su precio, es fácil de manejar y cuenta con suficiente potencia para neutralizar amenazas rápidamente.",
      img: "m4a4.png",
      precio: "$3100",
      cargador: "30",
      potencia: "3",
      especial: "No",
      tipo: "rifles"
    },
    {
      id: 10,
      nombre: "SSG 08 - Fusil de francotirador",
      desc: "Un fusil de cerrojo normal. Obviamente, puede hacer justo lo que quieres con un arma así: zoom en la cabeza, disparar y matar al instante.",
      img: "ssg.png",
      precio: "$2500",
      cargador: "10",
      potencia: "10",
      especial: "Zoom x2",
      tipo: "rifles"
    },
    {
      id: 11,
      nombre: "AWP - Fusil de francotirador",
      desc: "Si hay un jugador en la partida que sepa usar este arma, posiblemente sea el jugador más letal. 'La arctic' es un fusil de cerrojo que quitará a los jugadores de en medio como si fueran patos de feria, pero es complicado aprender a usarla bien. Es mejor agacharse para utilizarla con algo más de precisión, porque es de movimiento muy lento.",
      img: "awp.png",
      precio: "$4750",
      cargador: "10",
      potencia: "16 (máxima)",
      especial: "Zoom x2",
      tipo: "rifles"
    }
  ];

  constructor() {
    console.log("Servicio armas listo");
  }

  getArmas():Arma[]{
    return this.armas;
  }

  getArma( idx: number ){
    return this.armas[idx];
  }

}

// Creo una interface para poder usar Arrays de Armas y no tipo Any
export interface Arma{
  id: number;
  nombre:string;
  desc:string;
  img:string;
  precio:string;
  cargador: string;
  potencia: string;
  especial: string;
  tipo: string;
}
