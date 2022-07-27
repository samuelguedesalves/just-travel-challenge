import React from "react";
import { FiUser, FiHelpCircle } from "react-icons/fi";
import { Container } from "./styles";
import Image from "next/image";

export function Header() {
  return (
    <Container>
      <div className="content">
        <Image src="/assets/logo.svg" alt="logoipsum" width={136} height={30} />

        <div className="right-content">
          <div className="dolar-price">
            <span>Cotação do dólar hoje: R$5,53</span>

            <Image
              src="/assets/flag-brasil.png"
              alt="bandeira do brasil"
              width={30}
              height={21}
            />

            <a href="">
              <FiHelpCircle size={24} />
            </a>
          </div>

          <div className="divider" />

          <a className="signin" href="#">
            <FiUser size={24} />
            Entrar
          </a>
        </div>
      </div>
    </Container>
  );
}
