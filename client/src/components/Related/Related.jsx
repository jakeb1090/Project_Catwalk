import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Carousel from './Carousel';
import Modal from './Modal';
import { getProductRelated } from '../../utils';
import helpers from '../../helpers';

class Related extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProduct: {},
      compareData: [],
      outfitIds: [],
      // relatedIds: [],
      related: [],
      outfit: [],
      loading: true,
      showModal: false,
    };
    this.onCompareProductClick = this.onCompareProductClick.bind(this);
    this.onAddOutfitClick = this.onAddOutfitClick.bind(this);
    this.onDeleteOutfitClick = this.onDeleteOutfitClick.bind(this);
    this.relatedBuilder = this.relatedBuilder.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  componentDidMount() {
    this.relatedBuilder();
  }

  componentDidUpdate(prevProps) {
    const { currentProduct } = this.props;
    if (prevProps.currentProduct !== currentProduct) {
      this.relatedBuilder();
    }
  }

  onCompareProductClick(e, id) {
    e.stopPropagation();
    document.body.style.overflow = 'hidden';

    const { currentProduct, related } = this.state;
    const { name, features } = currentProduct;
    const currentName = name;
    const currentFeatures = features.slice();

    let comparingName;
    let comparingFeatures;

    related.forEach((product) => {
      if (product.id === id) {
        comparingName = product.name;
        comparingFeatures = product.features;
      }
    });

    const compareData = [[currentName, null, comparingName]];
    currentFeatures.forEach((currFeat) => {
      const compared = [currFeat.value, currFeat.feature];
      for (let i = 0; i < comparingFeatures.length; i += 1) {
        const compFeat = comparingFeatures[i];
        if (compFeat.feature === currFeat.feature) {
          compared.push(compFeat.value);
          comparingFeatures.splice(i, 1);
          break;
        }
      }

      if (compared.length !== 3) {
        compared.push(null);
      }
      compareData.push(compared);
    });

    if (comparingFeatures.length) {
      comparingFeatures.forEach((feature) => {
        const compared = [null, feature.feature, feature.value];
        compareData.push(compared);
      });
    }

    this.setState({
      compareData,
      showModal: true,
    });
  }

  onAddOutfitClick() {
    const { outfit, outfitIds, currentProduct } = this.state;
    if (outfitIds.indexOf(currentProduct.id) !== -1) {
      return;
    }

    this.setState({
      outfit: [...outfit, currentProduct],
      outfitIds: [...outfitIds, currentProduct.id],
    });
  }

  onDeleteOutfitClick(id) {
    const { outfitIds, outfit } = this.state;
    this.setState({
      outfitIds: outfitIds.filter((product) => product !== id),
      outfit: outfit.filter((product) => product.id !== id),
    });
  }

  relatedBuilder() {
    const { currentProduct } = this.props;

    getProductRelated(currentProduct)
      .then((response) => {
        const { data } = response;
        helpers.objectBuilder(data)
          .then((related) => {
            this.setState({ related });
          });
      })
      .then(() => {
        helpers.objectBuilder([currentProduct])
          .then((product) => {
            this.setState({ currentProduct: product[0] });
          });
      })
      .then(() => {
        this.setState({
          loading: false,
        });
      });
  }

  hideModal() {
    document.body.style.overflow = 'visible';
    this.setState({
      showModal: false,
    });
  }

  render() {
    const {
      showModal, compareData, related, outfit, loading,
    } = this.state;
    const { onCardClick, innerWidth, innerHeight, WidgetTitle } = this.props;
    return (
      <div data-testid="related">
        {loading
          ? <h1>loading...</h1>
          : (
            <>
              <Modal
                hideModal={this.hideModal}
                showModal={showModal}
                data={compareData}
              />
              <WidgetTitle>RELATED PRODUCTS</WidgetTitle>
              <Carousel
                onCompareProductClick={this.onCompareProductClick}
                onCardClick={onCardClick}
                data={related}
                btn="compare"
                innerWidth={innerWidth}
                innerHeight={innerHeight}
              />
              <WidgetTitle>YOUR OUTFIT</WidgetTitle>
              <Carousel
                onAddOutfitClick={this.onAddOutfitClick}
                onDeleteOutfitClick={this.onDeleteOutfitClick}
                onCardClick={onCardClick}
                data={outfit}
                btn="delete"
                innerWidth={innerWidth}
                innerHeight={innerHeight}
              />
            </>
          )}
      </div>
    );
  }
}

Related.propTypes = {
  onCardClick: PropTypes.func.isRequired,
  currentProduct: PropTypes.number.isRequired,
};

export default Related;
