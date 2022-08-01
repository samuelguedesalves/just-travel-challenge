import { createSlice } from '@reduxjs/toolkit';

export type Ticket = {
  id: string;
  name: string;
  description: string;
  price: string;
  location: string;
  departament: string;
  images: string;
  createdAt: string;
}

type State = {
  tickets: Ticket[],
  ticket: Ticket | null,
}

const initialState = {
  tickets: [],
  ticket: null,
} as State;

const ticketSlice = createSlice({
  name: 'ticket',
  initialState,
  reducers: {
    setTickets(state, action) {
      return {
        ...state,
        tickets: action.payload,
      } as State;
    },
    setTicket(state, action) {
      return {
        ...state,
        ticket: action.payload,
      } as State;
    }
  },
});

export const { setTickets, setTicket } = ticketSlice.actions;
export default ticketSlice.reducer;