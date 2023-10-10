import React from 'react';
import { Heading , Stack } from '@chakra-ui/react';



const SpinnerLoader = () => {
  return (
    <Stack h={'100vh'} alignItems={'center'} justifyContent={'center'} w={'full'}
    >

<style>
  {`
  
  @keyframes move {
    0%{font-size: 30px;}
    100%{font-size: 50px;}
  }
  }
  
  `}
</style>
  <Heading letterSpacing={'widest'} textColor={'black'}  style={{
      animation: "move 2s ",
    }}  >🆂🅷🅾🆆🆁🅸🆃🆈</Heading>
    </Stack>

  )
}

export default SpinnerLoader