import { createGlobalStyle, css } from 'styled-components';

const GlobalStyles = createGlobalStyle`
	@font-face {
		font-family: 'Poppins';
		font-style: normal;
		font-display: swap;
		font-weight: 300;
		src: local('Poppins Light'), local('Poppins-Light'),
				url('/fonts/poppins-v15-latin-300.woff2') format('woff2'), /* Super Modern Browsers */
	}
	@font-face {
		font-family: 'Poppins';
		font-style: normal;
		font-display: swap;
		font-weight: 400;
		src: local('Poppins Regular'), local('Poppins-Regular'),
				url('/fonts/poppins-v15-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
	}
	@font-face {
		font-family: 'Poppins';
		font-style: normal;
		font-display: swap;
		font-weight: 600;
		src: local('Poppins SemiBold'), local('Poppins-SemiBold'),
				url('/fonts/poppins-v15-latin-600.woff2') format('woff2'), /* Super Modern Browsers */
	}

	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	${({ theme }) => css`
    html {
      font-size: 62.5%; // Para usar o rem sem fazer cálculos com o valor básico
    }

    body {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};
    }
  `}
`;

export default GlobalStyles;
