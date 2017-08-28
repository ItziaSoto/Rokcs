<div class="modal fade" id="ModalTrack" tabindex="-1" role="dialog" aria-labelledby="ModalTrack" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header d-flex justify-content-center">
                <span class="modal-title" id="ModalTrackTitle">
                    Información del Track
                </span>
                <!-- <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button> -->
            </div>

            <div class="modal-body" style="color: #000;">
                <div class="container-fluid">
                    <form id="FormTrackInfo" method="POST">
                        <div class="form-group">
                            <label for="nombre">Nombre</label><br>
                            <input type="text" class="form-control pull-right" id="nombre" value="Don't Stop The Music">                            
                        </div>
                        <div class="form-group m-top">
                            <label for="artista">Artista</label><br>
                            <input type="text" class="form-control pull-right" id="artista" value="Rihanna">
                        </div>
                        <div class="form-group m-top">
                            <label for="album">Álbum</label><br>
                            <input type="text" class="form-control pull-right" id="album" value="Good Girl Gone Bad Reloaded">
                        </div>
                        <div class="form-group m-top text-right">
                            <button type="button" class="btn btn-actualiza btn-sm" form="FormTrackInfo">Actualizar</button>
                            <button type="button" class="btn btn-cancela btn-sm" data-dismiss="modal">Cancelar</button>
                        </div>                     
                    </form>
                </div>
            </div>
        </div>
     </div>
</div>