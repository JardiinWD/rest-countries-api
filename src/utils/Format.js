
/** I've create this utils for Formatting numbers with new Inlt formatter
 * 
 * @param {number} number The number that I want to format
 * @returns {number} The formatted number
 */
export const FormatNumber = (number) => {
    return new Intl.NumberFormat('en-US').format(number)
}



