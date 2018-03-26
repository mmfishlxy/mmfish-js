var oUl1 = document.getElementById("ul1");
var oUl2 = document.getElementById("ul2");
var aLi = oUl1.getElementsByTagName("li");
// function xianshi(i){
// 		oUl2.style.display = "block";
// 		console.log(i);
// 		oUl2.style.left = (i * 56) + "px";
// 		oUl2.style.top = 46 + "px";
// }
function out(){
		oUl2.style.display = "none";
}
var timer;
for(var i=0;i<aLi.length;i++){
	aLi[i].index = i;
	aLi[i].onmouseover = oUl2.onmouseover = function(){
		clearTimeout(timer);
		oUl2.style.display = "block";
		oUl2.style.left = (this.index) * 56 + "px";
		oUl2.style.top = 46 + "px";
	}
	aLi[i].onmouseout = oUl2.onmouseout= function(){
		timer = setTimeout(out,700);
	}
}
