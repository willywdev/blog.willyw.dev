function Subheadline({ children }) {
  return (
    <h2 className='text-4xl text-transparent text-bold bg-clip-text bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100'>
      {children}
    </h2>
  );
}

export default Subheadline;
