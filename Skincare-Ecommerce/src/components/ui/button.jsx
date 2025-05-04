const button = ({ children, ...props }) => {
  return (
    <button className="bg-pink-500 text-white px-4 py-2 rounded" {...props}>
      {children}
    </button>
  );
};

export default button;
