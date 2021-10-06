import DriversSearchBar from "./DriversSearchBar";

import "./MainHeader.css";

const MainHeader = (props) => {
 
  return (
    <header className='header'>
      <h1>Contant list</h1>
      <nav>
        <ul>
          <li>
            <DriversSearchBar />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
