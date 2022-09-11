export const mapHelper = (obj, compareItem, item, property) => {

    return obj.map(u => {
        if(u[compareItem] === item) {
            return {...u, ...property}
        }
        return u
    })

}