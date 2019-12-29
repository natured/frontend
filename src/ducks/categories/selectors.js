import moment from 'moment';

const getCategoryBySlug = ({ categoriesBySlug }, slug) => (
  categoriesBySlug[slug] || null
);

export default {
  getCategoryBySlug,
};
