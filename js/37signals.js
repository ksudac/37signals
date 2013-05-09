$(document).ready(function(){
$('#pill-basecamp').on('mouseover', function(){
    $('#hidden-basecamp').show();
    $('#hidden-title').hide();
});
$('#pill-basecamp').on('mouseout', function(){
    $('#hidden-basecamp').hide();
    $('#hidden-title').show();
});

$('#pill-highrise').on('mouseover', function(){
    $('#hidden-highrise').show();
    $('#hidden-title').hide();
});
$('#pill-highrise').on('mouseout', function(){
    $('#hidden-highrise').hide();
    $('#hidden-title').show();
});

$('#pill-campfire').on('mouseover', function(){
    $('#hidden-campfire').show();
    $('#hidden-title').hide();
});

$('#pill-campfire').on('mouseout', function(){
    $('#hidden-campfire').hide();
    $('#hidden-title').show();
});
});

$(document).ready(function(){
    var d=new Date();
    var weekday=new Array(7);
        weekday[0]="Sunday";
        weekday[1]="Monday";
        weekday[2]="Tuesday";
        weekday[3]="Wednesday";
        weekday[4]="Thursday";
        weekday[5]="Friday";
        weekday[6]="Saturday";
    
    var n = weekday[d.getDay()];
    var greeting = $('<span>Happy '+n+'.</span>');
    $('#happy-greeting').append(greeting);
});