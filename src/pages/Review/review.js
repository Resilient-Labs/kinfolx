// store user selection
const ratings = {}

// Select all .star-rating elements
document.querySelectorAll('.star-rating').forEach((ratingElement) => {
    const category = ratingElement.dataset.category

    // display the numeric rating
    const starCount = document.createElement('span')
    starCount.classList.add('star-count')
    starCount.textContent = '0' // default rating text
    ratingElement.appendChild(starCount)

    // Create 5 star images
    for (let i = 1; i <= 5; i++) {
        const starImg = document.createElement('img')
        starImg.src = 'star-white-transp.png'
        starImg.alt = 'star'
        starImg.classList.add('star')
        starImg.dataset.value = i

        // Highlight on hover
        starImg.addEventListener('mouseover', () => {
            highlightStars(ratingElement, i)
        })

        // Reset on mouse leave
        starImg.addEventListener('mouseleave', () => {
            resetStars(ratingElement, ratings[category])
        })

        // Click sets the rating
        starImg.addEventListener('click', () => {
            ratings[category] = i
            highlightStars(ratingElement, i)
            starCount.textContent = i
        })

        // Insert each star before the numeric rating
        ratingElement.insertBefore(starImg, starCount)
    }
})

// temp "fill" for hovered stars
function highlightStars(ratingElement, rating) {
    const stars = ratingElement.querySelectorAll('img.star')
    stars.forEach((star, index) => {
        // "filled" class changes the star image to star-yellow.png
        star.classList.toggle('filled', index < rating)
    })
}

// Reverts stars to whatever the user last selected.
function resetStars(ratingElement, rating) {
    const stars = ratingElement.querySelectorAll('img.star')
    stars.forEach((star, index) => {
        star.classList.toggle('filled', index < (rating || 0))
    })
}

// form submission
document.getElementById('submit-review').addEventListener('click', () => {
    const selectedCompany = document.getElementById('company-select').value
    const newCompany = document.getElementById('new-company').value
    const companyName = newCompany || selectedCompany

    if (!companyName) {
        alert('Please select or add a company name.')
        return
    }

    // Make sure all 7 categories have rating
    if (Object.keys(ratings).length < 7) {
        alert('Please rate all categories before submitting.')
        return
    }

    const comment = document.getElementById('comment').value

    // updated this part to make a post request or whatever we need to do
    console.log({ companyName, ratings, comment })
    alert('Review submitted successfully!')
})
