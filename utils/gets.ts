export const getLandingPageData = async () => {
  const API_URL = process.env.CMS_API_URL || ''

  try {
    const response = await fetch(API_URL)
    if (!response.ok) {
      console.error(`Error fetching CMS data: ${response.text()}`)
      throw new Error('Error fetching CMS data')
    }

    const responseData = await response.json()
    const data = responseData[0].acf
    return data
  } catch (error) {
    console.error('An error ocurred during data fetching', error)
    return null
  }
}