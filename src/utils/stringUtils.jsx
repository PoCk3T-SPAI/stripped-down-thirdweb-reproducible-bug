// Helping functions
export function capitalizeFirstLetter(str) {    
    if (!str) {
        return ''
    }
    return str[0].toUpperCase() + str.slice(1);
}

export function addressSnippet(str) {
    if (!str) {
        return '';
    }
    const first4 = str.slice(0, 4);
    const last4 = str.slice(-4);
    return first4 + '...' + last4
}