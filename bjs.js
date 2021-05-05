// function factorial(x){
// 	if(x==1){
// 		return x;
// 	}
// 	else{
// 		return x*factorial(x--);
// 	}
// }
// var y=prompt("enter a number");
// var res=factorial(y);
// alert(res);
// ///////////////////////

// function factorial(x){
// 	var i;
// 	var f=1;
// 	for(i=2;i<=x;i++)
// 	{
// 		f=f*i;
// 	}
// 	return f;
// }
// var y=prompt("enter a number");
// var res=factorial(y);
// alert(res);

// function kebabToSnake(str){
// 	var nstr=str.replace(/-/g,"_");
// 	return nstr;
// }
// var keb=prompt("Enter kebab string");
// var res=kebabToSnake(keb);
// alert(res);
////////////////////////////////

// var todo=[];
// do{
// 	var choice=prompt("Enter a choice");
// 	if(choice.toLowerCase()=="new")
// 	{
// 		var x=prompt("what u want to add");
// 		todo.push(x);
// 		console.log(x+" is added to the list")
// 	}
// 	else if(choice.toLowerCase()=="list")
// 	{
// 		console.log("*********")
// 		todo.forEach(function(task){
// 			console.log(task);
// 		} );
// 		console.log("*********");
// 	}
// 	else if(choice.toLowerCase()=="delete"){
// 		var y=prompt("which task you want to remove?");
// 		todo.pop(y);
// 	}

// }while(choice.toLowerCase()!="quit");


// function max(arr){
// 	console.log(Math.max(...arr));
// }


/////////////////////////////

// var movies=[
// 	{
// 		title: "In Burgers",
// 		rating: 5,
// 		hasWatched: true
// 	},
// 	{
// 		title: "Mad max",
// 		rating: 5,
// 		hasWatched: true
// 	},
// 	{
// 		title: "Frozen",
// 		rating: 4.5,
// 		hasWatched: false
// 	},
// 	{
// 		title: "Les Miserables",
// 		rating: 3.5,
// 		hasWatched: false
// 	}];
// 	for(var i=0;i<movies.length;i++)
// 	{
// 		console.log("You have"+  (movies[i].hasWatched?" ":" not ") + "watched \""+ movies[i].title + "\" - "+ movies[i].rating+ " stars");
// 	}

///////////////////////////

var p1=document.getElementById("p1");
var p2=document.getElementById("p2");
var res=document.getElementById("res");
var h1=document.getElementsByTagName("h1");
var p1s=0;
var p2s=0;
var num=document.querySelector("input");
var winScore=5;
var p1Display=document.getElementsByTagName("span")[0];
var p2Display=document.getElementsByTagName("span")[1];

num.addEventListener("change",function(){
	winScore=Number(this.value);
	document.querySelector(".pto").textContent=winScore;
	reset();

})

p1.addEventListener("click",function(){

	if(p1s<winScore && p2s!==winScore)
		p1s++;
	console.log(p1s,winScore,p2s);
	p1Display.textContent=p1s;
	if(p1s===winScore)
		p1Display.style.color="green";

})
p2.addEventListener("click",function(){
	if(p1s!==winScore && p2s<winScore)
		p2s++;
	console.log(p1s,winScore,p2s);
	p2Display.textContent=p2s;
	if(p2s===winScore)
		p2Display.style.color="green";
})
res.addEventListener("click",function(){
	reset();
	})
function reset(){
	p1Display.textContent=0;
	p2Display.textContent=0;
	p1s=0;
	p2s=0;
	p1Display.style.color="black";
	p2Display.style.color="black";
}



