window.onload=function(){
	let li=document.querySelectorAll(".fk");
	let list=document.querySelectorAll(".sousuo");
	console.log(li,list);

	for (let i = 0; i < li.length; i++){
		//鼠标移入,子元素出现
		li[i].onmouseover=function(){
			for (let j = 0; j < list.length; j++) {
				//全部子元素消失
				list[j].style.display="none";
			}
			//当前子元素出现
			list[i].style.display="block";
		}
		//所有子元素消失
		li[i].onmouseout=function(){
			list[i].style.display="none";
			list[i].style.display="block";
		}
	}
	













}