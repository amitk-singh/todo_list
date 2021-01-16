//changing color and text cut
/* $("li").click(function(){
    console.log($(this).css("color"))
  if($(this).css("color")==="rgb(128, 128, 128)"){  
    $(this).css({
        color:"black",
        textDecoration:"none"
    })
   }
  else{
      $(this).css({
          color:"gray",
          textDecoration:"line-through"
      })
  }  
}) */

$("ul").on("click","li", function(){
    $(this).toggleClass("highlight");
});
//click on x to delete Todo
$("ul").on("click", "span",function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
    
});

//add new to-do
$("input").keypress(function(event){
    if(event.which===13){
        var todoText=$(this).val();
        $(this).val ("");
        $("ul").append("<li><span><i class='fa fa-trash aria-hidden='true'></i></span> "+ todoText +"</li>");
    }
})

//for hidding add note
$(".fa-plus").click(function(){
    $("input[type='text'").fadeToggle()
  })