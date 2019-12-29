import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { PageView } from '../../../services/Analytics';
import page from '../page';
// import ParentCategory from '../../components/categories/ParentCategory';
// import { fetchCategoryBySlug } from '../../actions';
import CategoryContainer from '../../components/categories/CategoryContainer/CategoryContainer';

class CategoryPage extends Component {
  static head = ({ category }) => ({
    title: category ? `Shop Local ${category.name}` : 'Shop Local',
    img: category ? `https://natured.s3.amazonaws.com/imgix/category-${category.img}.jpg` : null,
  });

  componentDidMount() {
    this.fetch(this.props.slug);
  }

  componentDidUpdate({ category }) {
    // if (category && category !== this.props.category) {
    //   PageView.track('Category', category);
    // }
  }

  componentDidUpdate({ slug }) {
    if (slug !== this.props.slug) {
      this.fetch(this.props.slug);
    }
  }

  fetch = async (slug) => {
    // this.props.fetchCategoryBySlug({ slug });
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

function mapState({ categories }, { match }) {
  const slug = match.params.category;
  return { category: categories.bySlug[slug] || null, slug };
}

export default {
  component: connect(mapState)(page(CategoryPage)),
  // component: connect(mapState, { fetchCategoryBySlug })(page(CategoryPage)),
};
