import { NavLink } from 'react-router-dom';

export default function AuthNav() {
  return (
    <>
      <NavLink to={'/login'} variant="h6" component="div">
        Login
      </NavLink>
      <NavLink to={'/registration'} variant="h6" component="div">
        Registration
      </NavLink>
    </>
  );
}
