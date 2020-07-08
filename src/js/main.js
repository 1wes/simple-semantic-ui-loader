// display the content after five secs
const $=require('jquery');

$(document).ready((e)=>{

    setTimeout(()=>{

        $('.contSeg').slideDown('slow');
    },5000);

});



