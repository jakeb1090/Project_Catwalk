import React from 'react';

const utils = {
  date: function (date) {
    const year = date.slice(0, 4);
    const month = date.slice(5, 7);
    const day = date.slice(8, 10);
    let formattedDate = new Date(Date.UTC(year, month, day));
    formattedDate = formattedDate.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });
    return formattedDate;
  },
  stars: function (n) {
    var stars = '';
    for (let i = 0; i < 5; i += 1) {
      if (i < n) {
        stars += '★';
      } else {
        stars += '☆';
      }
    }
    return stars;
  },
  avgRating: function (avg) {
    var avgStar = '';
    for (let i = 1; i <= 5; i++) {
      if (avg > i) {
        avgStar += '★'
      } else if (i - avg > 1) {
        avgStar += '☆'
      } else {
        avgStar += "1/2"
      }
    }
    return avgStar;
  }

};

export default utils;
