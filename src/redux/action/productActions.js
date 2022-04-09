import axios from 'axios';
import {
    ALL_PRODUCTS_REQUEST, ALL_PRODUCTS_SUCCESS, ALL_PRODUCTS_FAIL,
    Detail_PRODUCTS_REQUEST, Detail_PRODUCTS_SUCCESS, Detail_PRODUCTS_FAIL,
    Add_PRODUCTS_REQUEST, Add_PRODUCTS_SUCCESS, Add_PRODUCTS_FAIL,
    Delete_PRODUCTS_REQUEST, Delete_PRODUCTS_SUCCESS, Delete_PRODUCTS_FAIL,
    CLEAR_ERRORS, ALL_PRODUCTSPAGE_REQUEST, ALL_PRODUCTSPAGE_SUCCESS, ALL_PRODUCTSPAGE_FAIL,
    DELETE_PRODUCT,
    UPDATE_PRODUCT,
} from "../../constants/productConstants";
import { imageUpload } from '../../utils/uploadimage';


export const getProducts = (keyword = '', currentPage, category) => async (dispatch) => {
    try {
        dispatch({ type: ALL_PRODUCTS_REQUEST })

        const { data } = await axios.get("/api/product/allp")
        dispatch({
            type: ALL_PRODUCTS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ALL_PRODUCTS_FAIL,
            payload: error.response.data.message
        })
    }
}
export const getproductpage = (keyword = '', currentPage, category, price) => async (dispatch) => {
    try {
        dispatch({ type: ALL_PRODUCTSPAGE_REQUEST })
        let link = `/api/product/all?keyword=${keyword}&page=${currentPage}&price[lte]=${price[1]}&price[gte]=${price[0]}`
        console.log('price', link)
        if (category) {
            link = `/api/product/all?keyword=${keyword}&page=${currentPage}&category=${category}`
            console.log("priceeeeeeeeeeeeeeeeeeeeeeeee", link)
        }
        const { data } = await axios.get(link)
        dispatch({
            type: ALL_PRODUCTSPAGE_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ALL_PRODUCTSPAGE_FAIL,
            payload: error.response.data.message
        })
    }
}

export const getProductDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: Detail_PRODUCTS_REQUEST })

        const { res } = await axios.get(`/api/product/find/${id}`)
        dispatch({
            type: Detail_PRODUCTS_SUCCESS,
            payload: res.data


        })
        console.log(`detaaaiiiillllllssss`, res.data)
    } catch (error) {
        dispatch({
            type: Detail_PRODUCTS_FAIL,
            payload: error.response.data.message
        })
    }
}
export const AddProduct = (name, description, images, countInStock, price, category,red) => async (dispatch) => {
    let media = []

    try {
        dispatch({ type: Add_PRODUCTS_REQUEST })
        if (images.length > 0) media = await imageUpload(images)


        const { data } = await axios.post(`/api/product/add`, { name, description, image: media, price, countInStock, category })
        console.log(data)
        dispatch({
            type: Add_PRODUCTS_SUCCESS,
            payload: data
        })
        red.push('/listp')
    } catch (error) {
        dispatch({
            type: Add_PRODUCTS_FAIL,
            payload: error.response.data.message
        })
    }
}
export const DeleteProduct = (id) => async (dispatch) => {
    try {



        const { data } = await axios.delete(`/api/product/del/${id}`)
        console.log("efbnvfklb222", data)
        dispatch({
            type: DELETE_PRODUCT,
            payload: data.product,
        })
    } catch (error) {

    }
}

export const UpdateProduct = (product, history) => async (dispatch) => {
    let media = []
    console.log("hous", product)
    const imgNewUrl = product.image.filter(img => !img.url)
    const imgOldUrl = product.image.filter(img => img.url)
    try {
        if (imgNewUrl.length > 0) media = await imageUpload(imgNewUrl)
        const { data } = await axios.put(`/api/product/up/${product.id}`, { name: product.name, image: [...imgOldUrl, ...media], description: product.description, category: product.category, price: product.price, stock: product.countInStock })
        console.log("countinstock", product.countInStock)
        dispatch({
            type: UPDATE_PRODUCT,
            payload: data.data
        })
        history.push('/listp')
        console("malaupdate", data.data)

        // product.history.push('/listp')
    } catch (error) {

    }
}

//clear Errors 
export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })
}
