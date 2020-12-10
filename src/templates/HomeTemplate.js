import React from 'react';
import { Route, Redirect } from "react-router-dom";
import NavbarUser from "./../components/Navbar";

function HomeLayout(props) {
  if (props.children.props.location.pathname === "/detail-ticketroom") {
    return (
      <div>
        {props.children}
      </div>
    )
  } else {
    return (
      <div>
        <NavbarUser />
        {props.children}
      </div>
    )
  }
}
export default function HomeTemplate({ Component, ...props }) {
  return (
    <Route
      /* exac
       path*/
      {...props}
      render={(propsComponent) => {

        if (propsComponent.match.path === "/" || propsComponent.match.path === "/detailMovie/:id") {
          return (
            <HomeLayout>
              <Component {...propsComponent} />
            </HomeLayout>
          )
        }
        if (localStorage.getItem("userHome")) {
          return (
            <HomeLayout>
              <Component {...propsComponent} />
            </HomeLayout>
          )
        }
        return <Redirect to="/auth-home" />
      }}
    />
  )
}