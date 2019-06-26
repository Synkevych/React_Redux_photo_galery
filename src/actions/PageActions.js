export const SET_YEAR = 'SET_YEAR';
export const GET_PHOTOS_REQUEST = 'GET_PHOTOS_REQUEST';
export const GET_PHOTOS_SUCCESS = 'GET_PHOTOS_SUCCESS';

// действие для сущности page
// type - обязательное поле 
// payload - негласное соглашение
// export function setYear(year){
//   return{
//     type: SET_YEAR, 
//     payload: year,
//   }
// }
// export default setYear;

export function getPhotos(year){
  return (dispatch) => {
    dispatch({
    type: GET_PHOTOS_REQUEST,
    payload: year,
  })
  setTimeout(() =>  {
    dispatch  ({
      type: GET_PHOTOS_SUCCESS,
      payload: [1,2,3,4,5],
    })
  }, 1000)
}
}

//   $.ajax(url).success(dispatch({
//     type: GET_PHOTOS_SUCCESS,
//     payload: response.photos
//   })
//   )
//   .error(
//     dispatch({
//       type: GET_PHOTOS_FAILURE,
//       payload: response.error,
//       error: true
//     })
//   )
// }
// }