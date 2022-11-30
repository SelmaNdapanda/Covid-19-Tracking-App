import reducer, { loadCountries } from '../redux/countrySlice';

// when it's pending
const loadCountriesPending = {
  type: loadCountries.pending,
};
// when it's fulfilled
const loadCountriesFulfilled = {
  type: loadCountries.fulfilled,
  payload: [{ id: '1', country: 'Algeria', totalCases: '121321' }],
};
// when it's rejected
const loadCountriesRejected = {
    type: loadCountries.rejected,
}

describe('testing Country Slice', () => {
  test('When it pending state.status should have pending value', () => {
    const state = reducer(
      {
        countries: [],
        status: null,
      },
      loadCountriesPending,
    );
    expect(state.pending !== 'pending').toBeTruthy();
  });

  test('When it fullfiled state.status = success and country should have atlest length of 1', () => {
    const state = reducer(
      {
        countries: [],
        status: null,
      },
      loadCountriesFulfilled,
    );
    expect(state.pending !== 'success').toBeTruthy();
    expect(state.countries).toHaveLength(1);
  });

  test('When it is rejected state.status should have rejected value', () => {
    const state = reducer(
      {
        countries: [],
        status: null,
      },
      loadCountriesRejected,
    );
    expect(state.rejected !== 'rejected').toBeTruthy();
  });
});