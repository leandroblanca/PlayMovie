const peliculas = [
{ id:1, titulo:"John Wick", poster:"https://image.tmdb.org/t/p/w500/b9uYMMbm87IBFOq59pppvkkkgNg.jpg", video:"https://www.youtube.com/embed/2AUmvWm5ZDQ", categorias:"accion", anio:2014, descripcion:"Un exasesino a sueldo vuelve al mundo criminal para vengarse de quienes destruyeron lo unico que le quedaba." },

{ id:2, titulo:"Mad Max Fury Road", poster:"https://image.tmdb.org/t/p/w500/hA2ple9q4qnwxp3hKVNhroipsir.jpg", video:"https://www.youtube.com/embed/hEJnMQG9ev8", categorias:"accion", anio:2015, descripcion:"En un mundo postapocaliptico Max ayuda a Furiosa a escapar de un tirano atravesando un desierto lleno de peligros." },

{ id:3, titulo:"The Dark Knight", poster:"https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg", video:"https://www.youtube.com/embed/EXeTwQWrcwY", categorias:"accion", anio:2008, descripcion:"Batman enfrenta al Joker un criminal que busca sumir a Gotham en el caos absoluto." },

{ id:4, titulo:"Deadpool", poster:"https://image.tmdb.org/t/p/w500/3E53WEZJqP6aM84D8CckXx4pIHw.jpg", video:"https://www.youtube.com/embed/Xithigfg7dA", categorias:"comedia", anio:2016, descripcion:"Un mercenario obtiene poderes regenerativos y busca venganza con un humor muy particular." },

{ id:5, titulo:"The Mask", poster:"https://m.media-amazon.com/images/M/MV5BNGNmNjI0ZmMtMzI5MC00ZjUyLWFlZDEtYjUyMGZlN2E3N2E2XkEyXkFqcGc@._V1_.jpg", video:"https://www.youtube.com/embed/LZl69yk5lEY", categorias:"comedia", anio:1994, descripcion:"Un hombre timido encuentra una mascara magica que libera su lado mas divertido y descontrolado." },

{ id:6, titulo:"Superbad", poster:"https://image.tmdb.org/t/p/w500/ek8e8txUyUwd2BNqj6lFEerJfbq.jpg", video:"https://www.youtube.com/embed/4eaZ_48ZYog", categorias:"comedia", anio:2007, descripcion:"Dos amigos adolescentes intentan disfrutar una ultima gran fiesta antes de terminar la secundaria." },

{ id:7, titulo:"Interstellar", poster:"https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg", video:"https://www.youtube.com/embed/zSWdZVtXT7E", categorias:"ciencia ficcion", anio:2014, descripcion:"Un grupo de astronautas viaja por un agujero de gusano buscando un nuevo hogar para la humanidad." },

{ id:8, titulo:"Inception", poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrWe31C3zClpv_3_Vw5pqsykSETbBJ2FGKmQ&s", video:"https://www.youtube.com/embed/YoHD9XEInc0", categorias:"ciencia ficcion", anio:2010, descripcion:"Un ladron especializado en infiltrarse en los sueños debe implantar una idea en la mente de alguien." },

{ id:9, titulo:"The Matrix", poster:"https://image.tmdb.org/t/p/w500/aOIuZAjPaRIE6CMzbazvcHuHXDc.jpg", video:"https://www.youtube.com/embed/vKQi3bBA1y8", categorias:"ciencia ficcion", anio:1999, descripcion:"Un hacker descubre que la realidad es una simulacion creada por maquinas." },

{ id:10, titulo:"Blade Runner 2049", poster:"https://image.tmdb.org/t/p/w500/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg", video:"https://www.youtube.com/embed/gCcx85zbxz4", categorias:"ciencia ficcion", anio:2017, descripcion:"Un blade runner descubre un secreto que podria cambiar el destino de humanos y replicantes." },

{ id:11, titulo:"The Shawshank Redemption", poster:"https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg", video:"https://www.youtube.com/embed/6hB3S9bIaco", categorias:"drama", anio:1994, descripcion:"Un hombre condenado injustamente encuentra esperanza y amistad en una prision." },

{ id:12, titulo:"Forrest Gump", poster:"https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg", video:"https://www.youtube.com/embed/bLvqoHBptjg", categorias:"drama", anio:1994, descripcion:"La historia de un hombre simple que presencia grandes eventos de la historia de Estados Unidos." },

{ id:13, titulo:"Joker", poster:"https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg", video:"https://www.youtube.com/embed/zAGVQLHvwOY", categorias:"drama", anio:2019, descripcion:"La historia del origen del famoso villano de Gotham y su descenso hacia la locura." },

{ id:14, titulo:"Oppenheimer", poster:"https://m.media-amazon.com/images/M/MV5BNTFlZDI1YWQtMTVjNy00YWU1LTg2YjktMTlhYmRiYzQ3NTVhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", video:"https://www.youtube.com/embed/uYPbbksJxIg", categorias:"drama", anio:2023, descripcion:"La vida del cientifico que lidero el proyecto para crear la bomba atomica." },

{ id:15, titulo:"The Conjuring", poster:"https://image.tmdb.org/t/p/w500/wVYREutTvI2tmxr6ujrHT704wGF.jpg", video:"https://www.youtube.com/embed/k10ETZ41q5o", categorias:"terror", anio:2013, descripcion:"Investigadores paranormales ayudan a una familia aterrorizada por una presencia maligna." },

{ id:16, titulo:"It", poster:"https://image.tmdb.org/t/p/w500/9E2y5Q7WlCVNEhP5GiVTjhEhx1o.jpg", video:"https://www.youtube.com/embed/xKJmEC5ieOk", categorias:"terror", anio:2017, descripcion:"Un grupo de niños enfrenta a una entidad maligna que toma la forma de un payaso." },

{ id:17, titulo:"The Nun", poster:"https://image.tmdb.org/t/p/w500/sFC1ElvoKGdHJIWRpNB3xWJ9lJA.jpg", video:"https://www.youtube.com/embed/pzD9zGcUNrw", categorias:"terror", anio:2018, descripcion:"Un sacerdote investiga la misteriosa muerte de una monja en un convento embrujado." },

{ id:18, titulo:"Insidious", poster:"https://www.sonypictures.es/statics/Key_Art_Insidious_e75ea15f09.png", video:"https://www.youtube.com/embed/zuZnRUcoWos", categorias:"terror", anio:2010, descripcion:"Una familia intenta salvar a su hijo que ha quedado atrapado en un mundo paranormal." },

{ id:19, titulo:"Toy Story", poster:"https://image.tmdb.org/t/p/w500/uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg", video:"https://www.youtube.com/embed/KYz2wyBy3kc", categorias:"animacion", anio:1995, descripcion:"Los juguetes de un niño cobran vida cuando el no esta y viven grandes aventuras." },

{ id:20, titulo:"Frozen", poster:"https://image.tmdb.org/t/p/w500/mbPrrbt8bSLcHSBCHnRclPlMZPl.jpg", video:"https://www.youtube.com/embed/TbQm5doF_Uc", categorias:"animacion", anio:2013, descripcion:"Una princesa con poderes de hielo intenta controlar sus habilidades y salvar su reino." },

{ id:21, titulo:"Shrek", poster:"https://image.tmdb.org/t/p/w500/iB64vpL3dIObOtMZgX3RqdVdQDc.jpg", video:"https://www.youtube.com/embed/W37DlG1i61s", categorias:"animacion", anio:2001, descripcion:"Un ogro gruñon emprende una aventura para rescatar a una princesa y recuperar su pantano." },

{ id:22, titulo:"The Lion King", poster:"https://image.tmdb.org/t/p/w500/2bXbqYdUdNVa8VIWXVfclP2ICtT.jpg", video:"https://www.youtube.com/embed/4sj1MT05lAA", categorias:"animacion", anio:1994, descripcion:"Un joven leon debe aceptar su destino como rey despues de la muerte de su padre." },

{ id:23, titulo:"Se7en", poster:"https://image.tmdb.org/t/p/w500/69Sns8WoET6CfaYlIkHbla4l7nC.jpg", video:"https://www.youtube.com/embed/znmZoVkCjpI", categorias:"thriller", anio:1995, descripcion:"Dos detectives investigan una serie de asesinatos inspirados en los siete pecados capitales." },

{ id:24, titulo:"Gone Girl", poster:"https://i.pinimg.com/564x/07/26/ba/0726ba618e509ecb7b0f494d483441c6.jpg", video:"https://www.youtube.com/embed/2-_-1nJf8Vg", categorias:"thriller", anio:2014, descripcion:"La desaparicion de una mujer convierte a su esposo en el principal sospechoso." },

{ id:25, titulo:"Prisoners", poster:"https://image.tmdb.org/t/p/w500/uhviyknTT5cEQXbn6vWIqfM4vGm.jpg", video:"https://www.youtube.com/embed/bpXfcTF6iVk", categorias:"thriller", anio:2013, descripcion:"Un padre desesperado busca justicia cuando su hija desaparece." },

{ id:26, titulo:"Shutter Island", poster:"https://image.tmdb.org/t/p/w500/kve20tXwUZpu4GUX8l6X7Z4jmL6.jpg", video:"https://www.youtube.com/embed/5iaYLCiq5RM", categorias:"thriller", anio:2010, descripcion:"Un detective investiga la desaparicion de una paciente en un hospital psiquiatrico." },

{ id:27, titulo:"The Hangover", poster:"https://image.tmdb.org/t/p/w500/uluhlXubGu1VxU63X9VHCLWDAYP.jpg", video:"https://www.youtube.com/embed/tcdUhdOlz9M", categorias:"comedia", anio:2009, descripcion:"Tres amigos despiertan despues de una despedida de soltero sin recordar lo ocurrido." },

{ id:28, titulo:"Step Brothers", poster:"https://es.web.img2.acsta.net/medias/nmedia/18/67/38/88/20326835.jpg", video:"https://www.youtube.com/embed/CewglxElBK0", categorias:"comedia", anio:2008, descripcion:"Dos hombres inmaduros se convierten en hermanastros y compiten por todo." },

{ id:29, titulo:"Gladiator", poster:"https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg", video:"https://www.youtube.com/embed/owK1qxDselE", categorias:"accion", anio:2000, descripcion:"Un general romano traicionado busca venganza convirtiendose en gladiador." },

{ id:30, titulo:"Mission Impossible Fallout", poster:"https://image.tmdb.org/t/p/w500/AkJQpZp9WoNdj7pLYSj1L0RcMMN.jpg", video:"https://www.youtube.com/embed/wb49-oV0F78", categorias:"accion", anio:2018, descripcion:"Ethan Hunt debe detener una amenaza global despues de que una mision sale mal." }
];

export default peliculas;