const combineReducer = (app) => {
    const list_object = Object.keys(app)
    let result = {}
    list_object.forEach(item => {
        result = {...result, ...app[item].reducer}
    })
    return result
}


const combineRouter = (app) => {
    const list_object = Object.keys(app)
    let result = []
    list_object.forEach(item => {
        result.push(...app[item].router)
    })
    return result
}


const combineSagas = (app) => {
    const list_object = Object.keys(app)
    let result = []
    list_object.forEach(item => {
        // console.log("item", item.)
        result.push(app[item].sagas.root)
    })
    return result
}

export {
    combineReducer,
    combineRouter,
    combineSagas
}