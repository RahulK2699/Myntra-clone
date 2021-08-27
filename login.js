function validate() {
    var num = document.getElementById("mobileNum").value;
    console.log(num);
    if(num === "8552891970" || num === "7979739083" || num === "8793635952" || num === "7440786993"){
        window.location.href = "homepage.html";
       
    }else {
        alert("login Id is incorrect");
       
    }
}