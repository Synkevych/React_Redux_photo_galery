export const SET_YEAR = 'SET_YEAR'; // кладем строку в константу

// действие для сущности page
// type - обязательное поле 
// payload - негласное соглашение
export default function setYear(year){
  return{
    type: SET_YEAR, // изменяем строку на константу
    payload: year,
  }
}