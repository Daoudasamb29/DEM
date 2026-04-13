import { buildAIBDMessage } from "../utils/whatsapp";
import { useBookingLogger } from "../hooks/useBookingLogger";

export default function AIBDCard() {
  const { logBooking } = useBookingLogger();

  return (
    <div className="card card--aibd">
      <div className="card__header">
        <div className="card__icon" style={{background:"linear-gradient(135deg,#111827,#374151)"}}>✈️</div>
        <div>
          <h3>Dakar → AIBD</h3>
          <p>Aéroport · Heure flexible</p>
        </div>
      </div>
      <div className="card__divider" />
      <div className="card__aibd-body">
        <p>Choisissez votre heure. Nous nous adaptons à votre vol.</p>
        
          className="btn-aibd"
          href={buildAIBDMessage()}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => logBooking("Dakar → AIBD", "flexible")}
        >
          🕐 Choisir mon heure
        </a>
      </div>
    </div>
  );
}