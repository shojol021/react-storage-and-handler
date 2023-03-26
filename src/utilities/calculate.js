const addData = (first, second) => {
    const total = first + second;
    return total;
}

const difference = (first, last) => {
    const result = first - last;
    return Math.abs(result)
}

const addToCart = (id) => {

    let shoppingCart = {};


    const storedCart = localStorage.getItem('shopping-cart')
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }

    const currentValue = shoppingCart[id];

    if (currentValue) {
        shoppingCart[id] = currentValue + 1;
    }
    else {
        shoppingCart[id] = 1;
    }

    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))

}

const removeCart = (id) => {
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        const shoppingCart = JSON.parse(storedCart);
        if (id in shoppingCart){
            delete shoppingCart[id];
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
        }
        else{
            console.log('nai');
        }
    }

}

export { addData, difference, addToCart, removeCart};