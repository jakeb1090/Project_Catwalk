import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { test, expect } from '@jest/globals';
import ReviewTile from '../../components/Reviews/reviewTile';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event'


const review = {
  review_id: 1055585,
  rating: 5,
  summary: 'Dolore inventore veniam et expedita consequatur.',
  recommend: true,
  response: null,
  body: "Voluptatem iure ullam sed ut autem unde aliquid perspiciatis. Est nihil quia. Tenetur inventore sed quidem quos molestiae corrupti dignissimos iure. Mollitia et non iure reprehenderit dolorem eos.",
  date: "2021-05-01T00:00:00.000Z",
  reviewer_name: "Waino55",
  helpfulness: 29,
  photos: [
    {
      id: 2061300,
      url: "https://images.unsplash.com/photo-1548861216-17dd1ac80d5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=664&q=80"
    }
  ]
}

describe("Review Tile", () => {

  test('renders a single review ', () => {
    render(<ReviewTile review={review} />);

    //TODO check for star graphics, not just the number of star
    expect(screen.getByText(/Number of Stars: 5/i)).toBeInTheDocument();

    //check summary
    expect(screen.getByText('Dolore inventore veniam et expedita consequatur.')).toBeInTheDocument();

    //check username
    // look for partial text? /text/i
    expect(screen.getByText(/Waino55/i)).toBeInTheDocument();

    //check date
    //TODO my date format isn't correct yet
    // expect(screen.getByText('May 1, 2021')).toBeInTheDocument()

    const body = screen.getByText('Voluptatem iure ullam sed ut autem unde aliquid perspiciatis. Est nihil quia. Tenetur inventore sed quidem quos molestiae corrupti dignissimos iure. Mollitia et non iure reprehenderit dolorem eos.');
    expect(body).toBeInTheDocument();

    //check seller response
    expect(screen.queryByText('Response from seller')).not.toBeInTheDocument();

    //check recommendation
    //TODO: check for graphic
    expect(screen.getByText('I recommend this product')).toBeInTheDocument();

    //check for helpfulness button
    expect(screen.getByText('Yes (29)')).toBeInTheDocument();
    //check for report button
    expect(screen.getByText('Report')).toBeInTheDocument();

  });

  test('helpfulness count increases on click', async () => {
    render(<ReviewTile review={review} />);
    const YES = screen.getByTestId('helpfulButton');
    await waitFor(() => screen.getByText(/Yes (29)/i));
    expect(YES).toBeInTheDocument(); //this is broken!
    //click the button
    userEvent.click(YES);

    expect(screen.getByText(/Yes (30)/i)).toBeInTheDocument();

  })

  test('clicking helpful triggers putFeeback function', () => {
    const dummyPUT = jest.fn(() => true)

    render(<ReviewTile review={review} putFeedback={dummyPUT.bind(this)} />);

    userEvent.click(screen.getByTestId('helpfulButton'))
    userEvent.click(screen.getByTestId('helpfulButton'))

    expect(dummyPUT.mock.calls.length).toBe(2);

  })

  test('clicking report triggers putFeedback function', () => {
    const dummyPUT = jest.fn(() => true)

    render(<ReviewTile review={review} putFeedback={dummyPUT.bind(this)} />);

    userEvent.click(screen.getByTestId('reportButton'))
    expect(dummyPUT.mock.calls.length).toBe(1);

  })
})