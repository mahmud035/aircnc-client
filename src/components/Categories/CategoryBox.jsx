const CategoryBox = ({ label, icon: Icon }) => {
  return (
    <div className="flex cursor-pointer flex-col items-center justify-center gap-2 border-b-2 border-transparent p-3 text-neutral-500 hover:text-neutral-800">
      <Icon size={32} />
      <p className="text-sm font-medium">{label}</p>
    </div>
  );
};

export default CategoryBox;
