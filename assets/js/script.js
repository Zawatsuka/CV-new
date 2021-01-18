// id du bouton 
document.getElementById('changeTheme').addEventListener("click", myFunction);

function myFunction() {
    var element = document.body;
    var imgLogo = document.getElementById("imgChange");
    var imgdarkmode = document.getElementById("moon");
    var imgClap = document.getElementById("clap");
    var imgArt = document.getElementById("art");
    var imgGame = document.getElementById("game");
    var imgClapM = document.getElementById("clapM");
    var imgArtM = document.getElementById("artM");
    var imgGameM = document.getElementById("gameM");
    var imgCar = document.getElementById("car");
    var imgHTML = document.getElementById("HTMLimg");
    var imgCSS = document.getElementById("CSSimg");
    var imgJS = document.getElementById("JSimg");
    var home = document.getElementById("home");
    var instaP = document.getElementById("instaPro");
    var instaA = document.getElementById("instaDessin");
    var mybutton = document.getElementById("myBtn");
    element.classList.toggle("dark-mode");

    // condition qui changer le logo selon le darkmode ou non 
    if (imgLogo.getAttribute('src') == 'assets/img/logowhite.svg') {
        imgLogo.setAttribute('src', 'assets/img/logonight.svg');
    } else {
        imgLogo.setAttribute('src', 'assets/img/logowhite.svg');
    };

    // condition qui change le bouton selon le darkmode ou non 
    if (imgdarkmode.getAttribute('src') == 'assets/img/soleil.svg') {
        imgdarkmode.setAttribute('src', ' assets/img/lune.svg');
    } else {
        imgdarkmode.setAttribute('src', 'assets/img/soleil.svg');
    };

    // condition pour l'image clap pc
    if (imgClap.getAttribute('src') == 'assets/img/clapblanc.svg') {
        imgClap.setAttribute('src', 'assets/img/cine.png');
    } else {
        imgClap.setAttribute('src', 'assets/img/clapblanc.svg');
    };

    // condition pour l'image art pc
    if (imgArt.getAttribute('src') == 'assets/img/art blanc.svg') {
        imgArt.setAttribute('src', 'assets/img/art.png');
    } else {
        imgArt.setAttribute('src', 'assets/img/art blanc.svg');
    };

    // condition pur l'image game pc
    if (imgGame.getAttribute('src') == 'assets/img/manetteblanche.svg') {
        imgGame.setAttribute('src', 'assets/img/manette.png');
    } else {
        imgGame.setAttribute('src', 'assets/img/manetteblanche.svg');
    };
    // condition pour l'image clap mobile
    if (imgClapM.getAttribute('src') == 'assets/img/clapblanc.svg') {
        imgClapM.setAttribute('src', 'assets/img/cine.png');
    } else {
        imgClapM.setAttribute('src', 'assets/img/clapblanc.svg');
    };

    // condition pour l'image art mobile
    if (imgArtM.getAttribute('src') == 'assets/img/art blanc.svg') {
        imgArtM.setAttribute('src', 'assets/img/art.png');
    } else {
        imgArtM.setAttribute('src', 'assets/img/art blanc.svg');
    };

    // condition pour l'image game mobile
    if (imgGameM.getAttribute('src') == 'assets/img/manetteblanche.svg') {
        imgGameM.setAttribute('src', 'assets/img/manette.png');
    } else {
        imgGameM.setAttribute('src', 'assets/img/manetteblanche.svg');
    };

    // condition pour l'image voiture
    if (imgCar.getAttribute('src') == 'assets/img/voitureblanc.png') {
        imgCar.setAttribute('src', 'assets/img/voiture.png');
    } else {
        imgCar.setAttribute('src', 'assets/img/voitureblanc.png');
    };

    // condition pour l'image html
    if (imgHTML.getAttribute('src') == 'assets/img/web/HTMLblanc.png') {
        imgHTML.setAttribute('src', 'assets/img/web/HTML.png');
    } else {
        imgHTML.setAttribute('src', 'assets/img/web/HTMLblanc.png');
    };

    // condition pour l'image css
    if (imgCSS.getAttribute('src') == 'assets/img/web/CSSblanc.png') {
        imgCSS.setAttribute('src', 'assets/img/web/CSS.png');
    } else {
        imgCSS.setAttribute('src', 'assets/img/web/CSSblanc.png');
    };

    // condition pour l'image js 
    if (imgJS.getAttribute('src') == 'assets/img/web/JSblanc.png') {
        imgJS.setAttribute('src', 'assets/img/web/js.png');
    } else {
        imgJS.setAttribute('src', 'assets/img/web/JSblanc.png');
    };

    // condition pour home 
    if (home.getAttribute('src') == 'assets/img/homewhite.png') {
        home.setAttribute('src', 'assets/img/home.png');
    } else {
        home.setAttribute('src', 'assets/img/homewhite.png');
    };
    // condition pour insta pro 
    
    if (instaP.getAttribute('src') == 'assets/img/insta pro blanc.png') {
        instaP.setAttribute('src', 'assets/img/insta pro.png');
    } else {
        instaP.setAttribute('src', 'assets/img/insta pro blanc.png');
    };
    // condition pour insta dessin 
    if (instaA.getAttribute('src') == 'assets/img/insta dessin white.png') {
        instaA.setAttribute('src', 'assets/img/insta dessin.png');
    } else {
        instaA.setAttribute('src', 'assets/img/insta dessin white.png');
    };

    // condition pour bouton up 
    if (mybutton.getAttribute('src') == 'assets/img/upWhite.svg') {
        mybutton.setAttribute('src', 'assets/img/boutonUP.svg');
    } else {
        mybutton.setAttribute('src', 'assets/img/upWhite.svg');
    };
}

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}