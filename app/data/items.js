const productList = [
    {
        id: '1',
        title : 'اسپرسو',
        price : 10000,
        image : '/images/spresso.JPG'
    },
    {
        id: '2',
        title : 'لاته',
        price : 999999,
        image : '/images/latte.JPG'
    },
    {
        id: '3',
        title : 'قهوه ترک',
        price : 858558,
        image : '/images/turk_coffee.JPG'
    },
    {
        id: '4',
        title : 'چای',
        price : 45666,
        image : '/images/tea.jpg'
    },

]

function getProductData(id) {
    const productData = productList.find(
        (item) => item.id === id
    )

    return productData;
}

export {getProductData , productList};