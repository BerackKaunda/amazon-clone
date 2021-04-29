<<<<<<< HEAD


$(document).ready( ()=>{

let button = $(".cardButtons a:first");
button[0].onclick = () => {
    button.empty()
    .text('Added to Cart')
    .css("font-size", "13px")
    .next()
    .text('Show On Amazon Site')
    .css("font-size", "13px");

    return false;
}

let switchOn = $("#switchInput");
$(this).bind('click',() => {
   
    if (switchOn[0].checked === true){
            $(".onSwitch p").text('Dark Mode').css("color", "white");          
            $(".wrapper").css("background-color", "rgb(35,46,63)");
            $(".header h1").css("color", "rgb(234,236,236)");
            $(".header p").css("color", "rgb(234,236,236)");
            $(".cardButtons a").css({"background-color":"rgb(145, 145, 145)","border":"1px solid rgb(234,236,236)"});
            $(".card").css("color", "rgb(234,236,236)");
    }else if(switchOn[0].checked === false){
        $(".onSwitch p").text('Light Mode').css("color", "black");
        $(".wrapper").css("background-color", "rgb(234,236,236)");
        $(".header h1").css("color", "rgb(35,46,63)");
        $(".header p").css("color", "rgb(35,46,63)");
        $(".card").css("color", "rgb(35,46,63)");
        $(".cardButtons a").css({"background-color":" rgb(223, 222, 222)","border":"1px solid"});
    }

});
=======


$(document).ready( ()=>{

let button = $(".cardButtons a:first");
button[0].onclick = () => {
    button.empty()
    .text('Added to Cart')
    .css("font-size", "13px")
    .next()
    .text('Show On Amazon Site')
    .css("font-size", "13px");

    return false;
}

let switchOn = $("#switchInput");
$(this).bind('click',() => {
   
    if (switchOn[0].checked === true){
            $(".onSwitch p").text('Dark Mode').css("color", "white");          
            $(".wrapper").css("background-color", "rgb(35,46,63)");
            $(".header h1").css("color", "rgb(234,236,236)");
            $(".header p").css("color", "rgb(234,236,236)");
            $(".cardButtons a").css({"background-color":"rgb(145, 145, 145)","border":"1px solid rgb(234,236,236)"});
            $(".card").css("color", "rgb(234,236,236)");
    }else if(switchOn[0].checked === false){
        $(".onSwitch p").text('Light Mode').css("color", "black");
        $(".wrapper").css("background-color", "rgb(234,236,236)");
        $(".header h1").css("color", "rgb(35,46,63)");
        $(".header p").css("color", "rgb(35,46,63)");
        $(".card").css("color", "rgb(35,46,63)");
        $(".cardButtons a").css({"background-color":" rgb(223, 222, 222)","border":"1px solid"});
    }

});
>>>>>>> fc38dc19853f2223fc4da6681e66309e4b12e1f1
});