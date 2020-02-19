const count = document.querySelector(".dropDownContainer").childElementCount;
alert(count);

for(let x=1;x<=count;x++){
    const dropDown = document.querySelector(".dropDown:nth-child("+x+")");
    dropDown.addEventListener("click",function(){
        const collapse = document.querySelector(".dropDown:nth-child("+x+")").lastElementChild;
        collapse.classList.toggle("expand-div");
    });
}