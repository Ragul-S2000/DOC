let obj1={name:"person1",age:5};
let obj2={age:5,name:"person1"};
if(Object.keys(obj1).length==Object.keys(obj2).length){
    for(key in obj1){
        if(obj1[key]==obj2[key]){
            console.log("obj1 == obj2")
        }else{
            console.log("obj1 != obj2") 
        }break;
    }
}
