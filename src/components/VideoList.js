import React from 'react';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItem from  '@material-ui/core/ListItem';
import Skeleton from '@material-ui/lab/Skeleton';
import Divider from '@material-ui/core/Divider';
import VideoItem from './VideoItem';


class VideoList extends React.Component {

  makeEmptyList(){
    let vids = ["one","two","three","four","five"];
    return vids.map((v)=>{
      return(
      <ListItem key={v} style={{maxHeight:'110px'}}  button>
        <ListItemAvatar>
          <Skeleton variant="rect" style={{height:'100px',width:'100px'}}/>
        </ListItemAvatar>
        <ListItemText style={{maxHeight:'100px',qoverflow:'hidden',textOverflow:'ellipsis',padding:'10px'}}
          primary={<Skeleton variant="text"  style={{width:'100%'}}/>}
          secondary={<Skeleton variant="text"  style={{width:'100%'}}/>}
          />
      </ListItem>
    );});
  }

  makeList(){
    return this.props.videos.map((video) => {return(<div style={{maxHeight:'110px'}}>
        <VideoItem onSelect={this.props.onSelect} key={video.id.videoId||video.snippet.title} video={video}></VideoItem>
        <Divider />
        </div>
      );
    });
  }

  render(){
    if(this.props.videos.length === 0 && this.props.display) return(
    <Paper><List cols={1} style={{height:'auto'}}>
      {this.makeEmptyList()}
    </List></Paper>
    );
    if(this.props.videos.length === 0) return('');
    return(
      <Paper><List cols={1} style={{height:'auto'}}>{this.makeList()}</List></Paper>);
  }
}

export default VideoList;
