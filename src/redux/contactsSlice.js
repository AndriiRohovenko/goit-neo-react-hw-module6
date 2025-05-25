import { createSlice } from '@reduxjs/toolkit';
import mockedData from '../mockedData/contacts.json';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: mockedData,
  reducers: {
    addContact(state, action) {},
    deleteContact(state, action) {},
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
