




const loader = document.getElementById("loader");
const content = document.getElementById("content");
const local = "http://127.0.0.1:8000"
const server = "https://python-mysql-api.onrender.com"

// async function that loads data
async function loadData() {
    try {

        
        
        const response = await fetch(server); // your API endpoint
        const data = await response.json();


        // hide loader when request is finished
        loader.style.display = "none";
        content.style.display = "flex";
        //.......................................................................................................
        firstPage(data)
        //.......................................................................................................

    } catch (error) {
        loader.innerHTML = "<p>❌ Failed to load data</p>";
    }
}

// start loading
loadData();

function firstPage(data) {
    let fP = `<header class="header">
                            <button class="create_delete_table" onClick="createButton()">Create</button>
                            <button class="create_delete_table" onClick="deleteButton()">Delete</button>
            </header>`
         data.forEach(element => {
            fP += `<button class="tables" onClick="openTable('${element}')">${element}</button>`
         });

        content.innerHTML = fP
}


function createTable() {
    content.innerHTML =`<button>${document.getElementById("table_input").value}</button>` 

}
function deleteButton() {
    content.innerHTML = "<button>Delete</button>"
}

async function openTable(table) {
        loader.style.display = "block";
        content.style.display = "none";
    try {
        
        const response = await fetch(`${server}/${table}`); // your API endpoint
        const data = await response.json();


        // hide loader when request is finished
        loader.style.display = "none";
        content.style.display = "flex";
        //.......................................................................................................
        let td = ""
        let tr = ""
        data.forEach(element => {
           element.forEach(item => {
            const column =
            `
            <td>${item}</td>
            `
            td += column
           })
           tr +=
           `
           <tr>${td}</tr>
           `
           td = ""
        });
        content.innerHTML = ""
        content.innerHTML = `<button class="back-fixed" onclick="backButton()">Back</button>
                            <table border="1">
                            ${tr}
                            </table>
                            `             

        //.......................................................................................................

    } catch (error) {
        loader.innerHTML = "<p>❌ Failed to load data</p>";
    }
}

function backButton() {
    loader.style.display = "block";
    content.style.display = "none";
    loadData()
}

function createButton() {
    let createPage = `<div class="create-table">
                        <button onclick="backButton()">Back</button>
                        <input id="table_input" type="text" placeholder="Table name">
                        <button onClick="createTable()">Create</button>
                     </div>`
    content.innerHTML =  createPage                 
}

