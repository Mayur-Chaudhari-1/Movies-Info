const API_KEY = "a7a937d8a49132b8c30f73dad2de9524"
const BASE_URL = "https://api.themoviedb.org/3"

export const getPopularMovies = async () => {
    const pageNumbers = [1, 2, 3, 4, 5]
    const responses = await Promise.all(
        pageNumbers.map((page) =>
            fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&page=${page}`),
        ),
    )

    const dataPages = await Promise.all(responses.map((response) => response.json()))
    const allResults = dataPages.flatMap((data) => data.results || [])
    return allResults
}

export const searchMovies = async (query) => {
    const response = await fetch(
        `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`,
    )
    const data = await response.json()
    return data.results
}
