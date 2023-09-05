import styled from 'styled-components';

export const MediaDashboardContainer = styled.div`
  background-color: #f7f7f7;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
`;

export const SearchForm = styled.form`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  input, select, button {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  button {
    background-color: #333;
    color: #fff;
    cursor: pointer;
    transition: background-color 0.2s;
    &:hover {
      background-color: #555;
    }
  }
`;

export const MediaList = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
`;

export const MediaItem = styled.li`
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  h3 {
    margin: 0;
    font-size: 1.2em;
  }
  p {
    margin-top: 10px;
  }
`;

export const MediaMeta = styled.div`
  margin-top: 10px;
  ul {
    list-style: none;
    padding: 0;
    li {
      font-size: 0.9em;
    }
  }
`;

export const MediaThumbnail = styled.img`
  width: 100%;
  height: auto;
  border-radius: 5px;
  margin-bottom: 10px;
`;
