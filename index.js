const green = {
  g0: "#b8ffd9",
  g1: "#74fbb3",
  g2: "#31fd91",
  g3: "#19b07d",
  g4: "#16946a",
};
const colors = {
  black: green.g4,
  red: green.g1,
  green: green.g3,
  yellow: green.g0,
  blue: green.g2,
  magenta: green.g4,
  cyan: green.g4,
  white: green.g0,
  lightBlack: green.g4,
  lightRed: green.g2,
  lightGreen: green.g2,
  lightYellow: green.g1,
  lightBlue: green.g2,
  lightMagenta: green.g2,
  lightCyan: green.g2,
  lightWhite: green.g0,
  colorCubes: green.g0,
  grayscale: green.g2
};

exports.decorateConfig = config => {
  return Object.assign({}, config, {
    backgroundColor: "#121a17",
    foregroundColor: green.g2,
    borderColor: "#121a17",
    cursorColor: green.g0,
    colors,
    termCSS: `
			${config.termCSS || ''}
			* {
				text-shadow: 0 0 10px ${green.g0};
			}
		`,
    css: `
      ${config.css || ''}
      .tabs_nav .tabs_title {
        color: ${green.g2};
      }
			.tabs_nav .tabs_list .tab_text {
        color: ${green.g2};
      }
      .tab_tab .tab_active {
        color: ${green.g1};
				text-shadow: 0 0 10px ${green.g0};
      }
      .terms_terms {
        text-shadow: 0 0 10px ${green.g0};
      }
		`,
  });
};