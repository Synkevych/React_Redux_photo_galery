export const initialState = {
  user: {
    name: "Ivan",
    surname: "Bokoch",
    age: 22
  }
};

export function userReducer(state = initialState){
  return state
}