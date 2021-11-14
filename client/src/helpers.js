import { getProduct, getProductStyles, getReviewsMeta } from './utils';

const helpers = {
  objectBuilder: (products) => {
    const related = Promise.all(products.map(async (product) => {
      const relation = {
        id: product,
        img: '',
        photos: [],
        name: '',
        slogan: '',
        description: '',
        original_price: '',
        sales_price: null,
        avgRating: null,
        features: [],
      };
      await Promise.all([getProduct(product), getProductStyles(product), getReviewsMeta(product)])
        .then(([productResponse, styleResponse, reviewsMetaResponse]) => {
          let { data } = productResponse;
          relation.name = data.name;
          relation.slogan = data.slogan;
          relation.description = data.description;
          relation.features = data.features;

          const result = styleResponse.data.results[0];
          relation.img = result.photos[0].url;
          relation.photos = result.photos;
          relation.price = result.original_price;
          relation.salesPrice = result.sale_price;

          data = reviewsMetaResponse.data;
          const avg = Object.values(data.ratings).reduce((prev, curr) => (
            Number(prev) + Number(curr)
          ), 0) / (Object.values(data.ratings).length || 1);
          relation.avgRating = Math.floor(avg / 0.25) * 0.25;
        });
      return relation;
    }));
    return related;
  },
};

export default helpers;
