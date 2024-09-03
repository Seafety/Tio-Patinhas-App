import React from "react";

import Notification from "../../atoms/Notification";
import Perfil from "../../molecules/Perfil";
import SearchBar from "../../molecules/SearchBar";

const Header = () => {
  return (
    <section>
      <SearchBar />
      <div>
        <Notification />
        <Perfil />
      </div>
    </section>
  );
};

export default Header;
