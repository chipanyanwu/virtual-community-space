import React, { useState, useEffect } from "react"
import LocationsAPI from "../services/LocationsAPI"
import EventsAPI from "../services/EventsAPI"
import Event from "../components/Event"
import "../css/LocationEvents.css"

const LocationEvents = ({ index }) => {
  const [location, setLocation] = useState([])
  const [events, setEvents] = useState([])

  useEffect(() => {
    const fetchLocation = async () => {
      const data = await LocationsAPI.getLocationById(index)
      if (data) {
        setLocation(data)
      }
    }
    fetchLocation()
  }, [])

  useEffect(() => {
    const fetchEvents = async () => {
      const data = await EventsAPI.getEventsAtLocation(index)
      if (data) {
        setEvents(data)
      }
    }
    fetchEvents()
  }, [])

  return (
    <div className="location-events">
      <header>
        <div className="location-image">
          <img src={location.image} />
        </div>

        <div className="location-info">
          <h2>{location.venue_name}</h2>
          <p>{location.venue_address}</p>
        </div>
      </header>

      <main>
        {events && events.length > 0 ? (
          events.map((event, index) => <Event key={event.id} event={event} />)
        ) : (
          <h2>
            <i className="fa-regular fa-calendar-xmark fa-shake"></i>{" "}
            {"No events scheduled at this location yet!"}
          </h2>
        )}
      </main>
    </div>
  )
}

export default LocationEvents
