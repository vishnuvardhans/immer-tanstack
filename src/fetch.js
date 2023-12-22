import React, { useState } from 'react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from "react-router-dom";
import demo from './store';
export default function Fetch() {
  const { search,val,setlist,listvalue } = demo();
    const navigate = useNavigate();
  const postQuery = useQuery({
    queryKey: ['value'],
    queryFn: () => {
      return axios
        .get(`https://jsonplaceholder.typicode.com/posts/1/comments`)
        .then((res) => res.data);
    },
    staleTime: 5000,
    cacheTime: 20000,
  });
function setting(){
    search(val+1)
}
  console.log("data", postQuery.data);
  function navigating(){
    navigate('/home')

}
  return (
    <div>
      <button onClick={postQuery.refetch}>Fetch Data</button>
      <button onClick={setting}>button</button>
      <button onClick={navigating}>navigating</button>
      {postQuery.data && (
        <ul>
          {postQuery.data.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
      {val}
    </div>
  );
}
