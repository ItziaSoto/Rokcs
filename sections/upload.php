
<div class="modal fade" id="ModalUpload" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header d-flex justify-content-start" style="padding-bottom: 0 !important;">
                <span class="UploadModalTitle">
                    Subir Archivos
                </span>
                <!-- <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button> -->
            </div>
            
            <div class="modal-body">
                <div class="container pad0">
                    <span class="txt-drag">Arrastra tu archivo aqui</span>
                    <canvas id="CanvasUpload">
                    
                    </canvas>
                </div>

                <div class="text-right"><br>
                    <button type="button" class="btn btn-sm btn-cancela2" data-dismiss="modal">Cerrar</button>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="modal fade" id="ModalAgrega" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header d-flex justify-content-start" style="padding-bottom: 0 !important;">
                <span class="UploadModalTitle">
                    Agregar Lista
                </span>
                <!-- <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button> -->
            </div>
            
            <div class="modal-body" style="color: #000;">
                <div class="container pad0">
                    <div class="form">
                        <form action="" method="POST" accept-charset="utf-8">
                            <div class="row">
                                <div class="col">
                                    <label>Lista: </label>
                                    <input type="text" name="" value="" class="form-control form-control-sm">
                                </div>
                                <div class="col">
                                    <label>Categoría: </label>
                                    <input type="text" name="" value="" class="form-control form-control-sm">
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <div class="text-right"><br>
                    <button type="button" class="btn btn-sm btn-cancela2" data-dismiss="modal">Cerrar</button>
                </div>
            </div>
        </div>
    </div>
</div>

