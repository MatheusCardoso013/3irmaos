import { FaWhatsapp } from "react-icons/fa";
import "./WhatsPopUp.css"; 

const WhatsPopUp = () => {
  const whatsappNumber = "5513996894041"; 

  const handleClick = () => {
    const url = `https://wa.me/${whatsappNumber}`; 
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="whatsapp-popup" onClick={handleClick} title="Fale conosco via WhatsApp">
      <FaWhatsapp size={24} color="#FFF" />
    </div>
  );
};

export default WhatsPopUp;