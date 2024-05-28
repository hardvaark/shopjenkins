export const fetchData = async (inputValue) => {
  if (!inputValue) {
    return false
  }

  const url = `http://localhost:9000/age/${inputValue}` // Replace with your API endpoint
  try {
    const response = await fetch(url)

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`)
    }

    const apiData = await response.json()
    return apiData
  } catch (error) {
    return false
  }
}
