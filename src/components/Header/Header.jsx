
import { MainContainer, List, Link, Item, LogoCont } from './Header.styled';
import Logo from "../../image/Filmoteka.png";


const Header = () => {
    return (
      <MainContainer>
        <LogoCont>
            <Link to="/">
            <img src={Logo} alt="logo"  width={300}/>
            </Link>
        </LogoCont>
        <div>
          <List>
            <Item>
              <Link to="/movie">Movies</Link>
            </Item>
            <Item>
              <Link to="/tv">TV Shows</Link>
            </Item>
            <Item>
              <Link to="/people">People</Link>
            </Item>
            {/* <Item>
              <Link to="/favorite">Favorite</Link>
            </Item> */}
            <Item>
              <Link to="/search">Search Movie?</Link>
            </Item>
          </List>
        </div>
        <div></div>
      </MainContainer>
    );
}

export default Header