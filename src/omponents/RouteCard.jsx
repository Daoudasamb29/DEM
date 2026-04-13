import { buildBookingMessage } from "../utils/whatsapp";
import { useBookingLogger } from "../hooks/useBookingLogger";

export default function RouteCard({ route }) {
  const { logBooking } = useBookingLogger();
  const { label, subtitle, icon, gradient, color, slots } = route;

  return (
    <div className={`card card--${color}`}>
      <div className="card__header">
        <div className="card__icon" style={{ background: gradient }}>{icon}</div>
        <div>
          <h3>{label}</h3>
          <p>{subtitle}</p>
        </div>
        <span className="card__badge">{slots.length} départs</span>
      </div>
      <div className="card__divider" />
      <div className="card__slots">
        {slots.map(time => (
          
            key={time}
            className="btn-slot"
            href={buildBookingMessage(label, time)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => logBooking(label, time)}
          >
            {time}
          </a>
        ))}
      </div>
    </div>
  );
}