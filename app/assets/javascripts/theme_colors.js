export const dark_mode_colors = {
  primary_one: '#67abfa',
  primary_two: '#2c3132',
  primary_three: '#7dcb85',
  background_main: '#000b1d',
  background_support: '#002137',
  line: '#b1b1b1',
  sharp_line: '#eeeeee',
  heavy_error: '#ff7575',
  error_light: '#a20000',
  heavy_alert: '#ecc767',
  light_alert: '#a47c00',
  heavy_success: '#b9e586',
  light_success: '#154100',
  comments_color: 'var(--heavy_success)',
  key_words_color: 'var(--primary_one)',
  strings_color: 'var(--heavy_error)'
};
export const light_mode_colors = {
  primary_one: '#245185',
  primary_two: '#cee3ea',
  primary_three: '#4c7c51',
  background_main: '#fff',
  background_support: '#cee3ea',
  line: '#464646',
  sharp_line: '#000',
  heavy_error: '#a20000',
  error_light: '#ffc2c2',
  heavy_alert: '#ffd452',
  light_alert: '#ffe9ac',
  heavy_success: '#246700',
  light_success: '#b9e586',
  comments_color: 'var(--heavy_success)',
  key_words_color: 'var(--primary_one)',
  strings_color: 'var(--heavy_error)'
};

export function switch_theme() {
  console.log("sharp line is: ", document.documentElement.style.getPropertyValue('--sharp_line'));
  if (document.documentElement.style.getPropertyValue('--sharp_line') === '#000') {
    console.log("switching to dark mode!");
    Object.keys(dark_mode_colors).forEach(color => {
      document.documentElement.style.setProperty('--' + color, dark_mode_colors[color]);
    });
  } else {
    console.log("switching to light mode!");
    Object.keys(light_mode_colors).forEach(color => {
      document.documentElement.style.setProperty('--' + color, light_mode_colors[color]);
    });
  }
};
