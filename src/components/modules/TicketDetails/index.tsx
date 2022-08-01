import Image from "next/image";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

import { FiCalendar, FiCornerUpLeft, FiMapPin, FiUser } from "react-icons/fi";

import { Button } from "../../elements/Button";
import { TicketDetailsSection } from "./styles";

import AirTicket from "../../../assets/air-ticket.svg";
import Coffee from "../../../assets/coffee.svg";
import Wifi from "../../../assets/wifi.svg";
import Home from "../../../assets/home.svg";
import { useAppSelector } from "../../../services/redux/hooks";
import { formatDate } from "../../../utils/formatDate";
import { parseAmount } from "../../../utils/parseAmount";

const DynamicMap = dynamic(() => import("../../elements/Map"), {
  ssr: false,
});

export function TicketDetails() {
  const router = useRouter();
  const ticket = useAppSelector((state) => state.ticket);

  function goToHome() {
    router.push("/");
  }

  return (
    <>
      {ticket ? (
        <TicketDetailsSection>
          <div className="content">
            <header>
              <div className="header-top">
                <button
                  className="header-back-button"
                  onClick={() => goToHome()}
                >
                  <FiCornerUpLeft size={24} />
                </button>

                <div>
                  <h1 className="title">{ticket.name}</h1>
                  <div className="location">
                    <FiMapPin size={24} />
                    <p className="local-name">{ticket.location}</p>
                  </div>
                </div>
              </div>

              <div className="image-cover">
                <Button
                  type="secondary"
                  size="medium"
                  className="see-more-img-button"
                >
                  Visualizar mais fotos
                </Button>

                <Image
                  src={ticket.images}
                  alt={ticket.name}
                  width={1320}
                  height={434}
                />
              </div>
            </header>

            <main>
              <div className="ticket-summary">
                <div className="score">
                  <span className="score-note">6.3</span>
                  <span className="score-label">Excellent</span>
                  <span className="view-amount">(423 Reviews)</span>
                </div>

                <div className="items">
                  <div className="item">
                    <div className="item-icon">
                      <AirTicket />
                    </div>
                    <span className="item-label">Passagem Aérea</span>
                  </div>

                  <div className="item">
                    <div className="item-icon">
                      <Wifi />
                    </div>
                    <span className="item-label">Wi-fi</span>
                  </div>

                  <div className="item">
                    <div className="item-icon">
                      <Coffee />
                    </div>
                    <span className="item-label">Café da manhã</span>
                  </div>

                  <div className="item">
                    <div className="item-icon">
                      <Home />
                    </div>
                    <span className="item-label">Quarto</span>
                  </div>
                </div>
              </div>

              <div className="ticket-description">
                <article>
                  <h2>Sobre o ingresso selecionado:</h2>
                  <p>{ticket.description}</p>
                </article>
                <article>
                  <h2>Localização</h2>
                  <DynamicMap />
                </article>
              </div>

              <div className="more-ticket-details">
                <div className="item block">
                  <div className="icon">
                    <FiCalendar size={24} />
                  </div>
                  <div>
                    <span className="label">Data do ingresso</span>
                    <span className="value">
                      {formatDate(ticket.createdAt)}
                    </span>
                  </div>
                </div>

                <div className="item block">
                  <div className="icon">
                    <FiUser size={24} />
                  </div>
                  <div>
                    <span className="label">Ingressos</span>
                    <span className="value">03 Ingressos</span>
                  </div>
                </div>

                <div className="item">
                  <div className="ticket-type">
                    <span className="ticket-label">01 Ingresso infantil</span>
                    <span className="ticket-amount">
                      {parseAmount(
                        parseInt(ticket.price.replace(".", "")) / 100
                      )}
                    </span>
                  </div>

                  <div className="ticket-type">
                    <span className="ticket-label">02 Ingresso Adultos</span>
                    <span className="ticket-amount">
                      {parseAmount(
                        parseInt(ticket.price.replace(".", "")) / 100
                      )}
                    </span>
                  </div>

                  <div className="ticket-type">
                    <span className="ticket-label">Seguro viajem</span>
                    <span className="ticket-amount">
                      {parseAmount(
                        parseInt(ticket.price.replace(".", "")) / 100
                      )}
                    </span>
                  </div>
                </div>

                <div className="total">
                  <p className="total-amount">
                    Valor total{" "}
                    <span>
                      {parseAmount(
                        (parseInt(ticket.price.replace(".", "")) * 3) / 100
                      )}
                    </span>
                  </p>

                  <Button
                    type="primary"
                    size="medium"
                    className="button-buy-ticket"
                  >
                    Comprar Ingresso
                  </Button>
                </div>
              </div>
            </main>
          </div>
        </TicketDetailsSection>
      ) : (
        <span>Carregando...</span>
      )}
    </>
  );
}
