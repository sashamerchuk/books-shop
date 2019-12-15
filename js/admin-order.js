let arrName = [];
function showAllOrders(){
    let req = new XMLHttpRequest();
    req.open('GET',"/order-books",true);
    req.send();
    req.onreadystatechange = function () {
        if(req.readyState === XMLHttpRequest.DONE){
            if(req.status != 200){
                console.log("Something going wrong!");
            }else{
                let data = JSON.parse(req.responseText);
                showOrders(data);
            }
        }
    }
}
function showOrders(data){
    for(let i =0;i<data.length; i++){
        arrName.push(data[i].name);
        addOrders(data[i].name, data[i].surname, data[i].email, data[i].number, data[i].adress,data[i].idBook);
    }
}
for(let i =0;i<arrName;i++){
    console.log(arrName[i]);
}
function addOrders(name,surname,email,number,adress,idBook) {
    let flexParent = document.createElement('div');
    flexParent.className = `flexParent ${name}`;
    //
    // let idDiv = document.createElement('div');
    // idDiv.className = "flexChild";
    // idDiv.innerHTML = id;

    let nameDiv = document.createElement('div');
    nameDiv.className = "flexChild";
    nameDiv.innerHTML = name + " " + surname;

    let emailDiv = document.createElement('div');
    emailDiv.className = 'flexChild ';
    emailDiv.innerHTML = email;

    let numberDiv = document.createElement('div');
    numberDiv.className = 'flexChild';
    numberDiv.innerHTML = number;

    let adressDiv = document.createElement('div');
    adressDiv.className = "flexChild";
    adressDiv.innerHTML =  adress;
    let books = document.createElement('div');
    books.className  = "flexChild";
    books.innerHTML = idBook;
    flexParent.append(nameDiv);
    flexParent.append(emailDiv);
    flexParent.append(numberDiv);
    flexParent.append(adressDiv);
    flexParent.append(books);

    let parentOrders = document.getElementsByClassName('order');
    parentOrders[0].append(flexParent);

}

showAllOrders();
