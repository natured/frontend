import React, { Component } from 'react';
import LazyImage from 'react-lazy-progressive-image';
import styled from 'styled-components';
import BackgroundImage from './BackgroundImage';
import imgix from './imgix';

const StyledImage = styled.img`
  transition: all 0.5s ease;
  opacity: ${props => (props.loading ? 0.9 : 1)};
`;


class Image extends Component {
  render() {
    const { options, img, alt, className } = this.props;

    if (this.props.background) {
      return <BackgroundImage {...this.props} />;
    }

    const placeholder = this.props.placeholder
      ? imgix(this.props.placeholder.url, this.props.placeholder.options)
      : imgix('placeholder-loading', { ...options, extension: 'png' });


    return (
      <LazyImage
        placeholder={placeholder}
        src={imgix(img, options)}
        visibilitySensorProps={{ partialVisibility: true }}
      >
        {src => <StyledImage alt={alt} src={src} className={className} />}
      </LazyImage>
    );
  }
}

export default Image;
