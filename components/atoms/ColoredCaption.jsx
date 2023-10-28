function ColoredCaption({ children }) {
  return (
    <span className='text-pink-300 underline underline-offset-4'>
      {children}
    </span>
  );
}

export default ColoredCaption;
