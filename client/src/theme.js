const theme = {
  palette: {
    primary: {
      main: '#FF5500',
      light: '#FD6E35',
      dark: '#CC4400',
    },
    secondary: {
      main: '#FF5500',
      light: '#FD6E35',
      dark: '#CC4400',
    },
    background: {
      body: '#f9f9f9',
      base: '#ececec',
      alt1: '#d8d8d8',
      alt2: '#c5c5c5',
    },
    text: {
      primary: '#000',
      main: '#5f5f5f',
      light: '#b1b1b1',
    },
  },
  spacing: (multiplier = 1) => `${4 * multiplier}px`,
  typography: {
    h1: {
      'font-weight': 'bold',
      'font-size': '68px',
    },
    h2: {
      'font-weight': 'bold',
      'font-size': '50px',
    },
    h3: {
      'font-weight': 'bold',
      'font-size': '38px',
    },
    h4: {
      'font-weight': 'bold',
      'font-size': '28px',
    },
    h5: {
      'font-weight': 'bold',
      'font-size': '18px',
    },
    h6: {
      'font-weight': 'bold',
      'font-size': '12px',
    },
    body: {
      'font-weight': 'normal',
      'font-size': '14px',
    },
    p: {
      'margin-block': '0.4em',
    },
    button: {
      'font-weight': 'bold',
      'font-size': '14px',
      'text-transform': 'uppercase',
    },
  },
};

export default theme;
