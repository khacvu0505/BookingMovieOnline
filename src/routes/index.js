import HomePage from "../containers/home/HomePage";
import AuthHome from "../components/Auth/index";
import DetailTicketRoom from "../components/DetailTicketRoom";
import SignUp from "../components/SignUp";
import HistoryBookTickets from "../components/HistoryBookTickets";
const routesHome = [
  {
    exact: true,
    path: "/",
    component: HomePage
  },
  // {
  //   exact: false,
  //   path: "/auth-home",
  //   component: AuthHome
  // },
  {
    exact: false,
    path: "/detail-ticketRoom",
    component: DetailTicketRoom,
  },
  {
    exact: false,
    path: "/history",
    component: HistoryBookTickets,
  },
  // {
  //   exact: false,
  //   path: "/sign-up",
  //   component: SignUp,
  // },

  // {
  //   exact: false,
  //   path: "/detail/:id",
  //   component: DetailPage
  // },



]

const routesAdmin = [
  // {
  //   exact: false,
  //   path: "/dashboard",
  //   component: Dashboard,
  // },
  // {
  //   exact: false,
  //   path: "/add-user",
  //   component: AddUser,
  // },


]
export { routesHome, routesAdmin }