import HeaderSearchBox from "./HeaderSearchBox";
// import LOGO from "../../../asserts/logo.png";
import "./style/headerlogodiv.css";

export default function HeaderLogoDiv() {
  return (
    <>
      <div className="headerlogodiv-wrapper">
        <div className="headerlogo-holder-div">
          <h1 className="jiji">Auction Dashboard</h1>
          {/* <img className="headerlogo-img" src={LOGO} alt="" /> */}
        </div>
        <HeaderSearchBox />
      </div>
    </>
  );
}
