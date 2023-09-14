import axios from 'axios'


let client = axios.create({
    baseURL: 'https://dummyjson.com',
    headers: { 'Content-Type': 'application/json' },
})

class apiService{
    async login(data) {
        let res = await client({
            url: '/auth/login',
            method: 'POST',
            data: data
        })
        return res
    }

    async getProducts(){
        let res = await client({
            method: 'GET',
            url: '/products?limit=6'
        })
        return res
    }

    async getAllProducts(count){
        let res = await client({
            method: 'GET',
            url: `/products?limit=${count}`
        })
        return res
    }

    async getSingleProduct(id){
        let res = await client({
            method: 'GET',
            url: `/products/${id}`
        })
        return res
    }
}

export default new apiService