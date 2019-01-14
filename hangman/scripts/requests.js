const getPuzzle = async (wordCount) => {
    const response = await fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`)

    if (response.status === 200) {
        const data = await response.json()
        return data.puzzle
    } else {
        throw new Error('Unable to get puzzle')
    }
}

const getCountryDetails = async (countryCode) => {
    const response = await fetch('//restcountries.eu/rest/v2/all')

    if(response.status === 200) {
        let data = await response.json()
        return data.find((country) => country.alpha2Code === countryCode)
    } else {
        throw new Error('Unable to find country')
    }
}

const getLocation =  async () => {
    const response = await fetch('//ipinfo.io/json?token=09c9c2c45dc035')

    if (response.status === 200) {
       return response.json()
    } else {
        throw new Error('An error has occured')
    }
}

const getCurrentCountry = async () => {
    const location = await getLocation()
    return getCountryDetails(location.country)
}