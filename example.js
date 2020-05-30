const jsonProduct = require('./example-data.json')
const findProduct = jsonProduct.find(f => f.id === 10207)
const sumProduct = jsonProduct.reduce((result, json) => {
    return result + json.price
}, 0)
const vatBoolean = jsonProduct.every((f) => {
    return f.vat_percent === 0
})
const subProductPrice = jsonProduct.filter(f => !!f.products.length && f.products.every(s => s.price <= 200))
const addKeyIsToggle = jsonProduct.map(f => {
    return { ...f, isToggle: false }
})
const totalPrice = jsonProduct.filter(t => !!t.products.length).map(f => {
    const productsTotalPrice = f.products.reduce((result, json) => {
        return result + json.price
    }, 0)
    return productsTotalPrice && { name: f.name, productsTotalPrice }
})
const editPrice = jsonProduct.filter(f => !f.is_editable_price).map(f => {
    const totalSubProductWeight = f.products.reduce((result, json) => {
        return result + json.weight
    }, 0)

    return { name: f.name, totalSubProductWeight }
})
const [findIndex] = jsonProduct.filter(f => !!f.products.length && f.products.some(t => t.type && !!t.type.length))
const typeProduct = jsonProduct.filter(f => !!f.products.length && f.products.every(t => t.type && !!t.type.length)).reduce((result, data) => {
    const array = data.products.map(p => {
        return p.type.reduce((r, d) => { return r.concat(d.id)}, [])
    })
    return result.concat(...array)
}, [])

console.log('ข้อ 1 -->', findProduct.name);
console.log('ข้อ 2 -->', sumProduct);
console.log('ข้อ 3 -->', vatBoolean);
console.log('ข้อ 4 -->', subProductPrice);
console.log('ข้อ 5 -->', addKeyIsToggle);
console.log('ข้อ 6 -->', totalPrice);
console.log('ข้อ 7 -->', editPrice);
console.log('ข้อ 8 -->', findIndex);
console.log('ข้อ 9 -->', typeProduct);




