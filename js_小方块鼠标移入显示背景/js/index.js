var oUl=document.getElementsByTagName("ul")[0];
var str="";
for(var i=0;i<100;i++){
	str+="<li></li>";
}
var oLi=document.getElementsByTagName("li");
oUl.innerHTML=str;
for(var i=0;i<oLi.length;i++){
	oLi[i].style.top=parseInt(i/10)*51+"px";
	oLi[i].style.left=i%10*51+"px";
	oLi[i].style.backgroundPosition=-(i%10*51)+"px "+-(parseInt(i/10)*51)+"px";
	oLi[i].onmouseover=function(){
		this.style.opacity=1;
	}
}
