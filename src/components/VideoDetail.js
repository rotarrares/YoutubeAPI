import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Avatar from '@material-ui/core/Avatar';
import Skeleton from '@material-ui/lab/Skeleton';

const VideoDetail = (props)=>{

  if (!props.video && props.display ){
    return (
      <Card>
        <CardHeader
          avatar={
            <Skeleton variant="circle" width={50} height={50} />
          }
          title={<Skeleton variant="text" width={100} />}
          subheader={<Skeleton variant="text"   width={80}/>}
          />
        <CardMedia style = {{ height: 300}}>
          <Skeleton variant="rect"  height={300} />
        </CardMedia>
        <CardContent>
          <Skeleton variant="text"/>
          <Skeleton variant="text"/>
          <Skeleton variant="text"/>
        </CardContent>
      </Card>
    );
  }

  if (!props.video){
    return ('');
  }

  const videoSrc=`https://www.youtube.com/embed/${props.video.id.videoId}`;
  return (
    <Card  >

      <CardHeader
        avatar={
          <Avatar aria-label="recipe" >
            {props.video.snippet.channelTitle}
          </Avatar>
        }
        title={props.video.snippet.title}
        subheader={props.video.snippet.publishedAt}
      />

      <CardMedia style = {{ height: 370}}
            component='iframe'
            src={videoSrc}
            title={props.video.snippet.title}
          />

      <CardContent>
        {props.video.snippet.description}
      </CardContent>

    </Card>);
}
export default VideoDetail;
