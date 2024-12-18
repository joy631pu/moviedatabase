import {
    Button,
    createMuiTheme,
    Tab,
    Tabs,
    TextField,
    ThemeProvider,
  } from "@material-ui/core";
  import "./Search.css";
  import SearchIcon from "@material-ui/icons/Search";
  import { useEffect, useState } from "react";
  import axios from "axios";
//   import CustomPagination from "../../components/Pagination/CustomPagination";
  import SingleContent from "../../components/SingleContent/SingleContent";
import { API_key } from "../../config/config";
 // Search component 
  const Search = () => {
    const [type, setType] = useState(0);
    const [searchText, setSearchText] = useState("");
    const [page, setPage] = useState(1);
    const [content, setContent] = useState([]);
    // const [numOfPages, setNumOfPages] = useState();
  
    const darkTheme = createMuiTheme({
      palette: {
        type: "dark",
        primary: {
          main: "#fff",
        },
      },
    });
  // Fetch api
    const fetchSearch = async () => {
      try {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/search/${type?"tv":"movie"}?api_key=${API_key}&language=en-US&query=${searchText}&page=${page}&include_adult=false`
        );
        setContent(data.results);
        // setNumOfPages(data.total_pages);
        // console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
  // useEffect hook
    useEffect(() => {
      window.scroll(0, 0);
      fetchSearch();
      // eslint-disable-next-line
    }, [type, page]);
  
    return (
      <div>
        <ThemeProvider theme={darkTheme}>
        <Tabs
            value={type}
            indicatorColor="primary"
            textColor="primary"
            onChange={(event, newValue) => {
              setType(newValue);
              setPage(1);
            }}
            style={{ paddingBottom: 5 }}
            aria-label="disabled tabs example"
          >
            <Tab style={{ width: "50%" }} label="Search Movies" />
            <Tab style={{ width: "50%" }} label="Search TV Series" />
          </Tabs>
          <div className="search">
            <TextField
              style={{ flex: 1, }}
              className="searchBox"
              label="Search"
              variant="filled"
              onChange={(e) => setSearchText(e.target.value)}
            />
            <Button
              onClick={fetchSearch}
              variant="contained"
              style={{ marginLeft: 10 }}
            >
              <SearchIcon fontSize="large" />
            </Button>
          </div>
          
        </ThemeProvider>
        <div className="trending">
          {content &&
            content.map((c) => (
              <SingleContent
                key={c.id}
                id={c.id}
                poster={c.poster_path}
                title={c.title || c.name}
                date={c.first_air_date || c.release_date}
                media_type={type ? "tv" : "movie"}
                vote_average={c.vote_average}
              />
            ))}
          {searchText &&
            !content &&
            (type ? <h2>No Series Found</h2> : <h2>No Movies Found</h2>)}
        </div>
        {/* {numOfPages > 1 && (
          <CustomPagination setPage={setPage} numOfPages={1} />
        )} */}
      </div>
    );
  };
  
  export default Search;
  