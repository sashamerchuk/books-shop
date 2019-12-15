
function showAllBooks(){
        let req = new XMLHttpRequest();
        req.open('GET',"/books",true);
        req.send();
        req.onreadystatechange = function () {
            if(req.readyState === XMLHttpRequest.DONE){
                if(req.status != 200){
                    console.log("Something going wrong!");
                }else{
                    let data = JSON.parse(req.responseText);
                    showBooks(data);
                }
            }
        }
    }

    function showBooks(data){
        for(let i =0;i<data.length; i++){
            addBooks(data[i].idBook,data[i].imgSrc,data[i].price,data[i].nameBook,data[i].author);
        }
    }

    function addBooks(idBook,imgSrc,price,nameBook,author) {
        const div = document.createElement('div');
        div.className = "col-sm-4";
        const divproduct  = document.createElement("div");
        divproduct.className = "product-image-wrapper";
        const singleProduct = document.createElement("div");
        singleProduct.className = "single-products";
        const productInfo = document.createElement("div");
        productInfo.className = "productinfo text-center";
        productInfo.id = idBook;
        const img = document.createElement("img");
        img.src = imgSrc;
        img.className = "foto";
        const h2 = document.createElement("h2");
        h2.className = "price";
        h2.innerHTML = price;
        const p = document.createElement("p");
        p.className = "name_book";
        p.innerHTML = nameBook;
        const pAuthor = document.createElement("p");
        pAuthor.className = "author";
        pAuthor.innerHTML = author;
        const button = document.createElement("button");
        button.className = "btn btn-default add-to-cart addBookButton";
        const i = document.createElement("i");
        i.className = "fa fa-shopping-cart";
        button.innerHTML = "Додати в корзину";
        button.append(i);
        productInfo.append(img);
        productInfo.append(h2);
        productInfo.append(p);
        productInfo.append(pAuthor);
        productInfo.append(button);
        singleProduct.append(productInfo);
        divproduct.append(singleProduct);
        div.append(divproduct);
        const childNode = document.getElementsByClassName('features_items');
        childNode[0].append(div);
    }

    showAllBooks();


setTimeout(addBookToLocalStorage,1000);
function addBookToLocalStorage(idBook){
    const button = document.querySelectorAll('.addBookButton');
    for(let i=0;i<button.length;i++){
        document.querySelectorAll('.addBookButton')[i].addEventListener('click',addBooksIdToLocalStorage);
    }
}

function addBooksIdToLocalStorage() {
    console.log(this.parentNode.id);
    localStorage.setItem(this.parentNode.id,JSON.stringify(this.parentNode.id));
    alert("succesfully sent to local storage")
}