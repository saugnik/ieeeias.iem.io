import React from 'react';
import './../../src/Components/EventSection.css';

const EventsSection = () => {
  const events = [
    {
      image: "AILcode_the_future.jpg", // Reference the filename as a string
      title: "AI: Code The Future",
      date: "19th to 21st Oct",
      link: "/eventAI_code_the_future.html" // Add correct link or remove if not needed
    },
    {
      title: "Coming Soon",
      date: "Coming Soon"
    }
  ];

  return (
    <section id="events" className="events-section">
      <h2 className="events-title">Events</h2>
      <div className="events-grid">
        {events.map((event, index) => (
          <div key={index} className="event-card">
            {event.image ? (
              <a href={event.link || "#"}> {/* Add a fallback link */}
                <img 
                  src={`/images/${event.image}`} // Access image directly from public folder
                  alt={event.title}
                  className="event-image"
                />
              </a>
            ) : (
              <div className="event-placeholder">
                <p>No Image Available</p>
              </div>
            )}
            <strong className="event-title">Event {index + 1}:</strong> 
            <p>{event.title}</p>
            <p className="event-date">Date: {event.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventsSection;
