let selectedRow = null;

function onFormSubmit(e) {
    event.preventDefault();
    const formData = readFormData();
    if(selectedRow == null){
        insertNewRecord(formData);
    }else{
        updateRecord(formData);
    }
    resetForm();
}

function readFormData() {
    const formData = {};
    formData["productCode"] = document.querySelector("#productCode").value;
    formData["product"] = document.querySelector("#product").value;
    formData["qty"] = document.querySelector("#qty").value;
    formData["perPrice"] = document.querySelector("#perPrice").value;
    return formData;
}

function insertNewRecord(data) {
    const table = document.querySelector("#storeList").getElementsByTagName('tbody')[0];

    const newRow = table.insertRow(table.length);
    
    const cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.productCode;
    const cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.product;
    const cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.qty;
    const cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.perPrice;

    const cell5 = newRow.insertCell(4);
    cell5.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.querySelector("#productCode").value = selectedRow.cells[0].innerHTML;
    document.querySelector("#product").value = selectedRow.cells[1].innerHTML;
    document.querySelector("#qty").value = selectedRow.cells[2].innerHTML;
    document.querySelector("#perPrice").value = selectedRow.cells[3].innerHTML;
}

function updateRecord (formData){
    selectedRow.cells[0].innerHTML = formData.productCode;
    selectedRow.cells[1].innerHTML = formData.product;
    selectedRow.cells[2].innerHTML = formData.qty;
    selectedRow.cells[3].innerHTML = formData.perPrice;
}

function onDelete(td) {
    if(confirm('Do you want to delete record?')) {
        const row = td.parentElement.parentElement;
        document.querySelector('#storeList').deleteRow(row.rowIndex);
        resetForm();
    }
}

function resetForm(){
    document.querySelector('#productCode').value = '';
    document.querySelector('#product').value = '';
    document.querySelector('#qty').value = '';
    document.querySelector('#perPrice').value = '';
    selectedRow = null;
}