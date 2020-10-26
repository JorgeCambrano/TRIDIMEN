import React, { Component } from 'react';
import Rueda from './RuedaG';
import './component.css';

import Componente  from './componente';

class Header extends Component {
  render(){
  return (

    <div className="Header">
      <Componente/>
      <Rueda/>

    
    
    </div>

    
  );
}
}

export default Header;
