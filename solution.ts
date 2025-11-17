

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



function getLength(input: any): number{
    if(typeof input === 'string'){
        const splitedInput = input.split('')
        return splitedInput.length
    }else if(Array.isArray(input)){
        return input.length
    }
    return input
}




