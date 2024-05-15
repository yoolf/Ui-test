import styled from 'styled-components';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import Button from '../Common/Button';
import MediaCard from '../Common/MediaCard';

function PostList() {
  return (
    <>
      <MediaCard />;
    </>
  );
}

export default PostList;
