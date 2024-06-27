//for-loop

for(let i=1;i<=5;i++){
    console.log(i);
}

for(let i=10;i>=1;i=i-3){
    console.log(i);
}

for(let i=1;i<=15;i=i+2){
        console.log(i);
}
console.log("Even numbers: ")
for(let i=2;i<=10;i=i+2){
    console.log(i);
}

/*let n=parseInt(prompt("Enter a number"));
//Multiplication Table of 5
for(let i=1;i<=10;i++){
    console.log(n+"*"+i+"="+i*n);
}*/

for(let i=1;i<=3;i++){
    for(let j=1;j<=3;j++){
        console.log(j);

    }
}

let x=1;
while(x<=5){
    console.log(x);
    x++;
}
console.log(x);


//Guess Favourite Movie
/*let favMove="salaar";
let n=prompt("Enter movie name: ");
if(n=="quit"){
    alert("Better luck next time!");
}
else{
    while(n!="salaar"){
        n=prompt("wrong guess try again: ");
        if(n=="quit"){
            break;
        }
    }
    if(n==favMove){
        alert("Congratulations your guess was correct!");
    }
    if(n=="quit"){
        alert("Better luck next time!");
    }
}*/


let names=[["Apple","Orange","Pineapple","Banana","StrawBerry"],["superMan","batman","chotabbheem"]];
for(let i=0;i<names.length;i++){
    console.log(`List: ${i+1}`);
    for(let j=0;j<names[i].length;j++){
        console.log(j+"->"+names[i][j]);
    }
}

let arr=["ravi","raju","yadhav"];
for(i of arr){
    console.log(i);
}
let str="ApnaCollege";
for(c of str){
    console.log(c);
}

let heros=[["superman","batman","ironman"],["chotabheem","mrbean"]];
for(list of heros){
    console.log(list);
    for(ele of list){
        console.log(ele);
    }
}

//ToDo app using JS

let items=[];
while(true){
    let input=prompt("Enter action: ");
    if(input=="list"){
        if(items.length==0){
            alert("No tasks to show");
        }
        else{
            for(item of items){
                console.log(item);
            }
        }
    }
    else if(input=="add"){
        let toAdd=prompt("Enter task to add: ");
        items.push(toAdd);
        console.log(alert("Task "+toAdd+" is added successfully!"));
    }
    else if(input=="remove"){
        let toRemove=prompt("Enter task to delete: ");
        if(items.includes(toRemove)){
            items.pop(toRemove);
            console.log(alert("Task "+toRemove+" is removed successfully!"));
        }
        else{
            console.log(alert("Sorry the "+toRemove+" is not in items"));
        }
    }
    else if(input=="quit"){
        console.log(alert("quitting toDo app"));
        break;
    }
}


