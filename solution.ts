

function formatValue(input: string | number | boolean): string | number | boolean {
    if (typeof input === 'string') {
        return input.toUpperCase()
    } else if (typeof input === 'number') {
        return input * 10
    } else if (typeof input === 'boolean') {
        return !input
    }

    return input
}



function getLength(input: any): number {
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
    if (itemsWithHihgRating) {
        return itemsWithHihgRating
    }

    return input
}



type Users = {
    id: number;
    name: string;
    email: string;
    isActive: boolean
}

function filterActiveUsers(input: Users[]): Users[] {
    const activeUsers = input.filter(i => i.isActive)
    if (activeUsers) {
        return activeUsers
    }

    return input
}



interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean
}

function printBookDetails(input: Book) {
    const isAvailable = input.isAvailable ? 'Yes' : 'No'
    console.log(`Title: ${input.title}, Author: ${input.author}, Published: ${input.publishedYear}, Available: ${isAvailable}`);
}



function getUniqueValues(input1: any, input2: any): any[] {

    const makingTowInOne = [...input1, ...input2]

    const withoutDuplicate: any = []

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

