const getAllEvents = async () => {
  const response = await fetch(`http://localhost:3000/events`)
  if (response) {
    const data = await response.json()
    return data
  }
}

const getEventsById = async (id) => {
  const response = await fetch(`http://localhost:3000/events/${id}`)
  if (response) {
    const data = await response.json()
    return data
  }
}

const getEventsAtLocation = async (locationId) => {
  const response = await fetch(
    `http://localhost:3000/events/locations/${locationId}`
  )
  if (response) {
    const data = await response.json()
    return data
  }
}

export default {
  getAllEvents,
  getEventsById,
  getEventsAtLocation,
}
