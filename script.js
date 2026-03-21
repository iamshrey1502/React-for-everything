var form=document.querySelector("form");

form.addEventListener("submit",function(e){
    e.preventDefault();//this line stops the default page reoload behaviour of form on submit
    console.log("Subitted");
});