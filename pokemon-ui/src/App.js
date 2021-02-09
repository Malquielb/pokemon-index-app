import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import fetch from 'node-fetch';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './theme';
import { ThemeProvider } from '@material-ui/core/styles';
import Brand from './components/Brand';
import ItemBox from './components/ItemBox';
import MainContainer from './components/MainContainer';
import ItemContainer from './components/ItemContainer';
import SearchInput from './components/SearchInput';
import PageControl from './components/PageControl';
import Preloader from './components/Preloader';
import Info from './components/Info';


function usePokemon(query = "", currentPage = 0) {
  const [results, setResults] = useState({ results: [] });
  const [loading, setLoading] = useState(false);
  
  const url = `http://localhost:4000/pokemon?search=${query}&page=${currentPage}&limit=12`;

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setResults(json);
      } 
      catch (err) {
        console.error(err);
      }
      finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [query, currentPage]);

  return [results, loading];
}


function App() {
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [data, loading] = usePokemon(query, page);

  function handleSubmit(event) {
    event.preventDefault();
    setQuery(search);
    setPage(1);
  }

  function handleSearchChange(event) {
    setSearch(event.target.value)
  }

  function handlePageChange(event, value) {
    setPage(value);
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <MainContainer>
          <Brand 
            logoSource="/img/pokeball.png" 
            text="Pokémon App"
          />
          <SearchInput 
            placeholder="Search for pokémon..."
            handleSubmit={handleSubmit}
            handleChange={handleSearchChange}
            value={search}
          />
          <ItemContainer>
            {
              loading ? (<Preloader />) : 
              (data.results.length > 0 ? data.results.map(pokemon => (
                <ItemBox 
                  key={uuidv4()}
                  imageSource={pokemon.spriteSrc}
                  title={pokemon.name.toUpperCase()}
                  dataSource={pokemon.dataUrl}
                />)) :
                (<Info color="textSecondary" text="Pokémon Not Found" />)
              )
            }
          </ItemContainer>
          <PageControl count={data.totalPages} page={page} handleChange={handlePageChange} />
        </MainContainer>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
