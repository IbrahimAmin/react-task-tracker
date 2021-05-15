import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import Button from './Button';
import React from 'react';

const Header = ({ title, onAdd, showAdd }) => {
   const location = useLocation();

   return (
      <header className='header'>
         <h1>{title}</h1>
         {location.pathname === '/' && (
            <Button
               color={showAdd ? 'red' : 'green '}
               text={showAdd ? 'Close' : 'Add'}
               onClick={onAdd}
            />
         )}
      </header>
   );
};

Header.defualtProps = {
   title: 'Task Default',
};

Header.protoType = {
   title: PropTypes.string.isRequired,
};

export default Header;
