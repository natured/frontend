import React, { Component } from 'react';
import { connect } from 'react-redux';
import page from '../page';
import { categoriesSelectors, categoriesOperations } from '../../ducks/categories';
import CategoryContainer from '../../components/categories/CategoryContainer/CategoryContainer';

class CategoryPage extends Component {
  static head = ({ category }) => ({
    title: category ? `Shop Local ${category.name}` : 'Shop Local',
    img: category ? `https://natured.s3.amazonaws.com/imgix/category-${category.img}.jpg` : null,
  });

  componentDidMount() {
    this.fetch(this.props.slug);
  }

  componentDidUpdate({ slug }) {
    if (slug !== this.props.slug) {
      this.fetch(this.props.slug);
    }
  }

  fetch = async (slug) => {
    this.props.getCategoryBySlug({ slug });
  }

  render() {
    const { category } = this.props;
    return (
      <div className={category ? 'animated fadeIn' : ''}>
        {category ? <CategoryContainer category={this.props.category} /> : null}
      </div>
    );
  }
}


const mapStateToProps = ({ categories }, { match }) => ({
  slug: match.params.category,
  category: categoriesSelectors.getCategoryBySlug(categories, match.params.category),
});

const mapDispatchToProps = {
  getCategoryBySlug: categoriesOperations.getCategoryBySlug,
};

export default {
  component: connect(mapStateToProps, mapDispatchToProps)(page(CategoryPage)),
};
