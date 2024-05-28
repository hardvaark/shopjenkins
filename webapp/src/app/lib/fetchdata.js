export async function fetchdata(url) {
  const response = await fetch(url)

  if (!response.ok) {
    throw new Error(`Error: ${response.status} - ${response.statusText}`)
  }

  const data = await response.json()
  return data
}
