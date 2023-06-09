class Catalogo {
    constructor() {
        this.url = `https://api.themoviedb.org/3/movie/popular?api_key=b862b1dcfd4589e8eda82f67d8e9162e&language=es-MX&page=`;
        this.pagina = 1;
        this.botonId = [];
    }


    mostrarPeliculas() {
        const cargarPeliculas = async () => {
            try {
                const respuesta = await fetch(this.url + this.pagina);
                if (respuesta.status === 200) {
                    const datos = await respuesta.json();
                    console.log(datos.results)

                    let peliculas = "";
                    datos.results.forEach(pelicula => {
                        peliculas += `
                            <div class="pelicula">
                                <img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
                                <h3 class="titulo">${pelicula.title}</h3>
                                <button class="ver-mas" data-id="${pelicula.id}">Ver más</button>
                            </div>
                        `;
                    });

                    document.querySelector("#contenedor").innerHTML = peliculas;
                    this.botonId = document.querySelectorAll(".ver-mas");
                    console.log(this.botonId)

                   
                    this.MostrarInformacion();
                    

                } else if (respuesta.status === 401) {
                    console.log("Pusiste mal la llave");
                } else if (respuesta.status === 404) {
                    console.log("La película que buscas no se ha podido encontrar");
                } else {
                    console.log("Ocurrio un error y no sabemos que podria ser")
                }

            } catch (error) {
                console.log(error);
            }
        };

        cargarPeliculas();
    }



    PublicarPeliculas() {
        const btnAnterior = document.getElementById('btnAnterior');
        const btnSiguiente = document.getElementById('btnSiguiente');

        if (this.pagina===1) {
            this.mostrarPeliculas();
        }


        btnSiguiente.addEventListener('click', () => {
            

            if (this.pagina < 1000) {
                this.pagina += 1;
                this.mostrarPeliculas();
                console.log(`El numero de pagina avanzada es: ${this.pagina}`)
            }
        });

        btnAnterior.addEventListener('click', () => {
            if (this.pagina > 1) {
                this.pagina -= 1;
                this.mostrarPeliculas();
                console.log(`El numero de pagina retrocedida es: ${this.pagina}`)
            }
        });


     
    }


    MostrarInformacion() {
        const btnAnterior = document.getElementById('btnAnterior');

        this.botonId.forEach(boton => boton.addEventListener("click", async (event) => {
            const botonId = event.currentTarget.dataset.id;
            console.log(botonId)
            document.querySelector("#contenedor").innerHTML = "";
            
            const verPelicula = async () => {
                try {
                    const respuesta = await fetch(this.url+this.pagina);
                    console.log(respuesta)
                    if (respuesta.status === 200) {
                        const datos = await respuesta.json();
                        console.log(datos)
                        const ids = datos.results.map(pelicula => pelicula.id);
                        if (ids.includes(Number(botonId))) {
                            const peliculas = datos.results.filter(pelicula => pelicula.id === Number(botonId));
                            let peliculasHTML = "";
                            peliculas.forEach(pelicula => {
                                peliculasHTML += `
                                        <div class="informacion">

                                            <div class="caja1">
                                                <img class="poster-new" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
                                            </div>

                                            <div class="caja2">
                                                <h3 class="titulo-new"> ${pelicula.title}</h3>
                                                <p class="texto">Descripcion: ${pelicula.overview}</p>
                                                <p>Fecha de lanzamiento: ${pelicula.release_date}</p>
                                                <p>Valoracion: ${pelicula.vote_average}</p>
                                                <p>Popularidad: ${pelicula.popularity}</p>
                                            </div>
                                            
                                        </div>
                                        
                                `;
                            });
                            
                            document.querySelector("#contenedor").innerHTML = peliculasHTML;

                            btnAnterior.addEventListener('click', () => {
                                console.log(`Se sale de funcion mostrar`)
                                console.log(`Metodo: MostraInformacion === El numero de pagina es: ${this.pagina}`)
                                this.mostrarPeliculas();

                            });
                        }
                    } else if (respuesta.status === 401) {
                        console.log("Pusiste mal la llave");
                    } else if (respuesta.status === 404) {
                        console.log("La película que buscas no se ha podido encontrar");
                    } else {
                        console.log("Ocurrio un error y no sabemos que podria ser")
                    }

                } catch (error) {
                    console.log(error);
                }

            }

            verPelicula();

        }));

        

        

    }
}

const catalogo = new Catalogo();
catalogo.PublicarPeliculas();
