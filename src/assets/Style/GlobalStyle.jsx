import { createGlobalStyle } from 'styled-components';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const GlobalStyle = createGlobalStyle`

	* { padding: 0; margin: 0; }
	html, body {
		margin: 0;
		min-height: 100%;
		height: 100%;
		width: 100%;
	}

	*, *::before, *::after {
    	box-sizing: border-box;
  	}

  	body {
    	font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    	line-height: 1.5;
  	}

	#root{
		height: 100%;
		width: 100%;
	}

	form{
		width: 100%;
	}
`;

export default GlobalStyle;
