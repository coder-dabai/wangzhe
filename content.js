var items = document.querySelectorAll(".item_subnav > a");
var video = document.getElementsByClassName("video_list");

video[1].style.display = "none";
video[2].style.display = "none";
for(i = 0; i < 3; i++){
    (function(i){
       items[i].addEventListener('mouseover',function(){
          if(this.className != "subnav_on"){
            content_clear();
            this.className = "subnav_on";
            video[i].style.display = "block";
          }
          
       })
    }(i))
}
//清除样式
function content_clear(){
    for(j = 0; j<3; j++){
        items[j].removeAttribute("class","subnav_on");
        video[j].style.display = "none"
    }
}
