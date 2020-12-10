import { combineReducers } from "redux";
import authReducer from "../../components/Auth/modules/reducer";
import roomTicketReducer from "../../components/DetailTicketRoom/modules/reducer";
import bookGhe from "../../components/Seat/modules/reducer";



const rootReducers = combineReducers({
  authReducer,
  roomTicketReducer,
  bookGhe,

});
export { rootReducers };


