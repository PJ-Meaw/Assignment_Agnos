import { defineStyleConfig, extendTheme } from "@chakra-ui/react"

export const theme = extendTheme({
  global : {
    'html, body' : {
      bgColor: "#0B101B",
      color : "white",
      fontSize: '16px',
      fontWeight : "400",
      margin: 0,
      padding: 0,
      transition : "all 0.3s ease-in-out",
      boxSizing: 'border-box',
    },
  },
  fonts : {
    body : `'IBM Plex Sans Thai', sans-serif`
  }
})