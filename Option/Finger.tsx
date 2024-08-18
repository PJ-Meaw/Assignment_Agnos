import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import React, { useState } from 'react'

type TpainStatus = "dip" | "mcp" | "pip"

export default function Finger() {
  const [painStatus, setPainStatus] = useState<TpainStatus | undefined>();
  const [selectPainStatus, setSelectPainStatus] = useState<{
    dip : boolean,
    pip : boolean,
    mcp : boolean
  }>({
    dip :false, pip :false, mcp :false
  });
  const points = [
    // dip
    { top : "26%" , left : "21%", w : "7%", h : "7%" },
    { top : "14%" , left : "32%", w : "7%", h : "7%" },
    { top : "9%" , left : "43%", w : "7%", h : "7%" },
    { top : "12%" , left : "56%", w : "7%", h : "7%" },
    // pip
    { top : "34%" , left : "24%", w : "6%", h : "6%" },
    { top : "25%" , left : "33%", w : "8%", h : "6%" },
    { top : "22%" , left : "43%", w : "8%", h : "6%" },
    { top : "23%" , left : "55%", w : "8%", h : "6%" },
    { top : "45%" , left : "75%", w : "8%", h : "6%" },
    // mcp
    { top : "45%" , left : "27%", w : "9%", h : "6%" },
    { top : "42%" , left : "36%", w : "9%", h : "6%" },
    { top : "39%" , left : "44%", w : "9%", h : "6%" },
    { top : "39%" , left : "53%", w : "9%", h : "6%" },
    { top : "58%" , left : "68%", w : "8%", h : "7%" },
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
  
  return (
    <Flex flexDir={"column"}
      gap={"60px"} alignItems={"center"}
    >
      <Text fontSize={"32px"} fontWeight={"600"}>จุดไหนที่ควรปวดนิ้วมากที่สุด</Text>
      <Box position={"relative"}>
        <Image src='/default-finger.jfif' w={"700px"}/>
        {
          points.map(( point, i)=>{
            return <Box key={i} position={"absolute"} top={point.top} left={point.left}  w={point.w} h={point.h} rounded={"full"} 
              cursor={"pointer"} zIndex={5}
              // bgColor={"#00FFFF"} 
              onMouseEnter={()=>{
                if(i >= 0 && i <= 3){
                  setPainStatus("dip")
                }
                else if(i >= 4 && i<= 8){
                  setPainStatus("pip")
                }else{
                  setPainStatus("mcp")
                }
              }}
              onClick={()=>{
                if(i >= 0 && i <= 3){
                  setSelectPainStatus({...selectPainStatus, dip : !selectPainStatus.dip})
                }
                else if(i >= 4 && i<= 8){
                  setSelectPainStatus({...selectPainStatus, pip : !selectPainStatus.pip})
                }else{
                  setSelectPainStatus({...selectPainStatus, mcp : !selectPainStatus.mcp})
                }
              }}
              onMouseLeave={()=>{
                setPainStatus(undefined)
              }}
            > 

            </Box>
          })
        }
        
          
        
        <Image src="/dip-highlight.png"  w={"700px"} position={"absolute"} top={"0"} opacity={computeOpacity("dip")} transition={"all 0.3s ease-out"}/>
        <Image src="/pip-highlight.png"  w={"700px"} position={"absolute"} top={"0"} opacity={computeOpacity("pip")} transition={"all 0.3s ease-out"}/>
        <Image src="/mcp-highlight.png"  w={"700px"} position={"absolute"} top={"0"} opacity={computeOpacity("mcp")} transition={"all 0.3s ease-out"}/>
        <Image src="/dip-active.png"  w={"700px"} position={"absolute"} top={"0"} opacity={painStatus === "dip" || selectPainStatus.dip === true ? "1" : "0"} transition={"all 0.3s ease-out"}/>
        <Image src="/pip-active.png"  w={"700px"} position={"absolute"} top={"0"} opacity={painStatus === "pip" || selectPainStatus.pip === true ? "1" : "0"} transition={"all 0.3s ease-out"}/>
        <Image src="/mcp-active.png"  w={"700px"} position={"absolute"} top={"0"} opacity={painStatus === "mcp" || selectPainStatus.mcp === true ? "1" : "0"} transition={"all 0.3s ease-out"}/>
      </Box>
      <Button role='group' bgColor={"transparent"} rounded={"8px"} border={"1px"} p={"30px"} borderColor={"blue.400"} 
        _hover={{bgColor: "blue.400"}}
      >
        <Text fontSize={"24px"} textColor={"blue.400"} _groupHover={{textColor : "#EEEEEE"}}>ข้ออื่นๆ หรือไม่ได้ปวดบริเวณข้อ</Text>
      </Button>
    </Flex>
  )
}
