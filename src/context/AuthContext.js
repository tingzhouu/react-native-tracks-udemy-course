import createDataContext from './createDataContext';

const reducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export const { Provider, Context } = createDataContext(
  reducer,
  {},
  {isSignedIn: false},
);