import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Chip } from '@mui/material';

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 300, fontFamily: 'NotoSans' }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="post_img"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          게시글 제목
        </Typography>
        <Typography variant="body1" color="text.secondary">
          작성자
        </Typography>
        <Chip label="# 태그1" size="small" />
        <Chip label="# 태그2" size="small" />
        <Typography>2024.05.15</Typography>
      </CardContent>
    </Card>
  );
}
