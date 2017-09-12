var numberofitemsinlist=7;
var iteamsinlib=0;
var currentpage=1;
var is_in_library=1;
var playlist_id_g=0;
function Loaplaylist(name){
	is_in_library=0;
	$(".title-table").html(name);
	var start_iteam=(numberofitemsinlist*currentpage)-numberofitemsinlist;
	$.post("./REST/index.php?chache="+$.now(),{module:"Playlist", function:"ListSongsInPlaylist", playlist:playlist_id_g, ini:start_iteam, fin:numberofitemsinlist}, function(data) {
		 var lib=jQuery.parseJSON(data);
		iteamsinlib=parseInt(lib.count);
		var numberofpages=Math.ceil(iteamsinlib/numberofitemsinlist);
		var i=0;
		$(".pagination").html("");
		while(i<numberofpages){
			i=i+1;
			$(".pagination").append('<li class="page-item"><a class="page-link" href="#">'+i+'</a></li>');
		}
		$(".pagination li a").on("click", function(){
			currentpage=parseInt($(this).html());
			$(".pagination li a").unbind( "click" );
			Loaplaylist($(".title-table").html());
		});
		$(".table-sm tbody").html("");
		var output="";
		$.each(lib.songs, function(){
			output=output+' <tr><td class="text-center"><a href="#" data-file="'+this.archivo+'" class="playaudio"><i class="fa fa-play-circle fa-lg btn-play"></i></a></td>'+
                                '<td>'+this.id+'</td>'+
                                '<td class="sname">'+this.nombre+'</td>'+
                                '<td class="sartist">'+this.artista+'</td>'+
                                '<td class="salbum">'+this.album+'</td>'+
                               '<td>'+         
						        "<a href='#' title='Eliminar' class='links-funcionesTR' style='margin-left: 15px;' data-id='"+this.id+"'>"+
						            "<i class='fa fa-trash-o fa-lg'></i>"+
						        "</a></td></tr>";
		});
		$(".table-sm tbody").html(output);
		$(".playaudio").on("click", function(){
			$("#player").attr("src", "#");
			var song=$(this).attr("data-file");
			$("#player").attr("src", "./REST/data/"+song);
			var audioElement = document.getElementById("player");
			audioElement.play();
		});
		$(".links-funcionesTR").on("click", function(){
			var id_songs=$(this).attr("data-id");
			var r = confirm("¿Deseas eliminar esta canción del playlist?");
			if (r == true) {
				$.post("./REST/index.php?chache="+$.now(),{module:"Playlist", function:"DeleteSongFromPlaylist", id:id_songs}, function(data) {
				  $(".links-funcionesTR").unbind( "click" );
				  $(".links-funciones").unbind( "click" );
				  Loaplaylist($(".title-table").html());
				});
			}
		});
	});
}
function enter (ev,target) {
	var id = '#'+target.id;
	$(id).addClass('dropping');
}
function leave (ev,target) {
  var id = '#'+target.id;
  $(id).removeClass('dropping');
}
function allowDrop(ev,target) {
  ev.preventDefault();
}
function drop(ev, target) {
  ev.preventDefault();
  var idArray= [];
  var file = ev.dataTransfer.getData("text");
  var id = target.id;
  $('.sel').each(function(index, el) {
    idArray.push(this.getAttribute("data-file"));
  });
  if (idArray.length == 0) {

    idArray.push(file);
  }
  var song_id= parseInt(idArray.toString());
  var playlist_id= parseInt(id.replace("playlist", ""));
  $.post("./REST/index.php?chache="+$.now(),{module:"Playlist", function:"AddSongToPlaylist", playlist:playlist_id, song:song_id}, function(data) {
	idArray = [];
    $("#"+id).removeClass('dropping');
  });
  

}
function drag(ev) {
  if(is_in_library==1){
  	  var img = new Image();
	  img.src = "images/music_icn.png";

	  ev.dataTransfer.setData('text',ev.target.dataset.file);
	  ev.dataTransfer.setDragImage(img, 0, 0);
  }
}
function SearchinBiblioteca(param){
	$.post("./REST/index.php?chache="+$.now(),{module:"Music", function:"SearchInLibrary", term:param}, function(data) {
		var lib=jQuery.parseJSON(data);
		$(".table-sm tbody").html("");
		var output="";
		$(".pagination").html("");
		$.each(lib, function(){
			output=output+' <tr><td class="text-center"><a href="#" data-file="'+this.archivo+'" class="playaudio"><i class="fa fa-play-circle fa-lg btn-play"></i></a></td>'+
                                '<td>'+this.id+'</td>'+
                                '<td class="sname">'+this.nombre+'</td>'+
                                '<td class="sartist">'+this.artista+'</td>'+
                                '<td class="salbum">'+this.album+'</td>'+
                               '<td>'+   
							        "<a href='#' title='Editar Datos' class='links-funciones' data-toggle='modal' data-target='#ModalTrack' data-id='"+this.id+"'>"+
							            "<i class='fa fa-pencil-square-o fa-lg'></i>"+
							        "</a>"+       
						        "<a href='#' title='Eliminar MP3' class='links-funcionesTR' style='margin-left: 15px;' data-id='"+this.id+"'>"+
						            "<i class='fa fa-trash-o fa-lg'></i>"+
						        "</a></td></tr>";
		});
		$(".table-sm tbody").html(output);
		$(".playaudio").on("click", function(){
			$("#player").attr("src", "#");
			var song=$(this).attr("data-file");
			$("#player").attr("src", "./REST/data/"+song);
			var audioElement = document.getElementById("player");
			audioElement.play();
		});
		$(".links-funcionesTR").on("click", function(){
			var id_songs=$(this).attr("data-id");
			var r = confirm("¿Deseas eliminar esta canción de la biblioteca?");
			if (r == true) {
			   $.post("./REST/index.php?chache="+$.now(),{module:"Music", function:"DeleteMP3fromLibrary", id:id_songs, debug:true}, function(data) {
			   	  $(".links-funcionesTR").unbind( "click" );
				  $(".links-funciones").unbind( "click" );
				  loadBiblioteca();
				});
			}
		});
		$(".links-funciones").on("click", function(){
			var id_songs=$(this).attr("data-id");
			$("#FormTrackInfo #nombre").val($(this).closest("tr").find(".sname").html());
			$("#FormTrackInfo #artista").val($(this).closest("tr").find(".sartist").html());
			$("#FormTrackInfo #album").val($(this).closest("tr").find(".salbum").html());
			$(".btn-actualiza").on("click", function(){
				$.post("./REST/index.php?chache="+$.now(),{module:"Music", function:"EditMetaData", id:id_songs, nombre:$("#FormTrackInfo #nombre").val(), artista:$("#FormTrackInfo #artista").val(), album:$("#FormTrackInfo #album").val()}, function(data) {
				  $('#ModalTrack').modal('toggle');
				  $(".btn-actualiza").unbind( "click" );
				  $(".links-funciones").unbind( "click" );
				  $(".links-funcionesTR").unbind( "click" );
				  if(is_in_library==1){
				  		loadBiblioteca();
				  }
				});
			});
		});
	});
}
function loadBiblioteca(){
	is_in_library=1;
	var start_iteam=(numberofitemsinlist*currentpage)-numberofitemsinlist;
	$(".title-table").html("Biblioteca");
	$.post("./REST/index.php?chache="+$.now(),{module:"Music", function:"ListLibrary", ini:start_iteam, fin:numberofitemsinlist}, function(data) {
		var lib=jQuery.parseJSON(data);
		iteamsinlib=parseInt(lib.count);
		var numberofpages=Math.ceil(iteamsinlib/numberofitemsinlist);
		var i=0;
		$(".pagination").html("");
		while(i<numberofpages){
			i=i+1;
			$(".pagination").append('<li class="page-item"><a class="page-link" href="#">'+i+'</a></li>');
		}
		$(".pagination li a").on("click", function(){
			currentpage=parseInt($(this).html());
			$(".pagination li a").unbind( "click" );
			loadBiblioteca();
		});
		$(".table-sm tbody").html("");
		var output="";
		$.each(lib.songs, function(){
			output=output+' <tr draggable="true" ondragstart="drag(event, this)" data-file="'+this.id+'"><td class="text-center"><a href="#" data-file="'+this.archivo+'" class="playaudio"><i class="fa fa-play-circle fa-lg btn-play"></i></a></td>'+
                                '<td>'+this.id+'</td>'+
                                '<td class="sname">'+this.nombre+'</td>'+
                                '<td class="sartist">'+this.artista+'</td>'+
                                '<td class="salbum">'+this.album+'</td>'+
                               '<td>'+   
							        "<a href='#' title='Editar Datos' class='links-funciones' data-toggle='modal' data-target='#ModalTrack' data-id='"+this.id+"'>"+
							            "<i class='fa fa-pencil-square-o fa-lg'></i>"+
							        "</a>"+       
						        "<a href='#' title='Eliminar MP3' class='links-funcionesTR' style='margin-left: 15px;' data-id='"+this.id+"'>"+
						            "<i class='fa fa-trash-o fa-lg'></i>"+
						        "</a></td></tr>";
		});
		$(".table-sm tbody").html(output);
		$(".playaudio").on("click", function(){
			$("#player").attr("src", "#");
			var song=$(this).attr("data-file");
			$("#player").attr("src", "./REST/data/"+song);
			var audioElement = document.getElementById("player");
			audioElement.play();
		});
		$(".links-funcionesTR").on("click", function(){
			var id_songs=$(this).attr("data-id");
			var r = confirm("¿Deseas eliminar esta canción de la biblioteca?");
			if (r == true) {
			   $.post("./REST/index.php?chache="+$.now(),{module:"Music", function:"DeleteMP3fromLibrary", id:id_songs, debug:true}, function(data) {
			   	  $(".links-funcionesTR").unbind( "click" );
				  $(".links-funciones").unbind( "click" );
				  loadBiblioteca();
				});
			}
		});
		$(".links-funciones").on("click", function(){
			var id_songs=$(this).attr("data-id");
			$("#FormTrackInfo #nombre").val($(this).closest("tr").find(".sname").html());
			$("#FormTrackInfo #artista").val($(this).closest("tr").find(".sartist").html());
			$("#FormTrackInfo #album").val($(this).closest("tr").find(".salbum").html());
			$(".btn-actualiza").on("click", function(){
				$.post("./REST/index.php?chache="+$.now(),{module:"Music", function:"EditMetaData", id:id_songs, nombre:$("#FormTrackInfo #nombre").val(), artista:$("#FormTrackInfo #artista").val(), album:$("#FormTrackInfo #album").val()}, function(data) {
				  $('#ModalTrack').modal('toggle');
				  $(".btn-actualiza").unbind( "click" );
				  $(".links-funciones").unbind( "click" );
				  $(".links-funcionesTR").unbind( "click" );
				  if(is_in_library==1){
				  		loadBiblioteca();
				  }
				});
			});
		});
	});
}
function setPlaylistIMG(kind){
	var text="";
	switch(kind){
	    case 1:
	        text = "images/icon_mañana.png";
	        break;
	    case 2:
	        text = "images/icon_tarde.png";
	        break;
	    case 3:
	        text = "images/icon_noche.png";
	        break;
	    case 4:
	        text = "images/icon_vip.png";
	        break;
	    default:
	        text = "images/icon_vip.png";
	}
	return text;

}
function SetPlaylists(i, seccion){
	$.post("./REST/index.php?chache="+$.now(),{module:"Playlist", function:"ListPlaylistinSection", seccion:seccion}, function(data) {
		var output="";
		output = output+'<div class="col-md-6 p-2 d-flex align-items-center img-tabs">';
		var playlist=jQuery.parseJSON(data);
		$.each(playlist, function(){
			 if(typeof output !== "undefined"){
			 	output = output+'<a href="#" title="'+this.name+'" class="plc"><img src="'+setPlaylistIMG(this.kind)+'" class="img-fluid img-50" ondrop="drop(event,this)" ondragover="allowDrop(event,this)" ondragenter="enter(event,this)" ondragleave="leave(event,this)" title="'+this.name+'" id="playlist'+this.id+'"></a>';
			 }
		});
		output = output+'<a href="#" data-id="'+seccion+'" class="delsec"><img src="images/icon_trash.png" class="img-fluid img-50" alt="" title="Eliminar"></a>';
		output = output+'</div>';
		$(".card").eq(i).find(".card-body .pl"+seccion).append(output);
	});
		
}
function SetSections(id, i){
	$.post("./REST/index.php?chache="+$.now(),{module:"Playlist", function:"ListSetionsInBlock", bloque:id}, function(data) {
			  var seccion=jQuery.parseJSON(data);
			  var output='<div id="coll'+id+'" class="collapse" role="tabpanel" aria-labelledby="head'+i+'" data-parent="#accordion">';
			  $.each(seccion, function(){
			  		output = output+'<div class="card-body">'+
            								'<div class="container daily-tabs">'+
							                    '<div class="row justify-content-md-center pl'+this.id+'">'+
							                        '<div class="col-md-6 d-flex align-items-center justify-content-start f-12" style="padding-left: 30px;">'+
							                            this.nombre+
							                        '</div>'+
							                    '</div>'+
							              
            							'</div>';
            							SetPlaylists(i, this.id);
			  });
			  	output=output+"</div>";
				$(".card").eq(i).append(output);
				$('#coll'+id).append('<div class="card-body">'+
            								'<div class="container daily-tabs">'+'<div class="row justify-content-md-center" id="botones_agrega_elimina">'+
							                        '<div class="col-md-6 p-2 d-flex align-items-center justify-content-center f-12">'+
													   '<a href="#" style="color: #fff; text-decoration: none;">'+
													        '<i class="fa fa-plus"></i>&nbsp;&nbsp;Agregar Sección'+
													    '</a>'+
													'</div>'+
							                '</div></div></div>');	
			});
}
function SetimageAcordion(string){
	var text="";
	switch(string){
	    case " Biblioteca ":
	        text = "images/generos.png";
	        break;
	    case "Géneros | Daily":
	        text = "images/generos.png";
	        break;
	    case "Select | VIP":
	        text = "images/icon_vip.png";
	        break;
	    case "Estacionamiento | Parking":
	        text = "images/icon_estacionamiento.png";
	        break;
	    case "Temporalidad":
	        text = "images/icon_temporalidad.png";
	        break;
	    case "Spots":
	        text = "images/icon_spots.png";
	        break;
	    default:
	        text = "images/generos.png";
	}
	return text;
}
function setLoginPage(){
	$("#login_form").submit(function(e){
		$.post("./REST/index.php?chache="+$.now(),{module:"Users", function:"LogIN", user:$("#user").val(), password:$("#password").val()}, function(data) {
		  var status=jQuery.parseJSON(data);
		  if(status[0]['Status']!="Error"){
		  	window.location.href = "main.html";
		  }else{
		  	alert(status[0]['Message']);
		  }
		});
	    return false;
	});
}
function setMainPage(){
	loadBiblioteca();
	$(".logout").on("click", function(){
		$.post("./REST/index.php?chache="+$.now(),{module:"Users", function:"LogOut"}, function(data) {
		  window.location.href = "index.html";
		});
	});
	$(".Normalize").on("click", function(){
		$.post("./REST/index.php?chache="+$.now(),{module:"Music", function:"NormalizeLibrary"}, function(data) {
		  $("#filler").html( data );
		});
	});
	$(".backupdb").on("click", function(){
		$.post("./REST/index.php?chache="+$.now(),{module:"Music", function:"DumpMusicDB"}, function(data) {
		  window.open("./REST/data/backupdb.sql");
		});
	});
	$(".bb").on("click", function(){
		currentpage=1;
		loadBiblioteca();
	});
	$('body').on('click', '.delsec', function() {
		var playlist_id=$(this).attr("data-id");
		var r = confirm("¿Deseas eliminar esta sección del sistema?");
		var ele =$(this);
		if (r == true) {
		   $.post("./REST/index.php?chache="+$.now(),{module:"Playlist", function:"DeleteSection", id:playlist_id}, function(data) {
			  ele.closest(".card-body").remove();
		   });
		}
	});
	$("body").on("click", ".macmonitor", function(){
		alert("No hay equipos registrados en el sistema");
	});
	$("body").on("click", ".plc", function(){
		var id=$(this).find("img").attr("id");
		playlist_id_g=parseInt(id.replace("playlist", ""));
		currentpage=1;
		var name =$(this).closest(".row").find(".f-12").html()+" | "+$(this).attr("title");
		Loaplaylist(name);
	});
	$(".input-search").keyup(function(){
		var param =$(this).val();
		if(is_in_library==1){
			if(param.length>0){
				SearchinBiblioteca($(this).val());
			}else{
				currentpage=1;
				loadBiblioteca();
			}
		}else{

		}
	});
	var myDropzone = new Dropzone(".pad0", { 
			url: "./REST/index.php",
			acceptedFiles: ".mp3, .MP3",
			paramName:"file",
			dictDefaultMessage: 'Drop photos or click here to upload',
			params: {
				function: "MP3Upload",
				debug:true
			}
		});
	
		 myDropzone.on("complete", function(file) {
		 	var song_data = jQuery.parseJSON(file.xhr.response);
		 	var song_id=song_data[0].id;
		    if(is_in_library==1){
				loadBiblioteca();
			}else{

			}
		 });

	$.post("./REST/index.php?chache="+$.now(),{module:"Playlist", function:"ListBlock", debug:true}, function(data) {
		var bloques=jQuery.parseJSON(data);
		var i=0;
		$.each(bloques, function(){
			var id= this.id;
			i=i+1;
			$("#accordion").append('<div class="card">'+
						'<div class="list-group">'+
				            '<a class="list-group-item" data-toggle="collapse" href="#coll'+id+'" aria-expanded="false" aria-controls="coll'+id+'" id="head'+i+'">'+
				                '<div class="container">'+
				                    '<div class="row justify-content-md-center">'+
				                        '<div class="col col-lg-2 p-2 d-flex align-items-center">'+
				                            '<img src="'+SetimageAcordion(this.name)+'" alt="" class="img-fluid d-flex img-60">'+
				                        '</div>'+
				                        '<div class="col-md-8 p-2 d-flex align-items-center">'+
				                            this.name+
				                        '</div>'+
				                        '<div class="col col-lg-2 p-2 d-flex align-items-center">'+
				                            '<i class="fa fa-angle-down fa-2x"></i>'+
				                        '</div>'+
				                    '</div>'+
				                '</div>'+
				        '</a>'+
				    '</div>');
			SetSections(id, i);
		});
		$("#accordion").append('<div class="card macmonitor">'+
						'<div class="list-group">'+
				            '<a class="list-group-item" data-toggle="collapse" href="#coll999" aria-expanded="false" aria-controls="coll999" id="head'+i+'">'+
				                '<div class="container">'+
				                    '<div class="row justify-content-md-center">'+
				                        '<div class="col col-lg-2 p-2 d-flex align-items-center">'+
				                            '<img src="images/icon_mac.png" alt="" class="img-fluid d-flex img-60">'+
				                        '</div>'+
				                        '<div class="col-md-8 p-2 d-flex align-items-center">MAC MINI MONITOR</div>'+
				                    '</div>'+
				                '</div>'+
				        '</a>'+
				    '</div>');
		$("#accordion").collapse("hide");
	});
	



}

$(document).ready(function() {
    if($(".full-log").length){
    	setLoginPage();
    }else{
    	setMainPage();
    }
});