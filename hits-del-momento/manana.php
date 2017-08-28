<?php 
    include_once("../sections/head.php");

    $functions = "
        <a href='' title='' class='links-funciones'>
            <i class='fa fa-pencil-square-o fa-lg'></i>
        </a>
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
                        <span class="title-table">HITS DEL MOMENTO | MAÑANA</span>
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

                <br><br>
                <div class="table-responsive">
                    <table class="table table-striped table-hover table-sm">
                        <thead>
                            <tr>
                                <th></th>
                                <th>#</th>
                                <th>TRACK</th>
                                <th>ARTIST</th>
                                <th>ALBUM</th>
                                <th>Functions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="text-center">
                                    <i class="fa fa-play-circle fa-lg btn-play"></i>
                                </td>
                                <td>Lorem</td>
                                <td>ipsum</td>
                                <td>dolor</td>
                                <td>sit</td>
                                <td>
                                    <?php echo $functions; ?>
                                </td>
                            </tr>
                            <tr>
                                <td class="text-center">
                                    <i class="fa fa-play-circle fa-lg btn-play"></i>
                                </td>
                                <td>amet</td>
                                <td>consectetur</td>
                                <td>adipiscing</td>
                                <td>elit</td>
                                <td>
                                    <?php echo $functions; ?>
                                </td>
                            </tr>
                            <tr>
                                <td class="text-center">
                                    <i class="fa fa-play-circle fa-lg btn-play"></i>
                                </td>
                                <td>Integer</td>
                                <td>nec</td>
                                <td>odio</td>
                                <td>Praesent</td>
                                <td>
                                    <?php echo $functions; ?>
                                </td>
                            </tr>
                            <tr>
                                <td class="text-center">
                                    <i class="fa fa-play-circle fa-lg btn-play"></i>
                                </td>
                                <td>libero</td>
                                <td>Sed</td>
                                <td>cursus</td>
                                <td>ante</td>
                                <td>
                                    <?php echo $functions; ?>
                                </td>
                            </tr>
                            <tr>
                                <td class="text-center">
                                    <i class="fa fa-play-circle fa-lg btn-play"></i>
                                </td>
                                <td>dapibus</td>
                                <td>diam</td>
                                <td>Sed</td>
                                <td>nisi</td>
                                <td>
                                    <?php echo $functions; ?>
                                </td>
                            </tr>
                            <tr>
                                <td class="text-center">
                                    <i class="fa fa-play-circle fa-lg btn-play"></i>
                                </td>
                                <td>dapibus</td>
                                <td>diam</td>
                                <td>Sed</td>
                                <td>nisi</td>
                                <td>
                                    <?php echo $functions; ?>
                                </td>
                            </tr>
                            <tr>
                                <td class="text-center">
                                    <i class="fa fa-play-circle fa-lg btn-play"></i>
                                </td>
                                <td>dapibus</td>
                                <td>diam</td>
                                <td>Sed</td>
                                <td>nisi</td>
                                <td>
                                    <?php echo $functions; ?>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div><!-- Cierra Table-responsive -->

                <nav aria-label="Page navigation example">
                    <ul class="pagination">                        
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>                        
                        <li class="page-item"><a class="page-link" href="#">4</a></li>         
                        <li class="page-item"><a class="page-link" href="#">5</a></li>         
                        <li class="page-item"><a class="page-link" href="#">6</a></li>         
                        <li class="page-item"><a class="page-link" href="#">7</a></li>         
                        <li class="page-item"><a class="page-link" href="#">8</a></li>         
                        <li class="page-item"><a class="page-link" href="#">9</a></li>         
                        <li class="page-item"><a class="page-link" href="#">10</a></li>         
                        <li class="page-item"><a class="page-link" href="#">11</a></li>         
                        <li class="page-item"><a class="page-link" href="#">12</a></li>         
                        <li class="page-item"><a class="page-link" href="#">13</a></li>         
                        <li class="page-item"><a class="page-link" href="#">14</a></li>         
                        <li class="page-item"><a class="page-link" href="#">15</a></li>         
                        <li class="page-item"><a class="page-link" href="#">16</a></li>         
                        <li class="page-item"><a class="page-link" href="#">17</a></li>         
                        <li class="page-item"><a class="page-link" href="#">18</a></li>         
                        <li class="page-item"><a class="page-link" href="#">19</a></li>         
                        <li class="page-item"><a class="page-link" href="#">20</a></li>         
                    </ul>
                </nav><!-- Termina Paginacion -->
            </main>
        </div><!-- Cierra Row -->
    </div><!-- Termina container-fluid -->

<?php include_once("../sections/footer.php"); ?>        