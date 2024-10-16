function myFunctionAll(){
    var array = [1,2,3,4,5];
    

    myFunction1(array);
    myFunction2(array);

    object={
        name:"john",
        surname: "pork",
        age: 23
    };
    for(let key=0; key<10 ;key++)
    {
        array[key]=object;
    }
    myFunction3(array);
    document.getElementById("results_1_1").addEventListener("mouseover", function(){
        this.style.backgroundColor="red";
    });
    document.getElementById("results_1_1").addEventListener("mouseout", function(){
        this.style.backgroundColor="white";
    });

}

function myFunction1(array){
    for(key in array)
    {
        document.getElementById("results_1_1").innerText+=array[key] + "\xa0    ";
    }
    
}
function myFunction2(array){
    let x= array.reduce((acc,curr)=>acc+(curr*curr));
    document.getElementById("results_1_2").innerText=x;
        
}
function myFunction3(array)
{
    for(value of array)
    {
        document.getElementById("results_1_3").innerText+=value.name + "\xa0" + value.surname + "\xa0" + value.age + "\n";
    }
}
function handleClick(){
    document.getElementById("clickbutton").innerText="Thank you!";
}