const loader = document.getElementById("loader");
const content = document.getElementById("content");

// async function that loads data
async function loadData() {
    try {
        
        const response = await fetch("https://python-mysql-api.onrender.com"); // your API endpoint
        const data = await response.json();


        // hide loader when request is finished
        loader.style.display = "none";
        content.style.display = "flex";
        //.......................................................................................................
        let con = ''
         data.forEach(element => {
            con += `<button class = "tables">${element}</button>`
         });




        content.innerHTML = con
        //.......................................................................................................

    } catch (error) {
        loader.innerHTML = "<p>❌ Failed to load data</p>";
    }
}

// start loading
loadData();

