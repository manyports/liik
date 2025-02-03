export const loadFonts = async () => {
    const font = await fetch("https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Me5Q.ttf")
    const fontData = await font.arrayBuffer()
    return fontData
  }
  
  