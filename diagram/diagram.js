let list;
document.addEventListener("DOMContentLoaded", async () => {
    console.log("succesfully included!");
    console.log( GetData());
    console.log(list);
});


async function GetData() {
    let backendUrl = 'https://retoolapi.dev/w3zDNu/diagram';
    await fetch(backendUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error("HTTP error " + response.status);
            }
            console.log(response);
            for(let i = 0; i<response.json().length; i++)
            {
                console.log("paradicsom");
            }
            return response.json();
        })


        .then(json => {
            list = json;
            console.log("jsonjson")
            json.forEach(element => {
                list.push(element.ertek)
                
            });
        })

        .catch(function () {
            console.log("Hiba!!!!");
            this.dataError = true;
        })
        console.log(list);   
}