const imgix = 'https://natured.s3.amazonaws.com/imgix';

export default (src, options = {}) => {
  const extension = options.extension || 'jpg';

  let query = options.auto ? `?auto=${options.auto}` : '?auto=compress';

  if (options.square) {
    query += `&fit=crop&w=${options.size}&h=${options.size}`;
  }

  if (options.w) {
    query += `&w=${options.w}`;
  }

  if (options.q) {
    query += `&q=${options.q}`;
  }

  if (options.blur) {
    query += `&blur=${options.blur}`;
  }

  if (options.px) {
    query += `&px=${options.px}`;
  }

  return `${imgix}/${src}.${extension}${query}`;
};

// // Given the properties, builds a parameters list
// export default (src, options = defaultOptions) => {
//   const extension = options.extension || 'jpg';
//
//   // Builds initial parameters (always auto-compress!)
//   let params = `.${extension}?auto=compress&`;
//
//   if (options.square) {
//     params += `fit=crop&w=${options.size}&h=${options.size}`;
//   }
//
//   return `${root}/${src}${params}`;
// };
