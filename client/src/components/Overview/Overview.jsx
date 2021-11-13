import React from 'react';
import styled from 'styled-components';
import { getProductStyles } from '../../utils';
import MainPicture from './mainPicture';

// flex-direction: ${({ mobile }) => (mobile ? 'column' : 'row')};
const Container = styled.div`
  display: flex;
  flex-direction: ${({ mobile }) => (mobile ? 'column' : 'row')};
  margin: 0 20px 0 20px;
`;

const Text = styled.div`
  width: ${({ mobile }) => (mobile ? '100%' : '35%')};
  margin-left: ${({ mobile }) => (mobile ? '0' : '10px')};
`;

const Title = styled.h2`

`;

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      styles: {},
      photos: [],
      currentPhoto: '',
    };

    this.forwardClick = this.forwardClick.bind(this);
    this.reverseClick = this.reverseClick.bind(this);
  }

  componentDidUpdate(prevProps) {
    const { currentObject } = this.props;
    const { id } = currentObject;
    if (prevProps.currentObject !== currentObject) {
      getProductStyles(id)
        .then((data) => {
          const styles = data.data;
          this.setState({
            styles,
            photos: styles.results[0].photos,
            currentPhoto: styles.results[0].photos[0],
          });
        });
    }
  }

  forwardClick() {
    const { photos } = this.state;
    photos.unshift(photos.pop());
    this.setState({
      photos,
      currentPhoto: photos[0],
    });
  }

  reverseClick() {
    const { photos } = this.state;
    photos.push(photos.shift());
    this.setState({
      photos,
      currentPhoto: photos[0],
    });
  }

  render() {
    const { currentObject, mobile } = this.props;
    const { name, slogan, description } = currentObject;
    const { currentPhoto } = this.state;
    return (
      <Container mobile={mobile}>
        <MainPicture
          mobile={mobile}
          src={currentPhoto.url}
          alt={name}
          forwardClick={this.forwardClick}
          reverseClick={this.reverseClick}
        />
        <Text mobile={mobile}>
          <Title>{name}</Title>
          <p><strong>{slogan}</strong></p>
          <p>{description}</p>
        </Text>
      </Container>
    );
  }
}

export default Overview;
