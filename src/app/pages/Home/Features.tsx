import { MdEventNote, MdQrCode2, MdOutlineAnalytics } from "react-icons/md";
import { AiOutlineUsergroupAdd } from "react-icons/ai";

const Features = () => {
  return (
    <div className="features">
        <div className="container">
        <h1>Features</h1>
        <div className="grid grid-4">
            <div className="feature">
                <MdEventNote size={32} color="red" />
                <h3>Event Creation</h3>
                <h6>Create events and experiences like webinars, seminars, conferences, tech events, and classes from anywhere in the world and Sell event tickets online.</h6>
            </div>
            <div className="feature">
                <AiOutlineUsergroupAdd size={32} color="red"/>
                <h3>Attendee Engagement</h3>
                <h6>Keep attendees informed and engaged by reminding them about upcoming events, event updates, and tickets. Attendee can also set when to receive notifications about events.</h6>
            </div>
            <div className="feature">
                <MdQrCode2 size={32} color="red"/>
                <h3>QR Code Tickets</h3>
                <h6>QR codes are generated for attendee when the tickets are bought. This QR code would be used to verify that the attendee is valid and can have access to an event.</h6>
            </div>
            <div className="feature">
                <MdOutlineAnalytics size={32} color="red"/>
                <h3>Analytics</h3>
                <h6>Eventful provides creators the ability to see how many attendees they have had all the time and specific to events and also how many tickets bought all the time and specific to events.</h6>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Features