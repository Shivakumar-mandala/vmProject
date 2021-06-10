
var result
function getValues() {
firstnum=Number(document.getElementById('firstnum').value)
 secondnum=Number(document.getElementById('secondnum').value )
}
function getAdd()
{
getValues()
var result=firstnum+secondnum
document.getElementById('myResult').innerHTML=result
}
function getSub()
{
    getValues()
var result=firstnum-secondnum
document.getElementById('myResult').innerHTML=result
}
function getDiv()
{
    getValues()
var result=firstnum/secondnum
document.getElementById('myResult').innerHTML=result
}
function getMul()
{
    getValues()
var result=firstnum*secondnum
document.getElementById('myResult').innerHTML=result
}