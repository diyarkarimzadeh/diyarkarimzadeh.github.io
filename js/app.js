document.querySelector('.open-slide').addEventListener('click', function(){
  document.getElementById('slide-menu').style.width = '250px';
  document.body.style.overflowY = 'hidden';
});

document.querySelector('.btn-close').addEventListener('click', function(){
  document.getElementById('slide-menu').style.width = '0';
  document.body.style.overflowY = 'visible';
});

document.body.addEventListener('mouseup', function(event){
  var sideNav = document.querySelector('.side-nav');
  if(event.target != sideNav && event.target.parentNode != sideNav){
    document.getElementById('slide-menu').style.width = '0';
    document.body.style.overflowY = 'visible';
  };
});
