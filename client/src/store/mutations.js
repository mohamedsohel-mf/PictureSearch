export const SET_PICS = (state, {pics}) => {
  state.photos = pics
}

export const SET_CURRENT_PAGE = (state, {currentPage}) => {
  state.currentPage = currentPage
}

export const SET_ALL_PAGE = (state, {allPages}) => {
  state.allPages = allPages
}

export const SET_PER_PAGE = (state, {perPage}) => {
  state.perPage = perPage
}

export const SET_LOCATION_INFO = (state, {locationsInfo}) => {
  state.locationsInfo = locationsInfo
}

export const ADD_LOCATION_INFO = (state, {addLocationsInfo}) => {
  state.addLocationsInfo = addLocationsInfo
}