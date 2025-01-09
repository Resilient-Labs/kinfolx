//a function to bound the rating between 1 and 5
const validateRatings = (rating) => {
    return Math.max(1, Math.min(rating, 5))
}

export default validateRatings