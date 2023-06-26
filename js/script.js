/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu */
function myFunction(){
    var x = document.getElementById("mobileLinksBackground");
    var y = document.getElementById("logo");
    var z = document.getElementById("logohover");
    if (x.style.display === "block"){
        x.style.display = "none";
        y.style.display = "block";
        z.style.display = "block";
    } else {
        x.style.display = "block";
        y.style.display = "none";
        z.style.display = "none";
    }
}








    document.addEventListener('DOMContentLoaded',function(event){
        // array with texts to type in typewriter
        var dataText = [ "Brice Jordan is a graphic & web designer."];
        
        // type one text in the typwriter
        // keeps calling itself until the text is finished
        function typeWriter(text, i, fnCallback) {
          // chekc if text isn't finished yet
          if (i < (text.length)) {
            // add next character to h1
           document.getElementById("hero-text").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';
      
            // wait for a while and call this function again for next character
            setTimeout(function() {
              typeWriter(text, i + 1, fnCallback)
            }, 60);
          }
          // text finished, call callback if there is a callback function
          /*else if (typeof fnCallback == 'function') {
            // call callback after timeout
            setTimeout(fnCallback, 700);
          }*/
        }
        // start a typewriter animation for a text in the dataText array
         function StartTextAnimation(i) {
           if (typeof dataText[i] == 'undefined'){
              setTimeout(function() {
                StartTextAnimation(0);
              }, 20000);
           }
           // check if dataText[i] exists
          if (i < dataText[i].length) {
            // text exists! start typewriter animation
           typeWriter(dataText[i], 0, function(){
             // after callback (and whole text has been animated), start next text
             StartTextAnimation(i + 1);
           });
          }
        }
        // start the text animation
        StartTextAnimation(0);
      });

      document.addEventListener('DOMContentLoaded',function(event){
        // array with texts to type in typewriter
        var dataTextAboutMe = [ "My name's Brice and I design solutions."];
        
        // type one text in the typwriter
        // keeps calling itself until the text is finished
        function typeWriter(text, i, fnCallback) {
          // chekc if text isn't finished yet
          if (i < (text.length)) {
            // add next character to h1
           document.getElementById("hero-text-aboutme").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';
      
            // wait for a while and call this function again for next character
            setTimeout(function() {
              typeWriter(text, i + 1, fnCallback)
            }, 60);
          }
          // text finished, call callback if there is a callback function
          /*else if (typeof fnCallback == 'function') {
            // call callback after timeout
            setTimeout(fnCallback, 700);
          }*/
        }
        // start a typewriter animation for a text in the dataText array
         function StartTextAnimation(i) {
           if (typeof dataTextAboutMe[i] == 'undefined'){
              setTimeout(function() {
                StartTextAnimation(0);
              }, 20000);
           }
           // check if dataText[i] exists
          if (i < dataTextAboutMe[i].length) {
            // text exists! start typewriter animation
           typeWriter(dataTextAboutMe[i], 0, function(){
             // after callback (and whole text has been animated), start next text
             StartTextAnimation(i + 1);
           });
          }
        }
        // start the text animation
        StartTextAnimation(0);
      });

      history.scrollRestoration = "manual";

$(window).on('beforeunload', function(){
      $(window).scrollTop(0);
});