import styled from 'styled-components'
import { Avatar, IconButton } from '@material-ui/core'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChatIcon from '@material-ui/icons/Chat';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import * as EmailValidator from "email-validator";

export default function Sidebar() {

  const createChat = () => {
    const input = prompt("Please enter an email address for the user you wish to chat with")
    
    if (!input) return null;

    if (EmailValidator.validate(input)) {
      // returns true if this email is valid
      // add chat to db
    }
  }

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
         
          <Search>
            <SearchIcon/>
          <SearchInput placeholder="Search in chats"/>
          </Search>

          <SidebarButton onClick={createChat}>Start a new chat</SidebarButton>

          {/* list of chats goes here */}
      </Container>
    )
  }

  const Container = styled.div``;

  const Search = styled.div`
    display: flex;
    align-items: center;
    padding: 20px;
    border-radius: 2px;
  `;

  const SearchInput = styled.input`
    outline-width: 0;
    flex: 1;
    border: none;
  `;

  const SidebarButton = styled(Button)`
    width: 100%;
    &&& {
      border-top: 1px solid whitesmoke;
      border-bottom: 1px solid whitesmoke;
    }
   
  `;

  const Header = styled.div`
    display: flex;
    padding: 15px;
    height: 80px;
    border-bottom: 1px solid whitesmoke;
    justify-content: space-between;
    align-items: center;

    /* when i have some more of the app built out, 
    try commenting this out */
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