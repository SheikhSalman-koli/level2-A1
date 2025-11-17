
type FormatInput = string | number | boolean;

function formatValue(input: FormatInput):FormatInput {
    if (typeof input === 'string') {
        return input.toUpperCase()
    } else if (typeof input === 'number') {
        return input * 10
    } else {
        return !input
    }

}



function getLength(input: string | unknown[]): number {
    if (typeof input === 'string') {
        const splitedInput = input.split('')
        return splitedInput.length
    } else if (Array.isArray(input)) {
        return input.length
    }

    return input
}



class Person {
    name: string;
    age: number

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age
    }

    getDetails() {
        return `'Name: ${this.name}, Age: ${this.age}'`
    }
}



type Books = {
    title: string;
    rating: number
}

function filterByRating(input: Books[]): Books[] {
    const itemsWithHihgRating = input.filter(i => i.rating >= 4)
    return itemsWithHihgRating
}



type Users = {
    id: number;
    name: string;
    email: string;
    isActive: boolean
}

function filterActiveUsers(input: Users[]): Users[] {
    const activeUsers = input.filter(i => i.isActive)
    return activeUsers
}



interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean
}

function printBookDetails(input: Book):void {
    const isAvailable = input.isAvailable ? 'Yes' : 'No'
    console.log(`Title: ${input.title}, Author: ${input.author}, Published: ${input.publishedYear}, Available: ${isAvailable}`);
}



type InputType = string | number

function getUniqueValues(input1: InputType[], input2: InputType[]): InputType[] {

    const makingTowInOne: InputType[] = [...input1, ...input2]

    const withoutDuplicate: InputType[] = []

    for (const i of makingTowInOne) {
        if (!withoutDuplicate.includes(i)) {
            withoutDuplicate.push(i)
        }
    }

    return withoutDuplicate
}



type Products = {
    name: string;
    price: number;
    quantity: number;
    discount?: number
}

function calculateTotalPrice(input: Products[]): number {

    return input.reduce((total, item) => {

        const pricePerItem = item.price * item?.quantity

        const discountAmount = item.discount
            ? pricePerItem * (item.discount / 100)
            : 0

        const haveToPay = pricePerItem - discountAmount

        return total + haveToPay
    }, 0)

}
