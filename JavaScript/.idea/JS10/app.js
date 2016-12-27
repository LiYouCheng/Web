/**
 * Created by shiios on 16/12/26.
 */
window.onload = function () {

    imgLocation("container","box");

    var imgData = { "data": [{ "src": "11.jpg"},{ "src": "12.jpg"}
    ,{ "src": "13.jpg"},{ "src": "14.jpg"}
    ,{ "src": "15.jpg"},{ "src": "16.jpg"}
    ,{ "src": "17.jpg"},{ "src": "18.jpg"}
    ,{ "src": "19.jpg"},{ "src": "20.jpg"}] };

    window.onscroll = function () {
        if(checkFlag()){
            var cparent = document.getElementById("container");
            for (var i = 0;i < imgData.data.length;i++) {
                var ccontent = document.createElement("div");
                ccontent.className = "box";
                cparent.appendChild(ccontent);

                var boximg = document.createElement("div");
                boximg.className = "box_img";
                ccontent.appendChild(boximg);

                var img = document.createElement("img");
                img.src = "images/"+imgData.data[i].src;
                boximg.appendChild(img)

                console.log("执行");
            }
            imgLocation("container","box");
        }
    }
    
}

function checkFlag() {
    var cparent = document.getElementById("container");

    var ccontent = getChildElement(cparent,"box");

    var lastContentHeight = ccontent[ccontent.length - 1].offsetTop;

    var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
    var pageHeight = document.documentElement.clientHeight || document.body.clientHeight;


    if (lastContentHeight < scrollTop + pageHeight) {
        //开始加载
        return true;
    }
    // console.log(scrollTop+":"+pageHeight+":"+lastContentHeight);

}

function imgLocation(parent,content) {
    //将parent下所有content全部取出
    var cparent = document.getElementById(parent);

    var ccontent = getChildElement(cparent,content);

    var imgWidth = ccontent[0].offsetWidth;
    var cols = Math.floor(document.documentElement.clientWidth / imgWidth);

    cparent.style.cssText = "width:"+imgWidth*cols+"px;margin:0 auto";


    var BoxHeightArr = [];
    for(var i = 0; i < ccontent.length;i++){
        if(i < cols){
            BoxHeightArr[i] = ccontent[i].offsetHeight;

        }
        else {
            var minheight = Math.min.apply(null,BoxHeightArr);

            var minIndex = getminheightLocation(BoxHeightArr,minheight);


            ccontent[i].style.position = "absolute";
            ccontent[i].style.top = minheight + "px";
            ccontent[i].style.left = ccontent[minIndex].offsetLeft+"px";

            BoxHeightArr[minIndex] = BoxHeightArr[minIndex] + ccontent[i].offsetHeight;

            // console.log(minheight);
        }
    }

}

function getminheightLocation(BoxHeightArr,minHeight) {
    for(var i in BoxHeightArr) {
        if (BoxHeightArr[i] == minHeight) {
            return i;
        }
    }
}


function getChildElement(parent,content) {
    var contentArr = [];
    var allcontent = parent.getElementsByTagName("*");

    for(var i = 0;i < allcontent.length;i++) {
        if(allcontent[i].className == content) {
            contentArr.push(allcontent[i]);
        }
    }
    return contentArr;
}