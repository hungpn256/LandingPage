var buttonOnTop = document.getElementsByClassName("on-top");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    buttonOnTop[0].style.display = "block";
  } else {
    buttonOnTop[0].style.display = "none";
  }
}
function OnTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

var EditNickName = document.getElementsByClassName('edit');
var inputEditNickName = document.getElementsByClassName('input-edit-nick-name');
var nickName = document.getElementsByClassName('nick-name');
function onReady(callback) {
  var intervalId = window.setInterval(function() {
    if (document.getElementsByClassName('nick-name')[0] !== undefined) {
      window.clearInterval(intervalId);
      callback.call(this);
    }
  }, 1000);
}

function setVisible(className, innerHTML) {
  document.getElementsByClassName(className)[0].innerHTML = innerHTML;
}

onReady(function() {
  setVisible('nick-name', localStorage.getItem('nickName').toString());
});
function OnEditNichName(){
  nickName[0].innerHTML='('+inputEditNickName[0].value+')';
  localStorage.setItem('nickName','('+inputEditNickName[0].value+')');
  inputEditNickName[0].value='';
  EditNickName[0].style.animation = 'fadeIn ease-in-out 1s';
  EditNickName[0].style.display = 'none';
}

function OnExitEdit(){
  EditNickName[0].style.display = 'none';
}
function OnOpenEdit(){
  EditNickName[0].style.display = 'block';
}



// Show photo
// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementsByClassName('photo-item-img');
var modalImg = document.getElementById("img01");
for(var i = 0;i<img.length;i++){
  img[i].onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
  }
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}


function ScrollTo(c) {
  var hobbies = document.getElementById(c);
  hobbies.scrollIntoView();
}