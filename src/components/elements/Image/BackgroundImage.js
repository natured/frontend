import React, { Component } from 'react';
import ProgressiveImage from 'react-progressive-image';
import imgix from './imgix';

class Image extends Component {
  render() {
    const { options, img, className, children } = this.props;

    const source = imgix(img, options);
    const placeholder = imgix(img, { ...options, q: 1, auto: 'format', blur: 20, w: 1000 });

    return (
      <ProgressiveImage src={source} placeholder={placeholder}>
        {(src, loading) => (
          <div className={`${className} animated fadeIn`} style={{ backgroundImage: `url('${src}')`, opacity: loading ? 0.5 : 1 }}>
            {children}
          </div>
        )}
      </ProgressiveImage>
    );
  }
}

export default Image;
