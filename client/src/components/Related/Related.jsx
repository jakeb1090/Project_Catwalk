import React, { Component } from 'react';
import styled from 'styled-components';
import Carousel from './Carousel';
import Modal from './Modal';
import {
  getPaginatedProducts,
  getProduct,
  getProductStyles,
  getProductRelated,
  getReviewsMeta,
} from '../../utils';

const Title = styled.h5`
  border: solid black;
`;

class Related extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProduct: {},
      compareData: [],
      outfitIds: [],
      relatedIds: [],
      related: [],
      outfit: [],
      loading: true,
    };
  }
  componentDidMount() {
    this.relatedBuilder();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.currentProduct !== this.props.currentProduct) {
      this.relatedBuilder();
    }
  }

  relatedBuilder = () => {
    this.setState({loading: true});
    getProduct(this.props.currentProduct)
    .then((data) => {
      this.setState({currentProduct: data.data})
    })
    getProductRelated(this.props.currentProduct)
      .then((response) => {
        const { data } = response;
        this.objectBuilder(data)
        .then((related) => {
          this.setState({related})
        })
      })
      .then(() => {
        this.objectBuilder(this.state.outfitIds)
        .then((outfit) => {
          this.setState({outfit})
        });
      })
      .then(() => {
        this.setState({
          loading: false
        })
      });
  }

  objectBuilder = (products) => {
    let related = Promise.all(products.map(async (product) => {
      let relation = {
        id: product,
        img: '',
        title: '',
        price:'',
        salesPrice: null,
        avgRating: null,
        features: [],
      };
      await Promise.all([getProduct(product), getProductStyles(product), getReviewsMeta(product)])
        .then(([productResponse, styleResponse, reviewsMetaResponse]) => {
          let { data } = productResponse;
          relation.title = data.name;
          relation.features = data.features

          const result = styleResponse.data.results[0];
          relation.img = result.photos[0].url;
          relation.price = result.original_price;
          relation.salesPrice = result.sale_price;

          data = reviewsMetaResponse.data;
          let avg = Object.values(data.ratings).reduce((prev, curr) => {
            return Number(prev) + Number(curr)
          }, 0) / (Object.values(data.ratings).length || 1);
          relation.avgRating = Math.floor(avg / 0.25) * 0.25;
        })
        return relation;
    }));
    return related;
  }

  onAddOutfitClick = () => {
    if (this.state.outfitIds.indexOf(this.props.currentProduct) !== -1) {
      return;
    }

    this.setState({loading: true});
    this.objectBuilder([...this.state.outfitIds, this.props.currentProduct])
      .then((outfit) => {
        this.setState({outfit});
      })
      .then(() => {
        this.setState({outfitIds: [...this.state.outfitIds, this.props.currentProduct]})
      })
      .then(() => {
        this.setState({loading: false});
      })
  }

  onDeleteOutfitClick = (id) => {
    // this.setState({loading: true});
    this.setState({
      outfitIds: this.state.outfitIds.filter((product) => {
        return product !== id
      }),
      outfit: this.state.outfit.filter((product) => {
        return product.id !== id
      })
    });
  }

  onCompareProductClick = (e, id) => {
    e.stopPropagation();

    const { name, features } = this.state.currentProduct;
    const currentName = name;
    const currentFeatures = features.slice();

    let comparingName;
    let comparingFeatures;

    this.state.related.forEach((product) => {
      if (product.id === id) {
        comparingName = product.title;
        comparingFeatures = product.features;
      }
    });

    let compareData = [[currentName, null, comparingName]];
    currentFeatures.map((currFeat) => {
      let compared = [currFeat.value, currFeat.feature]
      for (const [index, compFeat] of comparingFeatures.entries()) {
        if (compFeat.feature === currFeat.feature) {
          compared.push(compFeat.value);
          comparingFeatures.splice(index, 1);
          break;
        }
      }
      if (compared.length !== 3) {
        compared.push(null);
      }
      compareData.push(compared);
    });

    if (comparingFeatures.length) {
      for (const feature of comparingFeatures) {
        const compared = [null, feature.feature, feature.value];
        compareData.push(compared);
      }
    }

    this.setState({compareData});
  }

  render() {
    const { compareData, related, outfit, loading } = this.state;
    const { onRelatedClick } = this.props;
    return(
      <div data-testid="related">
        {loading
        ?
          <h1>loading...</h1>
        :
          <>
            <Modal
              data={compareData}
            />
            <Title>Related Products</Title>
            <Carousel
              onCompareProductClick={this.onCompareProductClick}
              onRelatedClick={onRelatedClick}
              data={related}
              btn={'compare'}
            />
            <Title>Your Outfit</Title>
            <Carousel
              onAddOutfitClick={this.onAddOutfitClick}
              onDeleteOutfitClick={this.onDeleteOutfitClick}
              data={outfit}
              btn={'delete'}
            />
          </>
        }
      </div>
    )

  }
}

export default Related;
