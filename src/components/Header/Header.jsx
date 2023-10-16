
import { MainContainer, List, Link, Item } from './Header.styled';


const Header = () => {
    return (
      <MainContainer>
        <div>
          <p>
            <Link to="/"> Filmoteka</Link>
          </p>
        </div>
        <div>
          <List>
            <Item>
              <Link to="/">Movies</Link>
            </Item>
            <Item>
              <Link to="/tvshow">TV Shows</Link>
            </Item>
            <Item>
              <Link to="/people">People</Link>
            </Item>
            <Item>
              <Link to="/favorite">Favorite</Link>
            </Item>
          </List>
        </div>
        <div></div>
      </MainContainer>
    );
}

export default Header