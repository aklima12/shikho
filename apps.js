window. addEventListener('scroll',function(){
	var navbarsticky=document.querySelector('.menuitem');
	navbarsticky.classList.toggle("sticky",window.scrollY>0);
});