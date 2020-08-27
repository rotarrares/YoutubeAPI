import React from 'react';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItem from  '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';

class VideoItem extends React.Component {

  onClick = (e) =>{
    e.preventDefault();
    this.props.onSelect(this.props.video);

  }

  render(){
    return(

      <ListItem button onClick={(e)=>{this.onClick(e);}}>
        <ListItemAvatar>
          <img src={this.props.video.snippet.thumbnails.default.url} alt={this.props.video.snippet.title} />
        </ListItemAvatar>
        <ListItemText
          style={{textOverflow:'ellipsis',padding:'10px'}}
          primary={this.props.video.snippet.title}
          secondary={this.props.description}
          />
        <Divider/>
      </ListItem>

      )
    }
}
export default VideoItem;
