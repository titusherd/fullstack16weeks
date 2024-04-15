const API_ENDPOINT = "https://digimon-api.vercel.app/api/digimon";
async function getData() {
    const res = await fetch(API_ENDPOINT)
    const data = await res.json()
    // console.log(data);
    return data
}
// getData()

async function buildApp() {
    const digimons = await getData()
    const digimonContainer = document.getElementById('digimonContainer')

    digimons.forEach(digimon => {
        const digimonCard = document.createElement('div')
        digimonCard.classList.add('digimon-card')

        const digimonName = document.createElement('h3')
        digimonName.textContent = digimon.name

        const digimonImage = document.createElement('img')
        digimonImage.src = digimon.img

        digimonCard.append(digimonName)
        digimonCard.append(digimonImage)

        digimonContainer.append(digimonCard)
    })
}

buildApp()