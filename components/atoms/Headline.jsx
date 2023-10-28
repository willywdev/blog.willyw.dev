function Headline({ children }) {
  return (
    <h1 className='text-3xl text-transparent shadow-xl -z-20 text-bold bg-clip-text bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100'>
      {children}
    </h1>
  );
}

export default Headline;
