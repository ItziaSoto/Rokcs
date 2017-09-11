<?php 
    include_once("../sections/head.php");
    include("../sections/TrackInfo.php");

    $functionsEdit = "
        <a href='' title='' class='links-funciones' data-toggle='modal' data-target='#ModalTrack'>
            <i class='fa fa-pencil-square-o fa-lg'></i>
        </a>
    ";
    $functionTrash = "        
        <a href='' title='' class='links-funcionesTR' style='margin-left: 15px;'>
            <i class='fa fa-trash-o fa-lg'></i>
        </a>        
    ";
?>


    <div class="container-fluid">
        <div class="row">
            <nav class="col-sm-3 col-md-3 hidden-xs-down bg-faded sidebar" style="padding-top: 10px;">
                <?php include_once("../sections/sidebar.php") ?>
            </nav>

            <main class="col-sm-8 offset-sm-4 col-md-9 offset-md-3 pt-3">
                <div class="row justify-content-md-center">
                    <div class="col-md-6 d-flex align-items-center justify-content-start f-12" style="padding-left: 30px;">
                        <span class="title-table">Mac Mini Monitor <i class="fa fa-power-off fa-lg" style="color: #27a29a;"></i></span>
                    </div>
                    <div class="col-md-6 p-2 d-flex align-items-center justify-content-end">
                        <form class="form-inline mt-2 mt-md-0">
                            <button class="btn btn-outline-success btn-search my-sm-0" type="submit">
                                <i class="fa fa-search fa-2x"></i>
                            </button>
                            <input class="form-control mr-sm-2 input-search form-control-sm" type="text">
                        </form>
                    </div>
                </div><!-- Cierra row -->

                <div class="row justify-content-md-center">
                    <div class="col-md d-flex align-items-center justify-content-start f-12" style="padding-left: 30px;">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15100122.670064008!2d-100.01067873468926!3d22.48341149377585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x84043a3b88685353%3A0xed64b4be6b099811!2zTcOpeGljbw!5e0!3m2!1ses!2smx!4v1504035336544" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
                    </div>                    
                </div><!-- Cierra row -->
            </main>
        </div><!-- Cierra Row -->
    </div><!-- Termina container-fluid -->    
            
<?php include_once("../sections/footer.php"); ?>        