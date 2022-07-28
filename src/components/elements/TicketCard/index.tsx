import Image from "next/image";
import React from "react";
import { FiArrowRight, FiHeart, FiMapPin } from "react-icons/fi";
import { formatAmount } from "../../../utils/formatAmount";
import { Button } from "../Button";
import { TicketCardContainer } from "./styles";

type TicketCardProps = {
  title: string;
  local: string;
  totalPrice: number;
  sellingPrice: number;
  imageUrl: string;
  className?: string;
};

export function TicketCard(props: TicketCardProps) {
  return (
    <TicketCardContainer className={props.className && props.className}>
      <div className="left-content">
        <Image src={props.imageUrl} alt="image" width={213} height={233} />
        <span className="label">Ingresso</span>
        <button className="like-button">
          <FiHeart size={24} />
        </button>
      </div>

      <div className="right-content">
        <div>
          <p className="title">{props.title}</p>

          <div className="local">
            <FiMapPin size={24} />
            <span>{props.local}</span>
          </div>

          <div className="score">
            <span className="score-note">6.3</span>
            <span className="score-label">Exellent</span>
            <span className="review-amount">(423 Reviews)</span>
          </div>
        </div>

        <div className="price">
          <span className="total-price">
            de {formatAmount(props.totalPrice / 100)} por
          </span>

          <span className="selling-price">
            <span className="symbol">R$</span>
            {formatAmount(props.sellingPrice / 100).slice(2)}
          </span>

          <Button icon={<FiArrowRight />} type="primary" size="medium">
            Saber mais
          </Button>
        </div>
      </div>
    </TicketCardContainer>
  );
}
