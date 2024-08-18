'use client'
import Abdominal from "@/Option/Abdominal";
import Finger from "@/Option/Finger";
import { Box, Button, Container, Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";


export default function Home() {
  const [selectOption, setSelectOption] = useState<number>();
  useEffect(()=>{
    setSelectOption(0)
  },[])

  function checkAndReturnOption(){
    if(selectOption === 0){
      return <MainMenu />
    }
    else if(selectOption === 1){
      return <Abdominal/>
    }
    else if(selectOption === 2){
      return <Finger/>
    }
  }

  return (
    <Container maxW={"1920px"} display={"flex"} flexDirection={"column"} justifyContent={"center"} h={"100vh"}>
      {
        checkAndReturnOption()
      }
    </Container>
  );
  
  function MainMenu(){
    return (
      <Flex flexDir={"column"}
        gap={"60px"} alignItems={"center"}
      >
        <Text fontSize={"36px"} fontWeight={"600"}>ตอนนี้คุณรู้สึกอย่างไร</Text>
        <Flex flexDir={"column"} gap={"30px"}>
          <Button p={"28px"} colorScheme="teal" onClick={()=>{
            setSelectOption(1)
          }}>
            <Text fontSize={"24px"}>1.ปวดหน้าท้อง</Text>
          </Button>
          <Button p={"28px"} colorScheme="teal" onClick={()=>{
            setSelectOption(2)
          }}>
            <Text fontSize={"24px"}>2.เจ็บบริเวณนิ้ว</Text>
          </Button>
        </Flex>
      </Flex>
    )
  }

}


