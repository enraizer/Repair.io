/*(function RandomImage(window,document,undefined){
    "use strict";
        var init = function(){
            var canvas = document.querySelector('#x');
            var icon_template = document.querySelector('#template');
            var icon_width = 40;
            var icon_height = 30;
            var the_images = [
                'http://static.tumblr.com/tensqk8/k8anq0438/01.png',
                'http://static.tumblr.com/tensqk8/rYanq05el/04.png',
                'http://static.tumblr.com/tensqk8/SYknq05py/05.png',
                'http://static.tumblr.com/tensqk8/s7inq057d/03.png'
            ];
            var pickRandomImage = function(){
                var i = Math.floor( Math.random() * the_images.length );
                return the_images[i];
            };
            var total_number_of_images = 10;
            var max_height = canvas.offsetHeight - icon_height;
            var max_width = canvas.offsetWidth - icon_width;
            var randomCoordinate = function(){
                var r = [];
                var x = Math.floor( Math.random() * max_width );
                var y = Math.floor( Math.random() * max_height );
                r = [x,y];
                return r;
            };
            /*var createImage = function(){
                var node = icon_template.cloneNode(true);
                var xy = randomCoordinate();
                node.removeAttribute('id');
                node.removeAttribute('hidden');
                node.style.top = xy[1] + 'px';
                node.style.left = xy[0] + 'px';
                node.setAttribute('src',pickRandomImage());
                canvas.appendChild(node);
            };
            clickImage = function(){
              $(".icon").click(function(){
                $(this).remove();
                console.log(score);
                $("#score").text(score);
              });
            };
        };
       window.addEventListener('load',init);
       var numItems = $('.icon').length;
       var score = 0;
       var difficulty = 2000;
       var icons = document.getElementsByClassName("icon");;
       var x = setInterval(function() {
           var node = icon_template.cloneNode(true);
           var xy = randomCoordinate();
           node.removeAttribute('id');
           node.removeAttribute('hidden');
           node.style.top = xy[1] + 'px';
           node.style.left = xy[0] + 'px';
           node.setAttribute('src',pickRandomImage());
           canvas.appendChild(node);
           numItems = $('.icon').length;
           if (numItems > 30) {
             endgame();
           };
         }, difficulty);
       var y = setInterval(function() {
         icons = document.getElementsByClassName("icon");
         console.log(icons);
       }, 100);
       $(".icon").on("click", function () {
         $(this).remove();
         console.log(score);
         $("#score").text(score);
         difficulty = difficulty - 50;
         console.log("salut");
       });
       var endgame = function () {
         alert("PERDU");
       };
})(window,document);
*/
$(document).ready(function() {
  const rollSound = new Audio("./sounds/POPSOUND.mp3");
  var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
  };
  var music=getUrlParameter("music");
  var audioInGame = new Audio('./sounds/muffin_song.mp3');
  audioInGame.loop = true;

  if(music == 'true'){
    audioInGame.play();
  }
  var effect=getUrlParameter("effect");
  var canvas = document.querySelector('#x');
  var icon_template = document.querySelector('#template');
  var icon_width = 1000;
  var icon_height = 550;
  var the_images = [
      'images/1000èmevisitur.jpg',
      'images/session2.png',
      'images/pub.png',
      'images/pub2.png',
      'images/session22.png',
      'images/session222.png',
      'images/windows-10.png'
  ];
  var pickRandomImage = function(){
      var i = Math.floor( Math.random() * the_images.length );
      return the_images[i];
  };
  var max_height = canvas.offsetHeight - icon_height;
  var max_width = canvas.offsetWidth - icon_width;
  var randomCoordinate = function(){
      var r = [];
      var x = Math.floor( Math.random() * max_width );
      var y = Math.floor( Math.random() * max_height );
      r = [x,y];
      return r;
  };
  if (x != 2) {
    var createImage = function(){
        var node = icon_template.cloneNode(true);
        var xy = randomCoordinate();
        node.removeAttribute('id');
        node.removeAttribute('hidden');
        node.style.top = xy[1] + 'px';
        node.style.left = xy[0] + 'px';
        node.setAttribute('src',pickRandomImage());
        canvas.appendChild(node);
        var numItems = $('.icon').length;
        if (numItems > 30) {
          clearInterval(y);
          endgame();
        };
    };
  }
  var difficulty = 1500;
  var score = 0;
    $(document).on( "click", ".icon", function() {
      var relX = event.pageX - $(this).offset().left;
      var relY = event.pageY - $(this).offset().top;
      var x = 0;
      switch ($(this).attr('src')) {
        case "images/1000èmevisitur.jpg":
          if (relX < 930 && relX > 880 && relY < 61 && relY > 11) {
            x = 1;
          } else if (relX < 648 && relX > 299 && relY < 368 && relY > 277) {
            x = 2;
          }
          break;
        case "images/windows-10.png":
          if (relX < 310 && relX > 208 && relY < 260 && relY > 234) {
            x = 1;
          } else if (relX < 128 && relX > 26 && relY < 260 && relY > 234) {
            x = 2;
          }
          break;
        case "images/session2.png":
          if (relX < 279 && relX > 41 && relY < 239 && relY > 173) {
            x = 1;
          } else if (relX < 563 && relX > 357 && relY < 230 && relY > 170) {
            x = 2;
          }
          break;
        case "images/session22.png":
          if (relX < 949 && relX > 909 && relY < 51 && relY > 11) {
            x = 1;
          } else if (relX < 802 && relX > 710 && relY < 224 && relY > 166) {
            x = 2;
          }
          break;
        case "images/session222.png":
          if (relX < 419 && relX > 397 && relY < 19 && relY > 0) {
            x = 1;
          }
          break;
        case "images/pub.png":
          if (relX < 393 && relX > 376 && relY < 26 && relY > 8) {
            x = 1;
          }
          break;
        case "images/pub2.png":
          if (relX < 223 && relX > 89 && relY < 93 && relY > 44) {
            x = 1;
          } else if (relX < 570 && relX > 378 && relY < 93 && relY > 40){
            x = 2;
          }
          break;
      }
      if (x == 1) {
        if (effect == 'true'){
          rollSound.play();
        }
          $(this).remove();
          score++;
          $("#score").text(score);
          if (difficulty > 500) {
            difficulty = difficulty - 50;
          }
      } else if (x == 2) {
        clearInterval(y);
        endgame();
      }
      clearInterval(y);
      if (x != 2) {
        y = setInterval(createImage, difficulty);
      }
    });
  var endgame = function () {
    $('.loose').show();
    clearInterval(x);
    clearInterval(y);
  };
  var y = setInterval(createImage, difficulty);
  $(document).on("click", ".rect", function () {
    indexrecord = "index.html?record=" + score;
    window.location.replace(indexrecord);
  })
});
