var n = document.querySelectorAll(".drum").length;

for(var i =0;i<n;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function handle_click(i){
    var clicked_btn = this.innerHTML;
    make_sound(clicked_btn);
    btn_animation(clicked_btn);
        })
}

function make_sound(value) {
    switch (value) {
            case "l":
                var audio = new Audio('sounds/crash.mp3');
                audio.play();
                break;
        
            case "k":
                var audio = new Audio('sounds/kick-bass.mp3');
                audio.play();
                break;

            case "j":
                var audio = new Audio('sounds/snare.mp3');
                audio.play();
                break;

            case "d":
                var audio = new Audio('sounds/tom-1.mp3');
                audio.play();
                break;

            case "s":
                var audio = new Audio('sounds/tom-2.mp3');
                audio.play();
                break;

            case "a":
                var audio = new Audio('sounds/tom-3.mp3');
                audio.play();
                break;

            case "w":
                var audio = new Audio('sounds/tom-4.mp3');
                audio.play();
                break;
            default:
                break;
}
}


document.addEventListener("keypress",function(event){
    make_sound(event.key);
    btn_animation(event.key);
})


function btn_animation(curr_btn){
    var active_btn = document.querySelector("."+curr_btn);
    active_btn.classList.add("pressed");
    setTimeout(function(){
        active_btn.classList.remove("pressed");
    },100);
}