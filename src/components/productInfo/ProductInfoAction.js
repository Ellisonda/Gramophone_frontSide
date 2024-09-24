export const MODIFY_PRODUCT = 'MODIFY_PRODUCT'

export const modifyProductAction = (payload)=> {
    return {
        type:MODIFY_PRODUCT,
        payload
    }
}