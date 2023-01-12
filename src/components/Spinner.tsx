function Spinner() {
  return (
    <div className='relative w-24 h-24 animate-spin rounded-full bg-sky-400 '>
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gray-200 rounded-full border-2 border-white' />
    </div>
  );
}

export default Spinner;
