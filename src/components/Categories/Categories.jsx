import Container from '../shared/Container';
import categories from './CategoriesData.js';
import CategoryBox from './CategoryBox';

const Categories = () => {
  return (
    <Container>
      <div className="flex flex-row items-center justify-between gap-6 overflow-x-auto pt-4">
        {categories.map((item) => (
          <CategoryBox label={item.label} icon={item.icon} key={item.label} />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
