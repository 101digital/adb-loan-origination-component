export const sortnull = (arr: any[]) => {
  // default to ascending
  const arrSor: any[] = [];
  arr.forEach(function (el) {
    if (el.data === null) {
      arrSor.push(el);
    } else {
      arrSor.unshift(el);
    }
  });

  return arrSor;
};
