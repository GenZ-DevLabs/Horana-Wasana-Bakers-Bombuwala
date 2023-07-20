import { Link } from "react-router-dom";
import WhatsAppLogo from "../assets/whatsapp.png";

export default function WhatsappWidget() {
  return (
    <div className="fixed bottom-0 right-0 pb-10 pr-10">
      <Link
        to="https://wa.me/94715514646"
        target="_blank"
        rel="noreferrer"
        className="flex items-center justify-center w-16 h-16  text-black rounded-full shadow-lg"
      >
        <img src={WhatsAppLogo} alt="whatsapp" />
      </Link>
    </div>
  );
}
