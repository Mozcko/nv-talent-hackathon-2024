import { FC } from "react";
import { NavLink } from 'react-router-dom';
import { Navbar, Button, NavbarLink, Avatar } from "flowbite-react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

import { logo } from "../assets";

library.add(faSearch);

interface TopbarProps {
  isLoggedIn: boolean;
}

const Topbar: FC<TopbarProps> = ({ isLoggedIn = true }) => {
  const links = [
    { label: "Tablero de finanzas", href: "/dashboard" },
    { label: "Punto de venta", href: "/point-of-sale" },
    { label: "Proveedores", href: "/providers" },
    { label: "Recomendaciones", href: "/recomendaciones" },
    { label: "Gastos", href: "/gastos" },
  ];

  return (
    <Navbar fluid={true} rounded={true} className="bg-white-100 sticky top-0">
      <Navbar.Brand href="/">
        <img src={logo} className="mr-3 h-6 sm:h-9" alt="PymeForge logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          PymeForge
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        {isLoggedIn && (
          <>
            {links.map((link) => (
              <NavbarLink key={link.href} href={link.href} className="mt-3 bg-white-100 text-primary">
                {link.label}
              </NavbarLink>
            ))}
          </>
        )}

        {!isLoggedIn && (
          <NavLink to="/login">
            <Button color="dark" size="sm" className="bg-primary text-white-100">
              Log in
            </Button>
          </NavLink>
        )}

        {isLoggedIn && (
          <button className="inline-flex items-center ml-3">
             <Avatar img={logo} alt="avatar of Jese" rounded />
          </button>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Topbar;
