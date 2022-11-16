function allTheArgs(func, ...args) {
  // Your code here

  let bind = func.bind("", ...args);

  return bind;
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = allTheArgs;
