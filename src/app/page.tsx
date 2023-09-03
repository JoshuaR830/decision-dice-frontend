'use client'

import { Box, Typography, Button } from '@mui/material'
import Category from '../components/category'
import Motivator from '../components/motivator'
import { useState, useEffect } from 'react'
import { API_BASE_URL } from '../constants'
import { replaceSpaces } from '@/helpers/stringReplacementHelper'
import { MotivatorData } from '@/components/motivator'

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
  const [categoryFeed, setCategoryFeed] = useState<CategoryFeedData>();
  const [returnedMotivator, setReturnedMotivator] = useState<MotivatorData>()
  var userName = "JoshuC";

  function getRandomInteger(max: number): number {
    return Math.floor(Math.random() * max)
  }

  function selectRandomMotivator(motivators: string[]): string {
    const index = getRandomInteger(motivators.length);
    return motivators[index];
  }

  function getMotivators(category: string) {
    fetch(replaceSpaces(`${API_BASE_URL}/feeds/motivator/${userName}/${category}`))
    .then((res) => res.json())
    .then((data) => {
      const motivatorName = selectRandomMotivator(data.motivators);
      getMotivator(category, motivatorName)
    })
  }

  function getMotivator(category: string, motivator: string) {
    fetch(replaceSpaces(`${API_BASE_URL}/motivators/${userName}/${category}/${motivator}`))
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      setReturnedMotivator(data);
    })
  }

  useEffect(() => {
    fetch(replaceSpaces(`${API_BASE_URL}/feeds/category/${userName}`))
      .then((res) => res.json())
      .then((data) => {
        setCategoryFeed(data)
      })
  }, [userName])

  return (
    <Box>
      {categoryFeed?.categories.map(c => <Category key={c} categoryName={c} userName={categoryFeed.userName} onCategoryClick={() => getMotivators(c)}></Category>)}
      <Typography>Hello</Typography>
      <Box>Categories</Box>
      {returnedMotivator ? <Motivator title={returnedMotivator.title} description={returnedMotivator.description} userName={returnedMotivator.userName} category={returnedMotivator.category}></Motivator> : "Nothing to show"}
      {/* <Button onClick={() => getMotivators()}>Get motivator feed</Button> */}
      {/* <Button onClick={() => getMotivator()}>Get motivator</Button> */}
    </Box>
  )
}