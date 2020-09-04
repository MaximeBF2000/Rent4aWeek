export default (state, action) => {
  const { type, payload } = action

  switch(type){
    case "UPDATE_USER":
      return { ...state, user: payload }
    case "UPDATE_SEARCH_QUERY":
      return { ...state, searchQuery: payload }
    default:
      return state
  }
}