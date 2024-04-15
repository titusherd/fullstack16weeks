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
        productCard.classList.add('border-2', 'flex', 'flex-col', 'gap-2', 'w-56', 'justify-center', 'p-2', 'border-gray-200', 'rounded-lg')

        const productImageDiv = document.createElement('div')
        productImageDiv.classList.add('flex', 'justify-center', 'p-4', 'border-2', 'rounded-lg')
        const productImage = document.createElement('img')
        productImage.src = product.image
        productImage.classList.add('w-full', 'h-40', 'object-cover')
        productImageDiv.append(productImage)

        const productDetails = document.createElement('div')
        productDetails.classList.add('flex', 'flex-col', 'gap-2', 'p-2')

        const productName = document.createElement('h3')
        productName.textContent = product.title.slice(0, 16)
        productName.classList.add('text-lg', 'font-semibold')

        const productPrice = document.createElement('p')
        productPrice.textContent = `$ ${product.price}`
        productPrice.classList.add('text-red-500', 'font-bold')

        productDetails.append(productName, productPrice)

        productCard.append(productImageDiv, productDetails)
        productContainer.append(productCard)


    })
}

buildProducts()