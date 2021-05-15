import { Link } from 'react-router-dom';

const Footer = () => {
   return (
      <footer>
         <p>Copyright &copy; 2021</p>

         <h3>
            <Link to='/about'>About</Link>
         </h3>
      </footer>
   );
};

export default Footer;
