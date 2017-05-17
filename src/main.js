function myFunction(...inputs) {
  if (inputs.length === 0) {
    return 0;
  }
  if (inputs.length === 1) {
    return inputs[0];
  }
  if (typeof inputs[0] === 'string') {
    return inputs.join('');
  }
  return inputs.reduce((acc, val) => {
    return acc + val;
  });
}

module.exports = {
  myFunction
}
