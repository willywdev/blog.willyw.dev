function ColoredCaption({ children }) {
  return (
    <span className='text-lg underline text-cyan-100 underline-offset-2'>
      {children}
    </span>
  );
}

export default ColoredCaption;
