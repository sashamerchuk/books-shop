let data;
let arrIdBook= [];
function showAllBooks(){
    let req = new XMLHttpRequest();
    req.open('GET',"/books",true);
    req.send();
    req.onreadystatechange = function () {
        if(req.readyState === XMLHttpRequest.DONE){
            if(req.status != 200){
                console.log("Something going wrong!");
            }else{
                data = JSON.parse(req.responseText);
                showBooks(data);
            }
        }
    }
}
let array = [];
function showBooks(data){
    for(let i =0;i<data.length + 1; i++){
        if(localStorage.getItem(i) !== null) {
            arrIdBook.push(data[i].nameBook);
            array.push(data[i].price);
            addBooks(data[i].idBook, data[i].imgSrc, data[i].price, data[i].nameBook, data[i].author);
            totalArea();
        }else{
        }
    }
}

function addBooks(idBook,imgSrc,price,nameBook,author) {
    const tdImg = document.createElement('td');
    tdImg.className = "cart_product";
    const image = document.createElement('img');
    image.src = imgSrc;
    image.className = "foto";
    image.id = idBook;
    tdImg.append(image);
    const tdPrice = document.createElement("td");
    tdPrice.className = "cart_price";
    tdPrice.style.width = "100px";
    const pPrice = document.createElement("p");
    pPrice.innerHTML = price;
    tdPrice.append(pPrice);
    const tdQuantity = document.createElement("td");
    tdQuantity.className = "cart_quantity";


    const tdDelete = document.createElement('td');
    tdDelete.className='cart_delete';
    const idp = document.createElement('p');
    idp.innerHTML = idBook;
    idp.style.display = 'none';
    tdDelete.append(idp);
    const aDelete = document.createElement("a");
    aDelete.className="cart_quantity_delete";
    aDelete.href = "#";
    const iDelete = document.createElement("i");
    iDelete.className="fa fa-times";
    aDelete.append(iDelete);
    tdDelete.append(aDelete);
    const tr = document.createElement('tr');
    tr.append(tdImg);
    tr.append(tdPrice);
    tr.append(tdDelete);
    childNode = document.querySelector('tbody');
    childNode.append(tr);
}

showAllBooks();
function totalArea(){
    let counter = 0;
    for(let i =0; i<array.length;i++){
        counter += Number(array[i]);
    }
    document.querySelector('.priceBook').innerHTML = counter;
    document.querySelector('.allPrice').innerHTML =counter + Number(document.querySelector('.delivery').innerHTML);
}

setTimeout(deleteButton,1000);
function deleteButton() {
    let delButton = document.querySelectorAll(".cart_delete");
    for(let i =0;i<delButton.length;i++){
        document.querySelectorAll(".cart_quantity_delete")[i].addEventListener('click',deleteIdBookFromLS);
    }
}
function deleteIdBookFromLS() {
    let value = this.parentNode.querySelector('p');
    let tbody = document.querySelector('tbody');
    tbody.innerHTML = '';
    array = [];
    console.log(value);
    localStorage.removeItem(Number(value.innerHTML));
    showBooks(data);

}