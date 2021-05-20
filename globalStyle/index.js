import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    --brand_blue: #1f80e0;
    --brand_red: #f15151;
    --brand_orange: #db882a;
    --bg_gradient_l0: linear-gradient(to bottom, #141b29, #0c111b 300px);
    --bg_gradient_l1: linear-gradient(to bottom, #192133, #111826);
    --bg_gradient_l2: linear-gradient(to bottom, #334366, #334366, #1c2940);
    --card_gradient: #030B17;
    --header_color: #121926;
    --bg_color_l0: #0c111b;
    --bg_color_l1: #192133;
    --bg_color_l2: #334366;
    --bg_color_l3: rgba(144, 153, 153, 0.1);
    --border_color_l0: #2E3333;
    --text_color_l0: #fff;
    --text_color_l1: rgba(255, 255, 255, 0.8);
    --text_color_l2: rgba(255, 255, 255, 0.6);
    --text_color_l3: #DADADA;
    --text_color_l4: #909999;
    --text_link_color: #1f80e0;
    --text_btn_color: #1f80e0;

    --bg_color: #040714;
    --text_color: #f9f9f9;

  }
  body {
    color: var(--text_color);
    background-color: var(--bg_color);
    font-size: 14px;
    font-family: Avenir-Roman, sans-serif;
    @media all and (min-width: 480px) {
      font-size: 15px;
    }
    @media all and (min-width: 768px) {
      font-size: 16px;
    }
    margin: 0;
    padding: 0;
  }
  a {
    color: var(--text_color);
    text-decoration: none;
  }
`
export default GlobalStyle
