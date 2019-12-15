document.getElementById('orderBook').addEventListener('click',orderBook);

function orderBook() {
        let name = document.getElementById('name').value.trim();
        let surname = document.getElementById('surname').value.trim();
        let email = document.getElementById('email').value.trim();
        let number = document.getElementById('number').value.trim();
        let adress = document.getElementById('adress').value.trim();
        if(name  === ""){
            alert('Enter the name');
            return;
        }else if(surname === ''){
            alert('Enter the surname');
        }else if(email === ''){
            alert("Enter the email");
        }else if(number === ''){
            alert("Enter the number");
        }else if(adress === ''){
            alert("Enter the adress");
        }else{
            alert("Ваше замовлення оформлюється");
        }
    document.getElementById('name').value = "";
    document.getElementById('surname').value = "";
    document.getElementById('email').value = "";
    document.getElementById('number').value = "";
    document.getElementById('adress').value = "";
    for(let i =0;i<arrIdBook.length;i++){
        console.log(arrIdBook[i]);
    }

    saveOrderToDB(name,surname,email,number,adress,arrIdBook);
}

function saveOrderToDB(name,surname,email,number,adress,idBook){
    console.log(name,surname,email,number,adress);
    fetch("/order-books",{
        method:"POST",
        headers: {
            "Content-type": "application/json"
        },
        body:JSON.stringify({name:name,surname:surname,email:email,number:number,adress:adress,idBook:idBook}),
    })
        .catch(error => console.error("Cannot fetch data:",error));
}