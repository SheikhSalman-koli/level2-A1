

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




