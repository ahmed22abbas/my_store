$(document).ready(function(){
    $("body").niceScroll({
    cursorcolor: "#3dc4b6",
    zindex: "auto" | [1050],
    cursorborder: "1px solid #3dc4b6"
});

    // ion range slider
    //$("#range_25").ionRangeSlider({
      //  type: "double",
        //min: 1000000,
        //max: 2000000,
        //grid: true
    //});
    
    $("#range_03").ionRangeSlider({
    type: "double",
    grid: false,
    min: 0,
    max: 2000,
    from: 200,
    to: 800,
    prefix: "$"
});
    $("#range_09").ionRangeSlider({
            type: "double",
    grid: false,
    from: 3,
        to:9,
    values: [
        "January", "February", "March",
        "April", "May", "June",
        "July", "August", "September",
        "October", "November", "December"
    ]
});
    
    }); // end of ready