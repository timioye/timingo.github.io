var tablinks=document.getElementsByClassName("tab-links")
var tabcontents=document.getElementsByClassName("tab-contents")
var sidemenu=document.getElementById("sidemenu")
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-links")
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-links")
    document.getElementById(tabname).classList.add("active-tab")
}
function openmenu(){
    sidemenu.style.right="0"
}
function closemenu(){
    sidemenu.style.right="-200px"
}
function sendEmail(){
    Email.send({
        SecureToken:"5fdfbe6f-1368-4691-9340-13397512734b",
        To : 'taonuga@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New Contact Form Enquiry",
        Body : "Name:"+document.getElementById("name").value
               +"<br> Email:" +document.getElementById("email").value
               +"<br> Message:" +document.getElementById("message").value
    }).then(
      message => alert("Message Sent Successfully")
    );
}