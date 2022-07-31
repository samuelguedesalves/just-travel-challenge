import HomeIcon from '../assets/home.svg';
import AptoIcon from '../assets/apto.svg';
import HotelIcon from '../assets/hotel.svg';

export const constants = {
  filters: {
    prices: [
      {
        min: 1000,
        max: 9000
      },
      {
        min: 9001,
        max: 29000
      },
      {
        min: 29001,
        max: 39000
      },
      {
        min: 39001,
        max: 49000,
      },
    ],
    conveniences: [
      "Wi-Fi",
      "Cozinha",
      "Máquina de Lavar",
      "Ar-condicionado",
      "Secadora",
    ],
    locals: [
      {
        label: "Casa",
        icon: HomeIcon,
      },
      {
        label: "Apartamento",
        icon: AptoIcon,
      },
      {
        label: "Hotel",
        icon: HotelIcon,
      },
    ]
  }
};