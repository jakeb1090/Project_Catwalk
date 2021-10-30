import React from 'react';
import ProductBreakdown from './breakdownProduct';
import ReviewList from './reviewList';

class ReviewApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 61590,
      reviews: [
        {
          "review_id": 1055573,
          "rating": 4,
          "summary": "Tenetur aut corrupti consequatur blanditiis cupiditate est nihil necessitatibus.",
          "recommend": true,
          "response": null,
          "body": "Facere ex labore et voluptatem quas ea distinctio perferendis repellat. Non aut id incidunt officia dolor dolorem earum. Eius dolor voluptatem tempora voluptates repellendus voluptatem dolorem ad.",
          "date": "2020-11-25T00:00:00.000Z",
          "reviewer_name": "Adrien_Cronin21",
          "helpfulness": 24,
          "photos": [
            {
              "id": 2061325,
              "url": "https://images.unsplash.com/photo-1485646979142-d4abb57a876f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80"
            },
            {
              "id": 2061326,
              "url": "https://images.unsplash.com/photo-1426647451887-5f2be01918a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
            }
          ]
        },
        {
          "review_id": 1055571,
          "rating": 1,
          "summary": "Quidem cumque voluptas omnis voluptatibus quo necessitatibus.",
          "recommend": false,
          "response": null,
          "body": "Nam quod nobis nesciunt unde voluptatem expedita. Voluptatem recusandae accusantium soluta placeat sed quia atque consequatur fuga. Doloribus omnis laudantium. Quia rerum amet. Ad facere placeat officia consequatur eveniet ducimus. Voluptatibus impedit commodi voluptatem.",
          "date": "2021-09-06T00:00:00.000Z",
          "reviewer_name": "Karen.Hessel20",
          "helpfulness": 22,
          "photos": [
            {
              "id": 2061328,
              "url": "https://images.unsplash.com/uploads/1412198532414025532c0/6a31309c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80"
            }
          ]
        },
        {
          "review_id": 1055574,
          "rating": 5,
          "summary": "Inventore voluptatum dolorum nemo molestias mollitia est consequatur.",
          "recommend": true,
          "response": null,
          "body": "Eveniet in fuga reiciendis ipsum eaque. Ex non vel labore voluptas minus autem eveniet. Culpa voluptate corporis et sed occaecati libero mollitia.",
          "date": "2020-12-11T00:00:00.000Z",
          "reviewer_name": "Jaquelin.Fadel",
          "helpfulness": 11,
          "photos": [
            {
              "id": 2061322,
              "url": "https://images.unsplash.com/photo-1517438476312-10d79c077509?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
            },
            {
              "id": 2061323,
              "url": "https://images.unsplash.com/photo-1519722417352-7d6959729417?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
            },
            {
              "id": 2061324,
              "url": "https://images.unsplash.com/photo-1507920676663-3b72429774ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
            }
          ]
        },
        {
          "review_id": 1055572,
          "rating": 5,
          "summary": "Ut cumque molestias.",
          "recommend": true,
          "response": null,
          "body": "Voluptas earum et. Animi dolorem repellat. Vero exercitationem dolor vero. Eos ut nihil. Cum ea quod dolor consequatur quia et tenetur iure quae.",
          "date": "2020-12-06T00:00:00.000Z",
          "reviewer_name": "Fredy75",
          "helpfulness": 4,
          "photos": [
            {
              "id": 2061327,
              "url": "https://images.unsplash.com/photo-1542702942-161ceb2e3d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
            }
          ]
        },
        {
          "review_id": 1055570,
          "rating": 3,
          "summary": "Quo tempora consequuntur itaque autem voluptatem ut cumque.",
          "recommend": true,
          "response": null,
          "body": "Impedit quibusdam ratione ducimus velit qui. Aut assumenda tempore nulla et est possimus. Consequuntur ipsum aut aperiam. Et voluptas mollitia asperiores illo eaque ea. Odit nihil temporibus. Totam dicta accusantium amet culpa fugit aspernatur aut voluptates.",
          "date": "2021-02-22T00:00:00.000Z",
          "reviewer_name": "Donato_Wilderman59",
          "helpfulness": 2,
          "photos": [
            {
              "id": 2061329,
              "url": "https://images.unsplash.com/photo-1519241978701-4302ab53de1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
            }
          ]
        }
      ],
      "characteristics": {
        "Size": {
          "id": 206724,
          "value": "3.4090909090909091"
        },
        "Width": {
          "id": 206725,
          "value": "2.6818181818181818"
        },
        "Comfort": {
          "id": 206726,
          "value": "3.5454545454545455"
        },
        "Quality": {
          "id": 206727,
          "value": "3.0909090909090909"
        }
      },
      "ratings": {
        "1": "3",
        "2": "2",
        "3": "3",
        "4": "6",
        "5": "8"
      },
      starFilters: [1, 2, 3, 4, 5],
    };
  }

  render() {
    const { id, starFilters, reviews, characteristics, ratings } = this.state;
    const averageRating = function () {
      var totalStars = 0;
      var qty = 0;
      for (const star in ratings) {
        totalStars += star * ratings[star];
        qty += Number(ratings[star]);
        console.log("stars", totalStars)
        console.log("ratings qty", qty)
      }

      return (totalStars / qty).toFixed(1);
    }
    return (
      <div data-testid="reviewapp">
        Ratings and Reviews: a widget by Annie
        <div>Average Rating : {averageRating()}</div>
        <ProductBreakdown id={id} startFilters={starFilters} />
        <ReviewList id={id} reviews={reviews} />
      </div>
    );
  }
}

export default ReviewApp;
