$(document).ready(function () {

  $('a[href^="#"]').click(function () {
    var elementClick = $(this).attr("href");
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated), body:not(:animated)").animate({scrollTop: destination}, 600);
    return false;
  });


// chat
 var chatActive = 0;
$('.close1').on('click',function(e){
    e.preventDefault();
    $('.chat-content').slideDown();

  });


var txt = 'Online :)';
var speed = 5000;

function showMessage() {


    $('.chat .message-block ').css('display','inline-block');
   $('.chat .message-block2').css('display','inline-block');

};
// открываем чат  чз 15сек, если он не был открыт
 setTimeout(function(){
  if (chatActive == 0){
$('.chat-content').slideToggle();
chatActive = 1;
setTimeout(showMessage, speed);
clock();
$("#doc_time,#doc_time1").html(date_time);

  };
 }, 15000);
// открываем чат  чз 15сек, если он не был открыт
// открываем чат по клику на хедер
$('.chat-header').on('click',function(){
        $('.chat-content').slideToggle();
        chatActive = 1;
clock();

$("#doc_time,#doc_time1").html(date_time);
// открываем чат по клику на хедер



// время
setTimeout(showMessage, speed);
    });


function clock() {
var d = new Date();

var day = d.getDate();
var hours = d.getHours();
var minutes = d.getMinutes();


if (day <= 9) day = "0" + day;
if (hours <= 9) hours = "0" + hours;
if (minutes <= 9) minutes = "0" + minutes;


date_time = hours + ":" + minutes;



};

var modal = document.getElementById("oneClickModal");
var btn = document.getElementById("oneClick");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

});

