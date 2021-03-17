
var rt = document.getElementsByClassName("rt");
var slideImg = document.getElementsByClassName("slide-imgwrap");
var slide = document.getElementsByClassName("slide");
var currentindex = 0;

showimg();                                      //初始样式

for(var j=0;j<rt.length;j++){
    rt[j].setAttribute('data-index',j);        //为每个span添加自定义属性
}

for(var j=0;j<rt.length;j++) {                 //添加监听事件  没有on...
    rt[j].addEventListener('mouseover',function(event){
           currentindex = Number(event.target.getAttribute('data-index'));
           showimg();
           window.clearInterval(time);
    })
    rt[j].addEventListener('mouseout',function(event){                 //鼠标移除时再建定时器
        time = window.setInterval(function(){
            goNext();
        },5000);
 })
} 
function showimg(){
    for(var j = 0;j < slideImg.length;j++){            //清除原样式
        slide[0].style.marginLeft="";
        rt[j].style.background = "";
        rt[j].style.color = "";
    }
    for(var i = 0;i < slideImg.length;i++){            //在style添加左边距值实现滚动
        if(i === currentindex && i==0){
            slide[0].style.marginLeft="0";
            rt[i].style.background = "rgba(255,255,255,0.15)";
            rt[i].style.color = "#f3c258";
        }
        if(i === currentindex && i==1){
            slide[0].style.marginLeft="-604px";
            rt[i].style.background = "rgba(255,255,255,0.15)";
            rt[i].style.color = "#f3c258";
        }
        if(i === currentindex && i==2){
            slide[0].style.marginLeft="-1208px";
            rt[i].style.background = "rgba(255,255,255,0.15)";
            rt[i].style.color = "#f3c258";
        }
        if(i === currentindex && i==3){
            slide[0].style.marginLeft="-1812px";
            rt[i].style.background = "rgba(255,255,255,0.15)";
            rt[i].style.color = "#f3c258";
        }
        if(i === currentindex && i==4){
            slide[0].style.marginLeft="-2416px";
            rt[i].style.background = "rgba(255,255,255,0.15)";
            rt[i].style.color = "#f3c258";
        }
        
    }
}
function goNext(){              //功能：下一张
    currentindex++;
    if(currentindex == slideImg.length){
        currentindex = 0;
    }
    showimg();
}

time = window.setInterval(function(){           //定时器：实现自动轮播
    goNext();
},5000)


