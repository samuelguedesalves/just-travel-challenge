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
}

const initialState = {
  tickets: []
} as State;

const ticketSlice = createSlice({
  name: 'ticket',
  initialState,
  reducers: {
    setTickets(state, action) {
      // console.log(["rodando no reducer", state.tickets, action]);

      return {
        tickets: action.payload,
      } as State;
    },
  },
});

export const { setTickets } = ticketSlice.actions;
export default ticketSlice.reducer;