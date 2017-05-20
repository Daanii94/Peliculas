var imgUrl = "http://image.tmdb.org/t/p/w185//";

function creaListado(resp){
    
    var res = resp.results;
    for(i=0; i<= res.length ; i++){
        document.getElementById("listaPeliculas").innerHTML += "<div class='listItem'>" +
                "<div class='poster-container'> <img src='"+
                imgUrl + res[i].poster_path +
                "'/></div><div class='detail-container'><h1>" +
                res[i].original_title + "</h1><div class='contenido_p' onclick='mostrar("+ res[i].id +");'>Descripcion</div>"+
                "<p class='par_"+ res[i].id +"'>" + res[i].overview + "</p>"+    "</div></div>";
        
    }
}

function query(){
    
    $.ajax({
        type: "GET",
        url:"https://api.themoviedb.org/3/movie/550?api_key=mikey",
        dataType: "json",
        success: function(resp){
            creaListado(resp);
        },
        error: function(e){
            alert('Ha sucedido un error: ' + e);
        }
    });
    
    }

function mostrar(id_pelicula){
    $('.pop-up').show(100);
    document.getElementById("peliculas-populares").innerHTML += "<div><h1>" + id_pelicula + "</h1></div>";
   
}