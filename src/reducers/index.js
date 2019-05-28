const initialState = {
    balls: [
        {marked: false, name: "Babolat Rolan Garros", link:"https://www.decathlon.co.uk/media/817/8174443/big_820165.jpg", price:500},
        {marked: false, name: "Wilson US Open", link:"https://cdn.shopify.com/s/files/1/2169/4789/products/WilsonUSOpenBall_2000x.jpeg?v=1515849549", price:500},
        {marked: false, name: "Babolat TEAM", link:"https://www.decathlon.co.uk/media/605/6054107/big_5945.jpg", price:500}
    ]
}

function reducer(state= initialState, action) {
    switch(action.type){
        default:return state;
    }
}

export default reducer;