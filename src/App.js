import logo from './logo.svg';
import './App.css';
import Pelicula from './Pelicula';
import Wrapper from './Wrapper';

import peliculasJson from './peliculas.json';
import { useEffect, useState } from 'react';

function App() {
  const urlPeliculas = 'https://lucasmoy.dev/data/react/peliculas.json' //Url para traer ej JSON de la peliculas.
  const [peliculas,setPeliculas] = useState();

  const fetchApi = async () =>{
  const response = await fetch(urlPeliculas) 
                          .then((response) => response.json());
                        setPeliculas(response) //Setteo el valor dentro de las variables 
                       // console.log(response)
  }

  useEffect(()=>{
    fetchApi()
  },[])
  return (
    <Wrapper>
      {
        !peliculas ? "Peliculas nom econtradas. JSON Vacio." :
            peliculas.map(pelicula =>
                <Pelicula
                    titulo={pelicula.titulo} 
                    calificacion={pelicula.calificacion}
                    descripcion={pelicula.descripcion}
                    duracion={pelicula.duracion}
                    director={pelicula.director}
                    fecha={pelicula.fecha}
                    actores={pelicula.actores}
                    img={pelicula.img}
                />
            )
      }
    </Wrapper>
  );
}

export default App;
