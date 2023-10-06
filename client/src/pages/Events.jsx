import React, { useEffect, useState } from "react"
import EventsAPI from "../services/EventsAPI"
import Event from "../components/Event"
import "../css/Events.css"

const Events = () => {
  const [events, setEvents] = useState([])

  useEffect(() => {
    const fetchEvents = async () => {
      const data = await EventsAPI.getAllEvents()
      setEvents(data)
    }
    fetchEvents()
  }, [])

  return (
    <div className="events">
      {events && events.length > 0 ? (
        events.map((event, index) => <Event key={event.id} event={event} />)
      ) : (
        <h2>
          <i className="fa-regular fa-calendar-xmark fa-shake"></i>{" "}
          {"No events found!"}
        </h2>
      )}
    </div>
  )
}

export default Events
