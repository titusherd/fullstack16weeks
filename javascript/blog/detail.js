const API_ENDPOINT = "https://v1.appbackend.io/v1/rows/1j0JvNsLpeXF/1"

// const query = location.search;
// const params = new URLSearchParams(query);
// const id = params.get("id");

async function fetchData() {
    const response = await fetch(API_ENDPOINT + 1)
    const data = await response.json()
    return data
}

async function buildApp() {
    const data = await fetchData()
    console.log(data);

}
