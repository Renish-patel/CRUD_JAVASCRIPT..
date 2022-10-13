var i=0;
function addLogisticData() {
	console.log("add");
	let trid ="i_"+i++;
	var ID = document.getElementById('ID').value;
	var ITEMNAME = document.getElementById('ITEM').value;
	var DATE = document.getElementById('date').value;
	var Category = document.getElementById('category').value;
	var X;
	
	if((ID != "") && (ITEMNAME != "") && (DATE != "") && (Category != "")){
	X = "<tr id="+trid+"><td>" + ID +
	 "</td><td>" + 
	 ITEMNAME + 
	"</td><td>" +
	DATE +
	"</td><td>" +
	Category +
	"</td><td><button type='button'class='same' onclick='editRow(this)' id='aa' value='Submit'>EDIT</button><button class='same' type='button'id='ab'onclick='onDelet(this)'>delete</button></td></tr>";

	document.getElementById('list').innerHTML +=X;
	
	document.getElementById('ID').value = "";
	document.getElementById('ITEM').value = "";
	document.getElementById('date').value = "";
	document.getElementById('category').value = "";
}
else{
	 validation('ID','error','ID:');
	 validation('ITEM','iError','ITEM NAME:');
	 validation('date','dError','DATE:');
	 validation('category','sError','CATEGORY:');
}
}

function editRow(A) {
	
	console.log("edit");
	var editD = A.parentElement.parentElement;

	document.getElementById('ID').value = editD.cells[0].innerHTML;
	document.getElementById('ITEM').value = editD.cells[1].innerHTML;
	document.getElementById('date').value = editD.cells[2].innerHTML;
	document.getElementById('category').value = editD.cells[3].innerHTML;

	document.getElementById('update').innerHTML = "update";
	let ff = editD.getAttribute("id"); 
	document.getElementById('update').setAttribute('onclick', 'updateRow('+ff+')');
	
}
function updateRow(editD) {
	console.log("update_ok");
	var ID = document.getElementById('ID').value;
	var ITEMNAME = document.getElementById('ITEM').value;
	var DATE = document.getElementById('date').value;
	console.log("update_ok");
	var Category = document.getElementById('category').value;
	if((ID != "") && (ITEMNAME != "") && (DATE != "") && (Category != "")){

	console.log(editD);
	editD.cells[0].innerHTML= ID;
	console.log(ID);
	editD.cells[1].innerHTML=  ITEMNAME;
	editD.cells[2].innerHTML= DATE;
	editD.cells[3].innerHTML= Category;
	document.getElementById('update').innerHTML = "submit";
	document.getElementById('update').setAttribute('onclick', 'addLogisticData('+editD.getAttribute("id")+')');
	}
	else{
		validation('ID','error','ID:');
		validation('ITEM','iError','ITEM NAME:');
		validation('date','dError','DATE:');
		validation('category','sError','CATEGORY:');
   }
   }
   
function resetform() {
	console.log("reset_ok")
	document.getElementById('ID').value = "";
	document.getElementById('ITEM').value = "";
	document.getElementById('date').value = "";
	document.getElementById('category').value = "";
	document.getElementById('update').innerHTML = "submit";
	document.getElementById('update').setAttribute('onclick', 'addLogisticData()');
}
function onDelet(A) {
	console.log("delete_ok")
	if (confirm("are you sure you want to delete")) {
		let row = A.parentElement.parentElement;
		document.getElementById("list").deleteRow(row.rowIndex);
	
	}
}

//validation of the data 
function validation(eId,errId,fName){
	
	let valid =  document.getElementById(eId).value;
	
	if(valid == ""){
		document.getElementById(errId).innerHTML = fName + " plzz entert the data";
	} else {
		document.getElementById(errId).innerHTML = "";
	}
}
































