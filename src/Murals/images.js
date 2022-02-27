function importAll(r) {
  let images = {};
   r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
  return images
 }
 const allImages = importAll(require.context('../Murals', false, /\.(png|jpe?g|svg)$/));


export default allImages