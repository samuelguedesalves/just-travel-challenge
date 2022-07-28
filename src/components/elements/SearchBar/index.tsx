import React from "react";
import { FiCalendar, FiMapPin, FiSearch } from "react-icons/fi";
import {
  Container,
  DateInputContainer,
  LocalInputContainer,
  DatePicker,
  SearchButton,
} from "./styles";

export function SearchBar() {
  return (
    <Container>
      <LocalInputContainer>
        <FiMapPin size={24} />
        <input type="text" placeholder="Local" />
      </LocalInputContainer>

      <DateInputContainer>
        <FiCalendar size={24} />
        <DatePicker />
      </DateInputContainer>

      <SearchButton>
        <FiSearch size={24} />
      </SearchButton>
    </Container>
  );
}
