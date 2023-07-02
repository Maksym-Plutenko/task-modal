const autocomplete = value => {
  //   console.log(value);
  let res = value;

  //   if (value.length === 1) {
  //     const num = Number(value);
  //     if (Number.isNaN(num)) {
  //         res = '';
  //     } else if (num > 2) {
  //         res = '0' + value;
  //     }
  //   }

  //   if (value.length === 2) {
  //     const num = Number(value);
  //     if (Number.isNaN(num)) {
  //         res = '0';
  //     } else if (num > 24) {
  //         res = '24' + value;
  //     }
  //   }

  if (value.length === 1) {
    const num = Number(value);
    if (!Number.isNaN(num)) {
      if (num > 2) {
        res = '0' + value + ':';
      }
    }
  }

  if (value.length === 2) {
    const num = Number(value);
    if (!Number.isNaN(num)) {
      if (num > 24) {
        res = '24:';
      } else {
        res = value + ':';
      }
    }
  }

  return res;
};

export { autocomplete };
