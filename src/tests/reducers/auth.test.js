import authReducer from '../../reducers/auth';

test('should set default state', () => {
  const state = authReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({});
});

test('should set state with user id', () => {
  const uid = 'abc123';
  const currentState = {};
  const action = {
    type: 'LOGIN',
    uid
  }
  const state = authReducer(currentState, action);
  expect(state.uid).toBe(uid);
});

test('shuld clear user id from state', () => {
  const uid = 'abc123';
  const currentState = { uid };
  const action = { type: 'LOGOUT' };
  const state = authReducer(currentState, action);
  expect(state).toEqual({});
});