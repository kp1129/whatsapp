import styled from 'styled-components'
import { Avatar, IconButton } from '@material-ui/core'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChatIcon from '@material-ui/icons/Chat';

export default function Sidebar() {
    return (
      <Container>
          <Header><UserAvatar/>
          <IconsContainer>
              <IconButton>
              <ChatIcon/>
              </IconButton>
              <IconButton>
              <MoreVertIcon/>
              </IconButton>
          </IconsContainer>
          </Header>
      </Container>
    )
  }

  const Container = styled.div``;

  const Header = styled.div`
    display: flex;
    padding: 15px;
    height: 80px;
    border-bottom: 1px solid whitesmoke;
    justify-content: space-between;
    align-items: center;

    /* when i have some more of the app built out, try commenting this out */
    position: sticky;
    top: 0;
    background-color: white;
    z-index: 1;
  `;

  const UserAvatar = styled(Avatar)`
    cursor: pointer;
    :hover {
        opacity: 0.8;
    }
  `;

  const IconsContainer = styled.div``;