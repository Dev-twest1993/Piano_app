let myKeys = document.querySelectorAll(".key");

for(let x = 0; x < myKeys.length; x++){

    myKeys[x].addEventListener('click', function(){
        playSnd(myKeys[x].innerHTML.toLowerCase())
    }
    )}

    //target document and listen for a keydown
    document.addEventListener('keydown', function(btn){
        //capture the key being pushed and conver to lowercase
        playSnd(btn.key.toLowerCase());

        let pressed_key = btn.key.toLowerCase();

        //remove activated so that glow will not stay on after click
        for(var x = 0; x < myKeys.length; x++){
            myKeys[x].classList.remove('activated');
        }
        for(var x = 0; x < myKeys.length; x++){
            if(pressed_key == myKeys[x].innerHTML.toLowerCase()){
                myKeys[x].classList.add('activated');
            }
        }
    })

    function playSnd(key) {
        switch(key) {
            case 'a':
                var snd = new Audio('doremi/do.mp3');
                snd.play();
              break;
              case 's':
                var snd = new Audio('doremi/re.mp3');
                snd.play();
              break;
              case 'd':
                var snd = new Audio('doremi/mi.mp3');
                snd.play();
              break;
              case 'f':
                var snd = new Audio('doremi/fa.mp3');
                snd.play();
              break;
              case 'j':
                var snd = new Audio('doremi/sol.mp3');
                snd.play();
              break;
              case 'k':
                var snd = new Audio('doremi/la.mp3');
                snd.play();
              break;
              case 'l':
                var snd = new Audio('doremi/ti.mp3');
                snd.play();
              break;
              case 'p':
                var snd = new Audio('doremi/doh.mp3');
                snd.play();
              break;
            default:
                console.log(key);
          }
    }