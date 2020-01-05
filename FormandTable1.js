function ft(){
console.log(document.getElementById("name").value);
var h=[];
var a=document.getElementById("name").value;
var b=document.getElementById("ag").value;
var c=document.getElementById("con").value;
var d=document.getElementById("ste").value;
var e=document.getElementById("ct").value;
var f=document.querySelector('input[name="gender"]:checked').value;
var g=document.querySelector('input[name="maritalstatus"]:checked').value;
document.getElementsByName('skills[]').forEach(function(element){
    if (element.checked){
        h.push(element.value)
    }
})
var i=document.getElementById("abt").value;
document.getElementById("tr1").innerHTML="<tr><td>"+a+"</td>"+"<td>"+b+"</td>"+"<td>"+c+"</td>"+"<td>"+d+"</td>"+"<td>"+e+"</td>"+"<td>"+f+"</td>"+"<td>"+g+"</td>"+"<td>"+h+"</td>"+"<td>"+i+"</td></tr>";
}