'use client'

import { Box, Typography, Button } from '@mui/material'
import Category from '../components/category'
import { useState, useEffect } from 'react'

type CategoryFeedData = {
  categories: string[]
  userName: string
}

// export const getStaticProps: GetStaticProps<{ data:CategoryFeedData }> = async () => {
//   var userName = "Joshua";
//   const res = await fetch(`https://mp3qjihgouetn3yvxflhcma2eu0uuoai.lambda-url.eu-west-2.on.aws/category-feed/${userName}`);
//   const data = await res.json();
//   return { props: {data} };
// }

export default function Home() {
  const [myData, setMyData] = useState<CategoryFeedData>();
  var userName = "Joshua-R";
  useEffect(() => {
    fetch(`https://decisions.joshuarichardson.dev/feeds/category/${userName}`)
      .then((res) => res.json())
      .then((data) => {
        setMyData(data)
      })
  }, [userName])

  return (
    <Box>
      {myData?.categories.map(c => <Category key={c} categoryName={c} userName={myData.userName}></Category>)}
      <Typography>Hello</Typography>
      <Box>Categories</Box>
      <Button>Suggest Activity</Button>
    </Box>
  )
}
