import React from 'react';
import SearchBar from './SearchBar';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import theme from '../utils/MaterialTheme';
import {ThemeProvider} from '@material-ui/styles';
import youtube from '../api/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
 state = {videos:[],selectedVideo:null,startedTyping:false};

  onSubmitRequest = async (term) => {
      const response = await youtube.get('/search', {
        params:{ q:term}
      });
      this.setState({
        videos:response.data.items,
        selectedVideo:response.data.items[0]
      });

  };

  onStartTyping = (term) => {
    if(term.length>0){this.setState({startedTyping:true})}
    else{
      this.setState({startedTyping:false});
    };
  }

  onHomeButton = () => {
    this.setState({videos:[]});
  }

  onSelectVideo = (video) => {
    this.setState({selectedVideo:video});
  }

  render() {
    return (
    <ThemeProvider theme={theme}>
      <Container>
        <Grid container spacing = {2}>
          <Grid item xs={12}> <SearchBar onStartTyping={this.onStartTyping} onHome={this.onHomeButton} onSubmit={this.onSubmitRequest}/></Grid>
          <Grid item lg={7} md={7} sm={7} xs={12}><VideoDetail display={this.state.startedTyping} video={this.state.selectedVideo}></VideoDetail></Grid>
          <Grid item lg={5} md={5} sm={5} xs={12}><VideoList display={this.state.startedTyping} onSelect={this.onSelectVideo} videos={this.state.videos}></VideoList></Grid>
        </Grid>
      </Container>
    </ThemeProvider>);
  }
}
export default App
