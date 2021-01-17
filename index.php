<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/png" href="assets/img/logowhite_1.png" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
        integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <link rel="stylesheet" href="assets/css/style.css">
    <link rel="stylesheet" href="assets/css/animation.css">
    <title>CV Lucas Thomas - Devellopeur Web - Web Designer</title>
</head>

<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <div class="text-center">
                    <img src="assets/img/logonight.svg" class="img-fluid mt-3 " width="200" alt="logo lucas"
                        id="imgChange">
                    <a href="#" id="changeTheme"><img src="assets\img\lune.svg" id="moon" class="img-fluid mt-3"
                            width="70" alt="lune"></a>
                </div>
            </div>
            <div class="col-12 mt-5">
                <div class="text-center">
                    <!-- partie qui suis je ? -->
                    <a class="colorToA" data-toggle="collapse" href="#mwa" role="button" aria-expanded="false">
                        <p class="fontSize mt-3 zoom">Qui suis je ?</p>
                    </a>
                    <div class="collapse mt-2" id="mwa">
                        <?php include('template/mwa.php'); ?>
                    </div>

                    <!-- partie competences  -->
                    <a class="colorToA" data-toggle="collapse" href="#comp" role="button" aria-expanded="false">
                        <p class="fontSize mt-3 zoom">Competences</p>
                    </a>
                    <div class="collapse mt-2" id="comp">
                        <?php include('template/Competences.php'); ?>
                    </div>

                    <!-- partie formation  -->
                    <a class="colorToA" data-toggle="collapse" href="#form" role="button" aria-expanded="false">
                        <p class="fontSize mt-3 zoom">Formation</p>
                    </a>
                    <div class="collapse mt-2" id="form">
                        <?php include('template/formation.php'); ?>
                    </div>

                    <!-- partie Experiences  -->
                    <a href="#exp" class="colorToA" data-toggle="collapse" role="button" aria-expanded="false">
                        <p class="fontSize mt-3 zoom">Experiences</p>
                    </a>
                    <div class="collapse mt-2" id="exp">
                        <?php include('template/experience.php'); ?>
                    </div>

                    <!-- partie portfolio  -->
                    <a href="#porfolio" class="colorToA" data-toggle="collapse" role="button" aria-expanded="false">
                        <p class="fontSize mt-3 zoom">Portfolio</p>
                    </a>
                    <div class="collapse mt-2" id="porfolio">
                        <?php include('template/portfolio.php'); ?>
                    </div>

                     <!-- partie contact  -->
                     <a href="#Contact" class="colorToA" data-toggle="collapse" role="button" aria-expanded="false">
                        <p class="fontSize mt-3 zoom">Contact</p>
                    </a>
                    <div class="collapse mt-2" id="Contact">
                        <?php include('template/contact.php'); ?>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script src="assets\js\script.js"></script>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
        integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous">
    </script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous">
    </script>
</body>

</html>