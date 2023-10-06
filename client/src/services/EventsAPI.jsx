const getAllEvents = async () => {
  const response = await fetch(`http://localhost:3000/events`)
  if (response) {
    const data = await response.json()
    return data
  }
}

const getEventsById = async (id) => {
  const response = await fetch(`http://localhost:30000/events/${id}`)
  if (response) {
    const data = await response.json()
    return data
  }
}

export default {
  getAllEvents,
  getEventsById,
}
