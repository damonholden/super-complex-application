export const screamString = (str) => {
  if (typeof str === 'string' && str.length > 0) {
    return str.toUpperCase() + '!';
  } else {
    return 'please provide a string';
  }
}
