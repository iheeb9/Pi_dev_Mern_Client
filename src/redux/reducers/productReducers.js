import {
    ALL_PRODUCTS_REQUEST, ALL_PRODUCTS_SUCCESS, ALL_PRODUCTS_FAIL, DELETE_PRODUCT,
    Detail_PRODUCTS_REQUEST, Detail_PRODUCTS_SUCCESS, Detail_PRODUCTS_FAIL,
    Add_PRODUCTS_REQUEST, Add_PRODUCTS_SUCCESS, Add_PRODUCTS_FAIL,
    Delete_PRODUCTS_REQUEST, Delete_PRODUCTS_SUCCESS, Delete_PRODUCTS_FAIL,
    CLEAR_ERRORS, ALL_PRODUCTSPAGE_REQUEST, ALL_PRODUCTSPAGE_SUCCESS, ALL_PRODUCTSPAGE_FAIL,
    NEW_REVIEW_REQUEST,
    NEW_REVIEW_SUCCESS,
    NEW_REVIEW_RESET,
    NEW_REVIEW_FAIL,
    DELETE_REVIEW_REQUEST,
    DELETE_REVIEW_SUCCESS,
    DELETE_REVIEW_FAIL,
    DELETE_REVIEW_RESET,
    ALL_REVIEW_REQUEST,
    ALL_REVIEW_SUCCESS,
    ALL_REVIEW_FAIL,
    UPDATE_PRODUCT
} from "../../constants/productConstants";
const initialState = {}

export const productReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case ALL_PRODUCTS_REQUEST:
            return {
                loading: true,
                products: []
            }
        case DELETE_PRODUCT:
            console.log("function", DeleteData(state.products, action.payload._id))
            return {
                ...state,
                products: DeleteData(state.products, action.payload._id)
            }
        case UPDATE_PRODUCT:
            return {
                ...state,
                products: EditData(state.products, action.payload._id, action.payload)
            }
        case ALL_PRODUCTS_SUCCESS:
            return {
                loading: false,
                products: action.payload.data,
                productCount: action.payload.productCount,
                resPerPage: action.payload.resPerPage
            }
        case ALL_PRODUCTS_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }
        default:
            return state;
    }
}
export const productReducerPage = (state = { products: [] }, action) => {
    switch (action.type) {
        case ALL_PRODUCTSPAGE_REQUEST:
            return {
                loading: true,
                products: []
            }
        case DELETE_PRODUCT:
            console.log("function", DeleteData(state.products, action.payload._id))
            return {
                ...state,
                products: DeleteData(state.products, action.payload._id)
            }
        case UPDATE_PRODUCT:
            return {
                ...state,
                products: EditData(state.products, action.payload._id, action.payload)
            }
        case ALL_PRODUCTSPAGE_SUCCESS:
            return {
                loading: false,
                products: action.payload.data,
                productCount: action.payload.productCount,
                resPerPage: action.payload.resPerPage,
            }
        case ALL_PRODUCTSPAGE_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }
        default:
            return state;
    }
}

export const productDetailReducer = (state = { product: [{}] }, action) => {
    switch (action.type) {
        case Detail_PRODUCTS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case Detail_PRODUCTS_SUCCESS:
            return {
                loading: false,
                product: action.payload

            }
        case Detail_PRODUCTS_FAIL:
            return {
                ...state,
                error: null
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }
        default:
            return state;
    }
}

export const productAddReducer = (state = { product: [] }, action) => {
    switch (action.type) {
        case Add_PRODUCTS_REQUEST:
            return {
                loading: true
            }
        case Add_PRODUCTS_SUCCESS:
            return {
                loading: false,
                product: action.payload
            }
        case Add_PRODUCTS_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export const DeleteData = (data, id) => {
    const newData = data.filter(item => item._id !== id)
    return newData;
}

export const EditData = (data, id, post) => {
    const newData = data.map(item =>
        (item._id === id ? post : item)
    )
    return newData;
}
// Product review
export const newReviewReducer = (state = {}, action) => {
    switch (action.type) {
      case NEW_REVIEW_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case NEW_REVIEW_SUCCESS:
        return {
          loading: false,
          success: action.payload,
        };
      case NEW_REVIEW_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case NEW_REVIEW_RESET:
        return {
          ...state,
          success: false,
        };
      case CLEAR_ERRORS:
        return {
          ...state,
          error: null,
        };
      default:
        return state;
    }
  };


export default productReducer
