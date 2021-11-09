import React from 'react';
import ReactModal from 'react-modal';
import { render, screen } from '@testing-library/react';
import { test, expect } from '@jest/globals';
import ReviewList from '../../components/Reviews/reviewList';

import ReviewModal from '../../components/Reviews/ReviewModal';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event'


test('close an open modal window ', () => {
  const isOpen = true;
  const closeModal = function () {
    isOpen = false
  }
  // render(
    // <ReviewModal
    //   data-testid="modal1"
    //   isOpen={isOpen}
    //   closeModal={closeModal.bind(this)} />);
    render(
      <ReviewList
        id={reviews62000.product}
        reviews={reviews}
        starFilters={starFilters}
        characteristics={meta62000.characteristics}
      />
    );
  expect(screen.getById('modal1')).toBeInTheDocument();

  userEvent.click(getByText(/Cancel/i))

  expect(screen.getById('modal1')).not.toBeInTheDocument();
  expect(closeModal).toHaveBeenCalledTimes(1);
  //expect(isOpen) //to equal false


});