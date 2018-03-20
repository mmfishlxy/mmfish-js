var aText = document.getElementsByTagName("input")[0];
var aBtn = document.getElementsByTagName("input")[1];
aBtn.onclick = function(){
	var t = 1;          //标记字符串首位不为0
	if(aText.value[0] == 0){
		var t = 0;
	}
	if(aText.value && (parseInt(aText.value) == aText.value) && t && (aText.value.length>5 && aText.value.length<=10)){
		alert("输入的为合法QQ号码！");
	}
	else{
		alert("输入错误，请重新输入！");
	}
}