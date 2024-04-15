async function getProducts() {
    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json()
    return data
}


async function buildProducts() {
    const products = await getProducts()

    const productContainer = document.getElementById('productContainer')
    console.log(productContainer);
    products.forEach(product => {
        const productCard = document.createElement('div')
        productCard.classList.add('border-2', 'flex', 'flex-col', 'gap-2', 'w-56', 'justify-center', 'p-2')

        const productImageDiv = document.createElement('div')
        productImageDiv.classList.add('flex', 'justify-center', 'p-4', 'border-2', 'rounded-lg')
        const productImage = document.createElement('img')
        productImage.src = product.image
        productImage.classList.add('w-56', 'h-56')
        productImageDiv.append(productImage)

        const productName = document.createElement('h3')
        productName.textContent = product.title

        const productPrice = document.createElement('p')
        productPrice.textContent = product.price

        productCard.append(productImageDiv, productName, productPrice)
        productContainer.append(productCard)


    })
}

buildProducts()