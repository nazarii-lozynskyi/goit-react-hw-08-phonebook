import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <>
      <NavLink to={'/home'} variant="h6" component="div">
        Home
      </NavLink>
      <NavLink to={'/notes'} variant="h6" component="div">
        Notes
      </NavLink>
    </>
  );
}
