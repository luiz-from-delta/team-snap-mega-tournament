export default function rootReducer(state: any = {}, action: any) {
  switch (action.type) {
    case "UPDATE":
      return { ...state, ...{ [action.key]: action.value } };
    default:
      return state;
  }
}
