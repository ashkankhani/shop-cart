const productList = [
    {
        id: '1',
        title : 'ایرپاد',
        price : 10000,
        image : '/images/airpods.jpg'
    },
    {
        id: '2',
        title : 'هدفون',
        price : 999999,
        image : '/images/headphone.jpg'
    },
    {
        id: '3',
        title : 'آیپد',
        price : 858558,
        image : '/images/ipad.jpg'
    },
    {
        id: '4',
        title : 'مک بوک',
        price : 45666,
        image : '/images/macbook.jpg'
    },

]

function getProductData(id) {
    const productData = productList.find(
        (item) => item.id === id
    )

    return productData;
}

export {getProductData , productList};