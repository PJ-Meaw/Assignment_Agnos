import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import React, { useState } from 'react'

type TpainStatus = "epigastrium" | "llq" | "luq" | "rlq" | "ruq" | "suprapubic" | "umbilicus"

export default function Finger() {
  const [allPain, setAllPain] = useState<boolean>(false);
  const [painStatus, setPainStatus] = useState<TpainStatus | undefined>();
  const [selectPainStatus, setSelectPainStatus] = useState<{
    epigastrium : boolean,
    llq : boolean,
    luq : boolean,
    ruq : boolean,
    rlq : boolean,
    suprapubic : boolean,
    umbilicus : boolean,
  }>({
    epigastrium : false,
    llq : false,
    luq : false,
    ruq : false,
    rlq : false,
    suprapubic : false,
    umbilicus : false,
  });
  const points = [
    // umbilicus
    { top : "57%" , left : "43%", w : "10%", h : "10%" },
    // epigastrium
    { top : "42%" , left : "43%", w : "11%", h : "13%"},
    // luq
    { top : "49%" , left : "53%", w : "11%", h : "13%"},
    // llq
    { top : "62%" , left : "53%", w : "11%", h : "13%"},
    // suprapubic
    { top : "68%" , left : "43%", w : "11%", h : "13%"},
    // rlq
    { top : "62%" , left : "33%", w : "11%", h : "13%"},
    // ruq
    { top : "49%" , left : "33%", w : "11%", h : "13%"},
  ]

  function computeOpacity(statusImage : TpainStatus){
    if(selectPainStatus[statusImage] === true){
      return "1"
    }
    else if(statusImage === painStatus){
      return "0.5"
    }else{
      return "0"
    }
  }
  function checkIsAllPain(){
    return Object.values(selectPainStatus).every(item => item === true)
  }
  
  return (
    <Flex flexDir={"column"}
      gap={"60px"} alignItems={"center"}
    >
      <Text fontSize={"32px"} fontWeight={"600"}>คุณปวดหน้าท้องจุดไหน</Text>
      <Box position={"relative"}>
        <Image src='/default-abs.jfif' w={"700px"}/>
        {
          points.map(( point, i)=>{
            return <Box key={i} position={"absolute"} top={point.top} left={point.left}  w={point.w} h={point.h} rounded={"full"} 
              cursor={"pointer"} zIndex={5}
              // bgColor={"#00FFFF"} 
              onMouseEnter={()=>{
                if(i == 0)
                  setPainStatus("umbilicus")
                else if(i == 1)
                  setPainStatus("epigastrium")
                else if(i == 2)
                  setPainStatus("luq")
                else if(i == 3)
                  setPainStatus("llq")
                else if(i == 4)
                  setPainStatus("suprapubic")
                else if(i == 5)
                  setPainStatus("rlq")
                else if(i == 6)
                  setPainStatus("ruq")
                
              }}
              onClick={()=>{
                if(i == 0)
                  setSelectPainStatus({...selectPainStatus, umbilicus : !selectPainStatus.umbilicus})
                else if(i == 1)
                  setSelectPainStatus({...selectPainStatus, epigastrium : !selectPainStatus.epigastrium})
                else if(i == 2)
                  setSelectPainStatus({...selectPainStatus, luq : !selectPainStatus.luq})
                else if(i == 3)
                  setSelectPainStatus({...selectPainStatus, llq : !selectPainStatus.llq})
                else if(i == 4)
                  setSelectPainStatus({...selectPainStatus, suprapubic : !selectPainStatus.suprapubic})
                else if(i == 5)
                  setSelectPainStatus({...selectPainStatus, rlq : !selectPainStatus.rlq})
                else if(i == 6)
                  setSelectPainStatus({...selectPainStatus, ruq : !selectPainStatus.ruq})
              }}
              onMouseLeave={()=>{
                setPainStatus(undefined)
              }}
            > 

            </Box>
          })
        }
        
        <Image src="/umbilicus-highlight.png"  w={"700px"} position={"absolute"} top={"0"} opacity={computeOpacity("umbilicus")} transition={"all 0.3s ease-out"}/>
        <Image src="/epigastrium-highlight.png"  w={"700px"} position={"absolute"} top={"0"} opacity={computeOpacity("epigastrium")} transition={"all 0.3s ease-out"}/>
        <Image src="/luq-highlight.png"  w={"700px"} position={"absolute"} top={"0"} opacity={computeOpacity("luq")} transition={"all 0.3s ease-out"}/>
        <Image src="/llq-highlight.png"  w={"700px"} position={"absolute"} top={"0"} opacity={computeOpacity("llq")} transition={"all 0.3s ease-out"}/>
        <Image src="/suprapubic-highlight.png"  w={"700px"} position={"absolute"} top={"0"} opacity={computeOpacity("suprapubic")} transition={"all 0.3s ease-out"}/>
        <Image src="/rlq-highlight.png"  w={"700px"} position={"absolute"} top={"0"} opacity={computeOpacity("rlq")} transition={"all 0.3s ease-out"}/>
        <Image src="/ruq-highlight.png"  w={"700px"} position={"absolute"} top={"0"} opacity={computeOpacity("ruq")} transition={"all 0.3s ease-out"}/>

        <Image src="/umbilicus-active.png"  w={"700px"} position={"absolute"} top={"0"} opacity={(painStatus === "umbilicus" || selectPainStatus.umbilicus ) && !checkIsAllPain() ? "1" : "0" } transition={"all 0.3s ease-out"}/>
        <Image src="/epigastrium-active.png"  w={"700px"} position={"absolute"} top={"0"} opacity={(painStatus === "epigastrium" || selectPainStatus.epigastrium ) && !checkIsAllPain() ? "1" : "0" } transition={"all 0.3s ease-out"}/>
        <Image src="/luq-active.png"  w={"700px"} position={"absolute"} top={"0"} opacity={(painStatus === "luq" || selectPainStatus.luq ) && !checkIsAllPain() ? "1" : "0" } transition={"all 0.3s ease-out"}/>
        <Image src="/llq-active.png"  w={"700px"} position={"absolute"} top={"0"} opacity={(painStatus === "llq" || selectPainStatus.llq ) && !checkIsAllPain() ? "1" : "0" } transition={"all 0.3s ease-out"}/>
        <Image src="/suprapubic-active.png"  w={"700px"} position={"absolute"} top={"0"} opacity={(painStatus === "suprapubic" || selectPainStatus.suprapubic ) && !checkIsAllPain() ? "1" : "0" } transition={"all 0.3s ease-out"}/>
        <Image src="/rlq-active.png"  w={"700px"} position={"absolute"} top={"0"} opacity={(painStatus === "rlq" || selectPainStatus.rlq ) && !checkIsAllPain() ? "1" : "0" } transition={"all 0.3s ease-out"}/>
        <Image src="/ruq-active.png"  w={"700px"} position={"absolute"} top={"0"} opacity={(painStatus === "ruq" || selectPainStatus.ruq) && !checkIsAllPain() ? "1" : "0" } transition={"all 0.3s ease-out"}/>
        
      </Box>
      <Button role='group' bgColor={"transparent"} rounded={"8px"} border={"1px"} p={"30px"} borderColor={"blue.400"} 
        _hover={{bgColor: "blue.400"}}
        _active={{bgColor: "blue.400"}}
        isActive={checkIsAllPain()}
        onClick={()=>{
          setSelectPainStatus({
            epigastrium : true,
            llq : true,
            luq : true,
            ruq : true,
            rlq : true,
            suprapubic : true,
            umbilicus : true,
          })
        }}
      >
        <Text fontSize={"24px"} textColor={"blue.400"} _groupHover={{textColor : "#EEEEEE"}} _groupActive={{textColor : "#EEEEEE"}} >ปวดทั่วท้อง</Text>
      </Button>
    </Flex>
  )
}
