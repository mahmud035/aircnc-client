import { useSearchParams, useNavigate } from 'react-router-dom';
import qs from 'query-string';

const CategoryBox = ({ label, icon: Icon }) => {
  const [params, setParams] = useSearchParams();
  const value = params.get('category');
  const navigate = useNavigate();

  const handleClick = () => {
    let currentQuery = {};
    if (params) {
      currentQuery = qs.parse(params.toString());
    }

    const updatedQuery = {
      ...currentQuery,
      category: label,
    };

    const url = qs.stringifyUrl(
      {
        url: '/',
        query: updatedQuery,
      },
      { skipNull: true }
    );

    navigate(url);
  };

  // console.log({ value });

  return (
    <div
      onClick={handleClick}
      className="flex cursor-pointer flex-col items-center justify-center gap-2 border-b-2 border-transparent p-3 text-neutral-500 hover:text-neutral-800"
    >
      <Icon size={32} />
      <p className="text-sm font-medium">{label}</p>
    </div>
  );
};

export default CategoryBox;
