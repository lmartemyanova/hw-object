export default function orderByProps(obj, sortOrder) {
    let secondOrder = []
    for (const prop in obj) {
        if (sortOrder.includes(prop)) {
            continue
        } else {
            secondOrder.push(prop)
        }
    };
    secondOrder.sort();
    const order = sortOrder.concat(secondOrder);
    let result = [];
    for (const prop of order) {
        result.push({key: prop, value: obj[prop]})
    };
    return result;
};
