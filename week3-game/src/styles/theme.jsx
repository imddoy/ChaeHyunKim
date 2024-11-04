const fontGenerator = (
  fontFamily = "Pretendard",
  fontSize = "1.6rem",
  fontWeight = "normal",
  lineHeight = "normal",
  letterSpacing = "normal"
) => ({
  "font-family": fontFamily,
  "font-weight": fontWeight,
  "font-size": fontSize,
  "line-height": lineHeight,
  "letter-spacing": letterSpacing,
});

const theme = {
  colors: {
    // Backgrounds
    backgroundBase: "#fff",
    background1: "#fff",
    background2: "#f5f5f5",
    background3: "#ebebeb",
    background4: "#e0e0e0",
    backgroundInvert: "#212121",
    backgroundAltbase: "#f5f5f5",

    // Accents
    accent1: "#121212",
    accent2: "#4a4a4a",
    accent3: "#898989",
    accent4: "silver",
    accentInvert: "#fff",

    // Borders
    border1: "#343a40",
    border2: "#adb5bd",
    border3: "#dee2e6",
    border4: "#f1f3f5",

    // Primary & Secondary colors
    primary: "#00bcd4",
    emphasize: "#ff9800",
    destructive: "#f44336",

    // Page and Element Backgrounds
    bgPage1: "#f8f9fa",
    bgPage2: "#fff",
    bgElement1: "#fff",
    bgElement2: "#f8f9fa",
    bgElement3: "#e9ecef",
    bgElement4: "#dee2e6",
    bgElement5: "#212529",
    bgElement6: "#343a40",
    bgElement7: "#fafafa",
    bgElement8: "#fbfdfc",
    bgInvert: "#1e1e1e",
    bgInlineCode: "#e9ecef",
    bgTag: "#f8f9fa",

    // Text
    text1: "#212529",
    text2: "#495057",
    text3: "#868e96",
    text4: "#ced4da",

    // Additional colors
    primary1: "#12b886",
    primary2: "#20c997",
    destructive1: "#ff6b6b",
    destructive2: "#ff8787",
    buttonText: "#fff",
    slightLayer: "rgba(0, 0, 0, .05)",
    opaqueLayer: "hsla(0, 0%, 98%, .85)",
    editorFooter: "#fff",

    // Prism (code highlighting)
    prismBg: "#fbfcfd",
    prismDefaultText: "#24292e",
    prismSelectionBg: "rgba(0, 0, 0, .15)",
    prismCodeBlockBg: "#fbfcfd",
    prismCode1: "#969896",
    prismCode2: "#24292e",
    prismCode3: "#a626a4",
    prismCode4: "#63a35c",
    prismCode5: "#0184bc",
    prismCode6: "#50a14f",
    prismCode7: "#a626a4",
    prismCode8: "#005cc5",
    prismCode9: "#a626a4",
    prismLineNumber: "#585c63",
  },
  fonts: {
    heading1: fontGenerator(
      "Pretendard",
      "2.4rem",
      "700",
      "3.2rem",
      "-0.06rem"
    ),
    heading2: fontGenerator("Pretendard", "2.2rem", "700", "3rem", "-0.055rem"),
    heading3: fontGenerator("Pretendard", "2rem", "700", "2.8rem", "-0.04rem"),
    heading4: fontGenerator(
      "Pretendard",
      "1.8rem",
      "600",
      "2.6rem",
      "-0.018rem"
    ),
    "body1-normal-semi": fontGenerator(
      "Pretendard",
      "1.6rem",
      "600",
      "2.4rem",
      "-0.016rem"
    ),
    "body1-normal-medi": fontGenerator(
      "Pretendard",
      "1.6rem",
      "500",
      "2.4rem",
      "-0.016rem"
    ),
    "body1-long": fontGenerator(
      "Pretendard",
      "1.6rem",
      "400",
      "2.6rem",
      "-0.016rem"
    ),
    "body2-normal-semi": fontGenerator(
      "Pretendard",
      "1.4rem",
      "600",
      "2rem",
      "-0.007rem"
    ),
    "body2-normal-medi": fontGenerator(
      "Pretendard",
      "1.4rem",
      "500",
      "2rem",
      "-0.007rem"
    ),
    "body2-long": fontGenerator(
      "Pretendard",
      "1.4rem",
      "400",
      "2.2rem",
      "-0.007rem"
    ),
    "caption1-semi": fontGenerator(
      "Pretendard",
      "1.2rem",
      "600",
      "1.8rem",
      "-0.03rem"
    ),
    "caption1-medi": fontGenerator(
      "Pretendard",
      "1.2rem",
      "500",
      "1.8rem",
      "-0.03rem"
    ),
    "caption2-semi": fontGenerator(
      "Pretendard",
      "1.1rem",
      "600",
      "1.6rem",
      undefined
    ),
    "caption2-medi": fontGenerator(
      "Pretendard",
      "1.1rem",
      "500",
      "1.6rem",
      undefined
    ),
  },
};

export default theme;
