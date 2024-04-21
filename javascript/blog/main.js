const API_ENDPOINT = "https://v1.appbackend.io/v1/rows/1j0JvNsLpeXF"

async function fetchData() {
    const response = await fetch(API_ENDPOINT)
    const data = await response.json()
    return data
}

const cardContainer = document.getElementById("cardContainer")

async function buildApp() {
    const fetchedData = await fetchData()
    const datas = fetchedData.data

    datas.forEach(data => {
        console.log(data);

        const card = document.createElement('div')
        card.classList.add('flex', 'gap-8', 'bg-neutral-900', 'px-8', 'py-6', 'rounded-lg', 'cursor-pointer', 'hover:opacity-80', 'transition', 'duration-700', 'ease-in-out')
        card.addEventListener('click', () => {
            window.location.href = `detail.html?id=${data._id}`
        })

        const imgContainer = document.createElement('div')
        imgContainer.classList.add('w-5/12')

        const img = document.createElement('img')
        img.src = data.cover
        img.classList.add('h-60', 'w-full', 'object-cover', 'rounded-lg')

        imgContainer.append(img)

        const content = document.createElement('div')
        content.classList.add('w-7/12', 'flex', 'flex-col', 'justify-between', "font-['PlusJakartaSans']")

        const title = document.createElement('h4')
        title.classList.add('text-3xl')
        title.textContent = data.title

        const dateCategory = document.createElement('div')
        dateCategory.classList.add('flex', 'gap-4')

        const date = document.createElement('div')
        date.classList.add('border-r-2', 'pr-4')

        const dateText = document.createElement('p')
        dateText.classList.add('text-xl')
        const createdAt = new Date(data.createdAt);
        dateText.textContent = createdAt.toLocaleDateString();


        date.append(dateText)

        const category = document.createElement('div')

        const categoryText = document.createElement('p')
        categoryText.classList.add('text-xl')
        categoryText.textContent = data.category

        category.append(categoryText)

        dateCategory.append(date)
        dateCategory.append(category)

        content.append(title)
        content.append(dateCategory)

        card.append(imgContainer)
        card.append(content)

        cardContainer.append(card)
    });
}

buildApp();

{/* <div id="card"
    class="flex gap-8 bg-neutral-900 px-8 py-6 rounded-lg cursor-pointer  hover:opacity-90 transition duration-700 ease-in-out">
    <div id="imgContainer" class="w-5/12">
        <img src="https://images.unsplash.com/photo-1548516173-3cabfa4607e9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmxhY2slMjBhbmQlMjB3aGl0ZXxlbnwwfHwwfHx8MA%3D%3D"
            alt="" class="h-60 w-full object-cover rounded-lg">
    </div>
    <div id="content" class="w-7/12 flex flex-col justify-between font-['PlusJakartaSans']">
        <h4 class="text-3xl">Flic Twist: the smart button improves control of
            living spaces with a
            minimalist touch</h4>
        <div class="flex gap-4">
            <div class="border-r-2 pr-4">
                <p class="text-xl">19.04.2024</p>
            </div>
            <div>
                <p class="text-xl">Business</p>
            </div>
        </div>
    </div>
</div> */}

