import Image from "next/image";
import React from "react";
import { FiArrowRight } from "react-icons/fi";

import { Button } from "../../elements/Button";
import { BannerContainer, CitiesListContainer } from "./styles";
import { constants } from "../../../constants/suggestions";

export function Suggestions() {
  return (
    <>
      <BannerContainer>
        <div className="banner-content">
          <div className="left-content">
            <div>
              <Image
                className="planet-figure"
                src={constants.banner.image.url}
                width={constants.banner.image.width}
                height={constants.banner.image.height}
                alt={constants.banner.image.alt}
              />
            </div>

            <p className="banner-text">{constants.banner.text}</p>
          </div>

          <div className="right-content">
            <Button
              icon={<FiArrowRight size={24} />}
              type="secondary"
              size="medium"
            >
              {constants.banner.buttonText}
            </Button>
          </div>
        </div>
      </BannerContainer>
      <CitiesListContainer>
        <div className="cities-content">
          <h1 className="title">{constants.citiesSuggestions.title}</h1>

          <p className="subtitle">{constants.citiesSuggestions.subtitle}</p>

          <ul className="list">
            {constants.citiesSuggestions.cities.map(
              ({ image, name }, index) => (
                <li className="card" key={index}>
                  <Image
                    src={image.url}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                  />
                  <span className="city-name">{name}</span>
                </li>
              )
            )}
          </ul>
        </div>
      </CitiesListContainer>
    </>
  );
}
