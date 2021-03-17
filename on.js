    var wrap = document.getElementsByClassName("newsContent_slide")[0];
    var on1 = document.querySelectorAll('.tab-head>li');
    for (var i = 0; i < on1.length; i++){
        (function (i){
            on1[i].addEventListener('mouseover',function(){
                if(this.className != "on"){
                clear();
                this.className = "on";
                news_slide(i);

                }
            })
        }(i))
            
    }
    function clear(){
        for(j = 0; j<on1.length; j++){
            on1[j].removeAttribute("class","on");
        }
    }
    function news_slide(i){
        if(i == 0){
           wrap.style.marginLeft = "0px";
        }
        if(i == 1){
            wrap.style.marginLeft = "-325px";
        }
        if(i == 2){
            wrap.style.marginLeft = "-650px";
        }
        if(i == 3){
            wrap.style.marginLeft = "-975px";
        }
        if(i == 4){
            wrap.style.marginLeft = "-1300px";
        }
    }

    