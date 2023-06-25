import  logo  from "./clarusway-logo-black.png";
const Header = () => {
  return (
    <header className="bg-info d-flex align-items-center p-4" style={{height: "100px"}} ><img style={{width:"300px"}} src={logo} alt="" /></header>
  )
}

export default Header