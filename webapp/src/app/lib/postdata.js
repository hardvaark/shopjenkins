async function postData(url, data) {
  const response = await fetch(url, {
    method: "POST", // Set method to POST
    headers: { "Content-Type": "application/json" }, // Set Content-Type for JSON data
    body: JSON.stringify(data), // Convert data object to JSON string
  })

  if (!response.ok) {
    throw new Error(`Error: ${response.status} - ${response.statusText}`)
  }

  const responseJson = await response.json()
  return responseJson // Return the response data as JSON
}
