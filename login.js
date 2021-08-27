function validate() {
    var num = document.getElementById("mobileNum").value;
    console.log(num);
    if(num === "8552891970"){
        window.location.href = "homepage.html";
       
    }else {
        alert("login Id is incorrect");
       
    }
}