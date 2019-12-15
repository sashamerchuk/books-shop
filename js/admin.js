let admin = prompt("Enter the name login",'admin...');
let password = prompt("Enter the password",1);
if(admin === 'admin'&& password === 'sasha'){
    console.log("Success");

document.getElementById('addImageButton').addEventListener('click',addImage);
document.getElementById('sendBookButton').addEventListener('click',sendBook);

function addImage() {
    const input = document.querySelector('input[type=file]');
    const uploadImage = document.getElementById('uploadedImage');
    if(input.files[0] != null){
        uploadImage.setAttribute('src',`images/home/${input.files[0].name}`);
    }
}


function sendBook(){
    let imgSrc = document.getElementById('uploadedImage').getAttribute('src');
    let nameBook = document.getElementById('nameBook').value.trim();
    let price = document.getElementById('price').value.trim();
    let author =  document.getElementById('author').value.trim();
    let idBook = document.getElementById('idBook').value.trim();
    if(nameBook === "" || nameBook== null){
        alert("Add the name book!!!");
        return;
    }
    if(price ==="" || price ==null){
        alert("Ad the price to book!!!");
        return;
    }
    if(author ==="" || author == null){
        alert("Add the author to book!!!");
        return;
    }
    if(idBook ==="" || idBook == null){
        alert("Add the id book!!!");
    }

    if(sendBookToServer(idBook,imgSrc,price,nameBook,author)){
        alert("Successfully send to server");
    };

   document.getElementById('nameBook').value = "";
   document.getElementById('price').value = "";
   document.getElementById('author').value = "";
   document.getElementById('idBook').value = "";

}

function sendBookToServer(idBook,imgSrc,price,nameBook,author) {
    fetch("/books",{
        method:"POST",
        headers: {
            "Content-type": "application/json"
        },
        body:JSON.stringify({idBook:idBook,imgSrc:imgSrc,price:price,nameBook:nameBook,author:author}),
    })
        .catch(error => console.error("Cannot fetch data:",error));
}}else{
    alert("Ви не маєте доступу до цієї сторінки!");
    window.location = "http:index.html";
}