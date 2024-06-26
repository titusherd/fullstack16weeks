const API_ENDPOINT = "https://v1.appbackend.io/v1/rows/1j0JvNsLpeXF/"

const query = location.search;
const params = new URLSearchParams(query);
const id = params.get("id");
// const id = "66229674014592fa3f6dc29d"

async function fetchData() {
    const response = await fetch(API_ENDPOINT + id)
    const data = await response.json()
    // console.log(data);
    return data
}

const edit = document.getElementById("edit")
const myModal = document.getElementById("myModal")

const editTitle = document.getElementById("editTitle")
const editCategory = document.getElementById("editCategory")
const editContent = document.getElementById("editContent")


const closeModal = document.getElementById("closeModal")
closeModal.addEventListener('click', () => {
    myModal.classList.add('hidden')
})

edit.addEventListener('click', () => {
    myModal.classList.remove('hidden')
})



const container = document.getElementById("container")
const img = document.getElementById("image")
const title = document.getElementById("title")
const date = document.getElementById("date")
const category = document.getElementById("category")
const content = document.getElementById("content")
const remove = document.getElementById("remove")

const submit = document.getElementById("submit")


async function buildApp() {
    const data = await fetchData()
    console.log(data)

    img.src = data.cover
    title.textContent = data.title


    const createdAt = new Date(data.createdAt)
    date.textContent = createdAt.toLocaleDateString()

    category.textContent = data.category
    content.textContent = data.content

    editTitle.value = data.title
    editCategory.value = data.category
    editContent.value = data.content

    submit.addEventListener('click', async () => {
        const response = await fetch("https://v1.appbackend.io/v1/rows/1j0JvNsLpeXF", {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "_id": data._id, "title": editTitle.value, "content": editContent.value, "category": editCategory.value })
        })
        if (response.ok) {
            window.location.href = `index.html`
        }
    })


    remove.addEventListener('click', async () => {
        fetch("https://v1.appbackend.io/v1/rows/1j0JvNsLpeXF", {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(["6492ea8ee59c52d913d8ca56", "6492ea8ee59c52d913d8cdsc3"])
        })
    })
}

buildApp()

{/* <div id="card" class="grid gap-4">
<div class="border-b-2 pb-4">
    <h2 class="text-7xl font-['PlusJakartaSans'] leading-tight">Flic Twist: the smart button
        improves control of living spaces with a minimalist touch</h2>
    <div class="flex justify-between items-center">
        <div class="flex gap-4 p-2">
            <p class="pr-4 border-r-2">19.04.2024</p>
            <p>Business</p>
        </div>
        <div class="cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                <path fill="currentColor"
                    d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h8.925l-2 2H5v14h14v-6.95l2-2V19q0 .825-.587 1.413T19 21zm4-6v-4.25l9.175-9.175q.3-.3.675-.45t.75-.15q.4 0 .763.15t.662.45L22.425 3q.275.3.425.663T23 4.4t-.137.738t-.438.662L13.25 15zM21.025 4.4l-1.4-1.4zM11 13h1.4l5.8-5.8l-.7-.7l-.725-.7L11 11.575zm6.5-6.5l-.725-.7zl.7.7z" />
            </svg>
        </div>
    </div>
</div>
</div>
<p class="text-2xl">Product design typically serve as problem solver - to enhancing our daily routines
by introducing
experience-focused product innovations. The result, is to improve the way we go about our lives.</p>
</div> */}