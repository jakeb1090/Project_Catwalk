import { rest } from 'msw';
import { setupServer } from 'msw/node';
import '@testing-library/jest-dom';

const server = setupServer(
  // getProduct
  rest.get('/products/:id', (req, res, ctx) => res(
    ctx.status(200),
    ctx.json({
      id: 61916,
      campus: 'hr-sfo',
      name: 'Maximo 1000 Backpack',
      slogan: 'Consequatur ducimus quia illo animi ut placeat.',
      description: 'Ad nisi et maxime non quas. Dolores assumenda sunt iusto qui explicabo veniam ad. Est soluta nam placeat veritatis exercitationem. Facere quod adipisci rem ab. Fugit voluptatem quia rerum aliquid veritatis aut. Libero assumenda perferendis ut.',
      category: 'Backpack',
      default_price: '953.00',
      created_at: '2021-10-28T19:58:55.070Z',
      updated_at: '2021-10-28T19:58:55.070Z',
      features: [
        {
          feature: 'Sustainably Sourced',
          value: null,
        },
        {
          feature: 'Sustainably Sourced',
          value: null,
        },
        {
          feature: 'Sustainably Sourced',
          value: null,
        },
      ],
    }),
  )),
  // getProductStyles
  rest.get('/products/:id/styles', (req, res, ctx) => res(
    ctx.status(200),
    ctx.json({
      product_id: '61916',
      results: [
        {
          style_id: 380675,
          name: 'Purple',
          original_price: '953.00',
          sale_price: null,
          'default?': true,
          photos: [
            {
              thumbnail_url: 'https://images.unsplash.com/photo-1457968867385-9f877f3f2bce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
              url: 'https://images.unsplash.com/photo-1451256656121-9ffc0c898a49?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
            },
          ],
          skus: {
            2213269: {
              quantity: 48,
              size: 'One Size',
            },
          },
        },
        {
          style_id: 380676,
          name: 'Silver',
          original_price: '953.00',
          sale_price: null,
          'default?': false,
          photos: [
            {
              thumbnail_url: 'https://images.unsplash.com/photo-1519862170344-6cd5e49cb996?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
              url: 'https://images.unsplash.com/photo-1519862170344-6cd5e49cb996?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
            },
          ],
          skus: {
            2213270: {
              quantity: 6,
              size: 'One Size',
            },
          },
        },
        {
          style_id: 380677,
          name: 'Ivory',
          original_price: '953.00',
          sale_price: '837.00',
          'default?': false,
          photos: [
            {
              thumbnail_url: 'https://images.unsplash.com/11/converse-fields.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
              url: 'https://images.unsplash.com/photo-1473396413399-6717ef7c4093?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
            },
          ],
          skus: {
            2213271: {
              quantity: 30,
              size: 'One Size',
            },
          },
        },
        {
          style_id: 380678,
          name: 'Orchid',
          original_price: '953.00',
          sale_price: null,
          'default?': false,
          photos: [
            {
              thumbnail_url: 'https://images.unsplash.com/photo-1517278322228-3fe7a86cf6f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
              url: 'https://images.unsplash.com/photo-1487174244970-cd18784bb4a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1652&q=80',
            },
          ],
          skus: {
            2213272: {
              quantity: 50,
              size: 'One Size',
            },
          },
        },
      ],
    }),
  )),
  // getProductRelated
  rest.get('/products/:id/related', (req, res, ctx) => res(
    ctx.status(200),
    ctx.json([
      62482,
      61971,
      61829,
      62073,
      61848,
      61944,
      62354,
    ]),
  )),
  // getReviewsMeta
  rest.get('/reviews/meta/', (req, res, ctx) => res(
    ctx.status(200),
    ctx.json({
      product_id: '61916',
      ratings: {
        1: '1',
        2: '7',
        3: '1',
        4: '3',
        5: '5',
      },
      recommended: {
        false: '1',
        true: '16',
      },
      characteristics: {
        Quality: {
          id: 207857,
          value: '3.5294117647058824',
        },
      },
    }),
  )),
);

export default server;
