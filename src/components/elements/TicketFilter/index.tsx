import React, { useState } from "react";
import Image from "next/image";

import { Convenience } from "./Convenience";
import { Price } from "./Prices";
import { Stars } from "./Stars";

import { Container, Divider } from "./styles";
import { Locals } from "./Locals";
import { ReviewScore } from "./ReviewScore";

export function TicketFilter() {
  return (
    <Container>
      <header>
        <h2>Filtro</h2>
        <button>Limpar todos os filtros</button>
      </header>

      <Divider />

      <main>
        <Price />

        <Divider />

        <Stars />

        <Divider />

        <Convenience />

        <Divider />

        <Locals />

        <Divider />

        <ReviewScore />
      </main>
    </Container>
  );
}
