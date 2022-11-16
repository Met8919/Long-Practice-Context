function changeContext(func, bat) {
  const x = func.bind(bat);

  return x();
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = changeContext;
