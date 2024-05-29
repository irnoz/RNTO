export const getMovies = async (categoryId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            fetch(`http://localhost:8080/${categoryId}.json`)
                .then(res => res.json())
                .then(res => resolve(res))
        }, 2000)
    })
}