import React, { Component } from 'react';
import { Image } from '../../elements';

/**
 * Renders a hero section to show an image and content on halfs
 *   - Expects side (either 'left' or 'right') to denote image side
 *   - Expects src to display the image
 *   - Expects inner children to render opposite the image
 */
class ImageWithContent extends Component {

  render() {
    const { side, src, children } = this.props;
    return (
      <section className="hero split-with-image">
        <div className={`hero-content image-${side}`}>
          <div className="left">
            {side === 'left' ? <Image src={src} /> : children}
          </div>
          <div className="right">
            {side === 'right' ? <Image src={src} /> : children}
          </div>
        </div>
      </section>
    );
  }
}

export default ImageWithContent;
