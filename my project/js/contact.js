let contact=document.getElementById("form").required;
let btn=document.getElementById("btn");
 let myInput=document.getElementsByTagName("input");


btn.addEventListener("click",()=>{
for(let i=0;i<myInput.length;i++){
    if(myInput[i].value===""){
    alert("please enter your details")}
    else{
        alert("thank you!")
    }
    }});










    let myArr=[];



let myBtn = document.getElementById("btn");
let myForm=document.getElementById("form");



 myForm.addEventListener("submit", () => {
  let name = document.getElementById("name");
  let tmpName = name.value;
  let jsName = JSON.stringify(tmpName);
  window.localStorage.setItem("name", jsName);
  name.value = " "
 
  let lastName = document.getElementById("lastname");
  let tmpLast = lastname.value;
  let lTName = JSON.stringify(tmpLast);
  window.localStorage.setItem("last name", lTName);
  lastName.value = " "

  let email=document.getElementById("email");
  let tmpEmail=email.value;
  let mail=JSON.stringify(tmpEmail);
  window.localStorage.setItem("Email",mail)

  let msg=document.getElementById("msg")
  let tmpMsg=msg.value;
  let usermsg=JSON.stringify(tmpMsg);
  window.localStorage.setItem("msg",usermsg);



  let newObject = {
    name: tmpName,
    lastName:tmpLast,
    email:tmpEmail,
    msg:tmpMsg,
  };

  myArr.push(newObject);


}  );



