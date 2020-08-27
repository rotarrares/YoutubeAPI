import React from 'react';
import InputBase from '@material-ui/core/InputBase';
import Card from '@material-ui/core/Card';
import YoutubeSearchedForTwoToneIcon from '@material-ui/icons/YoutubeSearchedForTwoTone';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import FormControl from '@material-ui/core/FormControl';
import SubscriptionsTwoToneIcon from '@material-ui/icons/SubscriptionsTwoTone';
import './SearchBar.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      raised: false,term: ''
    }
  }
  onHome = ()=>{
    this.props.onHome();
  }

  onChange = (e)=>{
    this.setState({term:e.target.value});
    this.props.onStartTyping(e.target.value);

  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  }

  mouseOver = () => {
    this.setState({raised: true});
  }
  mouseOut = () => {
    this.setState({raised:false});
  }

  render() {
    return (
      <Card raised={this.state.raised}
        onMouseOver={this.mouseOver}
        onMouseOut={this.mouseOut}
        className="searchBar">
      <Box component="span">
        <form onSubmit={this.onSubmit} id="Search">
          <FormControl fullWidth>
            <InputBase
              value={this.state.term}
              className="searchForm"
              placeholder="Search..."
              onChange={this.onChange}
              startAdornment={
                <InputAdornment position = "start">
                  <Button value="Home" onClick={this.onHome}>
                    <SubscriptionsTwoToneIcon className="searchIcon"/>
                  </Button>
                </InputAdornment>}
              endAdornment={
                <InputAdornment position = "end" >
                  <Button type="submit"  form="Search" value="Submit">
                    <YoutubeSearchedForTwoToneIcon className="searchIcon"/>
                  </Button>
                </InputAdornment>}>
              </InputBase>
          </FormControl>
        </form>
      </Box>
    </Card>);
  }
}
export default SearchBar;
