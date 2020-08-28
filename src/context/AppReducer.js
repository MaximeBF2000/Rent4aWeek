export default (state, action) => {
  const { type, payload } = action

  switch(type){
    case "UPDATE_SEARCH_QUERY":
      return { ...state, searchQuery: payload }
    default:
      return state
  }
}