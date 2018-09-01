//check off specific todos by clicking
$("ul").on("click", "li", function () {
    //if li is gray we'll turn it black else turn it gray
    $(this).toggleClass("completed");
});

//click on X to delete todo
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        //grabbing new todo text
        var todoText = $(this).val();
        $(this).val('');
        //create a new li and add to ul
        $('ul').append("<li><span><i class='fas fa-trash-alt'></i> </span>" + todoText + "</li>");

    }
});

$("i:first").click(function(){
    if($('i:first').attr("class") === "fas fa-plus"){
        $('i:first').removeClass("fas fa-plus");
        $('i:first').addClass("fas fa-angle-double-up")
        $('input').css("display", "block");
    }
    else if($('i:first').attr("class") === "fas fa-angle-double-up"){
        $('i:first').removeClass("fas fa-angle-double-up");
        $('i:first').addClass("fas fa-plus")
        $('input').css("display", "none");
    }
});