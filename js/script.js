
//...........................................what we do...........................................................................
$(".visible ").click(function(){
    $(".visible").hide()
    $(".hidden ").toggle()
    $(".hidden").show()
    $()
});
 $(".hidden").click(function(){
    $(".hidden").hide()
    $(".visible").toggle()
})
$(".visible1  ").click(function(){
    $(".visible1").hide()
    $(".hidden1").toggle()
    $(".hidden1").show()
    $()
});
 $(".hidden1").click(function(){
    $(".hidden1").hide()
    $(".visible1").toggle()
})
$(".visible2 ").click(function(){
    $(".visible2").hide()
    $(".hidden2 ").toggle()
    $(".hidden2").show()
    $()
});
 $(".hidden2").click(function(){
    $(".hidden2").hide()
    $(".visible2").toggle()
})
// ........................................form validation....................................................................
function validate(){
    var name=  document.getElementById("name").value
    var email= document.getElementById("email").value
    var message= document.getElementById("message").value

    if(name==""|| email==""||message==""){
        alert("blank fill the data");
        return false;
    }else{
        alert("Hello" +" " + name + " "+"we have received your message. Thank you for reaching out to us. ")
    }
}
// ..........................................portfolio........................................................................


$(".images").hover(function () {
  $(this).children(".tag").fadeToggle(1000, "linear");
});