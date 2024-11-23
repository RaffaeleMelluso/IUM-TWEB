
function mainf(){
    addHoverEffect("col1");
    addHoverEffect("col2");
    addHoverEffect("col3");
}

function addHoverEffect(currentId) {
    document.getElementById(currentId).addEventListener("mouseover", function(){
        this.style.backgroundColor="red";
    });

    document.getElementById(currentId).addEventListener("mouseout", function(){
        this.style.backgroundColor="white";
    });
}