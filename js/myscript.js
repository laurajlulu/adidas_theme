
/*메인비주얼 슬라이드 시작  */
var slideIndex1 = 0;
var slideIndex2 = 0;
auto_slide1();
auto_slide2();

function auto_slide1() {
    var i;
    var slides1=document.getElementsByClassName("v1_slide");
    for (i=0; i<slides1.length; i++) {
        slides1[i].style.display="none";
    }
    slideIndex1++;
    if (slideIndex1 > slides1.length) {
    slideIndex1 = 1}
    slides1[slideIndex1-1].style.display="block";
    setTimeout(auto_slide1, 2000);  
}


function auto_slide2() {
    var i;
    var slides2=document.getElementsByClassName("v2_slide");
    for (i=0; i<slides2.length; i++) {
        slides2[i].style.display="none";
    }
    slideIndex2++;
    if (slideIndex2 > slides2.length) {
    slideIndex2 = 1}
    slides2[slideIndex2-1].style.display="block";
    setTimeout(auto_slide2, 3000);  
}


/*프로모라인    
var text = document.querySelector('.v2_promoline');
var str_text = text.textContent;
var split_text = str_text.split("");
text.textContent="";
for(var i=0; i < split_text.length; i++) {
    text.innerHTML += "<span>"+split_text[i]+"</span>"; 
}

var char = 0;
var timer = setInterval(moving, 30);

function moving() {
    var span = text.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++;
    if(char == split_text.length) {
        complete();
        return; 
    }
}

function complete() {
    clearInterval(timer);
    timer = null;
}
*/

