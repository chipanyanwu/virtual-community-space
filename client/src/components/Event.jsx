import React, { useState, useEffect } from "react"
import moment from "moment"
import EventsAPI from "../services/EventsAPI"
import "../css/Event.css"

const Event = (props) => {
  const event = props.event
  const [time, setTime] = useState([])
  const [remaining, setRemaining] = useState([])

  useEffect(() => {
    setTime(
      new Date(event.datetime).toLocaleString([], {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit",
      })
    )
  }, [event])

  useEffect(() => {
    setRemaining(moment(new Date(event.datetime)).fromNow())
  }, [event])

  return (
    <article className="event-information">
      <img src={event.image} />
      <div className="event-information-overlay">
        <div className="text">
          <h3>{event.title}</h3>
          <p>
            <i className="fa-regular fa-calendar fa-bounce"></i>
            {time}
          </p>
          <p id={`remaining-${event.id}`}>{remaining}</p>
        </div>
      </div>
    </article>
  )
}

export default Event
