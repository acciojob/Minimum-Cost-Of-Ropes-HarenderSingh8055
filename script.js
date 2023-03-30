function minCostToFormRope() {
	// event.preventDefault();
	var firstinput=document.querySelector("#rope-lengths").value;
    var arr=firstinput.split(",");
    arr.sort(function (a, b) {
    return a - b;
  });

var cost=0;
while(arr.length>1){
	var result=Number(arr[0])+Number(arr[1]);
	arr.splice(0,2);
	arr.push(result);
	cost+=result;
	arr.sort(function(a,b){
		return a-b;
	});
}
document.getElementById("result").textContent=cost;	
}
/// {4,2,7,6,9}
// function minCostToFormRope() {
// 	// event.preventDefault();
// 	var inputData = document.querySelector("input").value;
// 	var arr = inputData.split(",");
// 	arr.sort(function(a,b){return a-b});

// 	var cost = 0;
// 	while(arr.length>1){
// 		var result = Number(arr[0]) + Number(arr[1]); //6
// 		arr.splice(0,2); //7,6,9
// 		arr.push(result);
// 		cost = cost + result;
// 		arr.sort(function(a,b){ return a-b});
// 	}
// 	document.getElementById("result").textContent=result;	
// }
