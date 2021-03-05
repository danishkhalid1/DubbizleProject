
import React, { useEffect, useState } from 'react';


import styled from 'styled-components'
import Header from "./components/Header";
import GlobalStyles from "./GlobalStyle";
import GistList from './components/GistList';
import { getPublicGists, getGistForUser } from './services/gistService';

const App = () => {
  const [gist, setGist] = useState([]);

  useEffect(() => {

    async function fetchGist() {
      try {
        const data = await getPublicGists();
        console.log("ttjjjasdf", data)
        if (data && data.data) {
          setGist(data.data);

        }
      }
      catch (err) {
        console.log('err', err)
      }

    }
    fetchGist();

  }, []);


  const handleSearch = async (e) => {
    const { value } = e.target
    if (value && value.length > 3) {
      let timeout;
      try {
        const res = await getGistForUser(value);
        // clearTimeout(timeout);
        if (res) {
          setGist(res.data);

        }

      }
      catch (err) { console.log("err") }
    }
    // else if (value == '') {
    //   try{
    //     const resp = await getPublicGists();
    //     console.log('res--->', resp)

    //     setGist(resp.data);
    //   }
    //   catch(err){ 
    //     console.log(err);
    //   }


    // }

  }
  return (
    <Wrapper className="App" data-testid="app">
      <Header
        handleSearch={handleSearch}
      />
      <GistList
        gist={gist}
      />
      <GlobalStyles />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  font-size: 14px;
  line-height: 1.5;
`;

export default App;
