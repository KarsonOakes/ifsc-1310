$(document).ready(function() {
//doing fun gallery stuff
$('.gallery').cycle({
	fx:     'fade'
	});
	//CLICK THROUGH THOSE ARTICLES!
	$("#articles .post:not(:first)").hide();

    $('.next').click(function () {

    if ($(this).parent("article").next().length > 0) { //check if there is more articles
        $(this).parent("article").next().show(); //show next article
        $(this).parent("article").hide(); //hide present article
    } else {
        $("#articles .post:first").show();
        $(this).parent("article").hide();
    }
    return false;
});
	
});
