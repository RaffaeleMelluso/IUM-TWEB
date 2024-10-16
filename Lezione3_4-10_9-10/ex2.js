function mainf(){
    addHoverEffect("col1", ["col2", "col3"]);
    addHoverEffect("col2", ["col1", "col3"]);
    addHoverEffect("col3", ["col1", "col2"]);
}

function addHoverEffect(currentId, hideIds) {
    document.getElementById(currentId).addEventListener("mouseover", function(){
        hideIds.forEach(id => {
            document.getElementById(id).style.visibility = "hidden";
        });
    });

    document.getElementById(currentId).addEventListener("mouseout", function(){
        hideIds.forEach(id => {
            document.getElementById(id).style.visibility = "visible";
        });
    });
}