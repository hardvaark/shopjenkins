const fetchData = async (inputValue) => {
  if (!inputValue) {
    setError("Please enter a value")
    return
  }

  const url = `/api/your-api-endpoint/${inputValue}` // Replace with your API endpoint
  try {
    const response = await fetch(url)

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`)
    }

    const apiData = await response.json()
    setData(apiData)
    setError(null)
  } catch (error) {
    setError(error.message)
  }
}
