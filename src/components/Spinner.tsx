function Spinner() {
  return (
    <div className="animate-spin bg-sky-400 relative w-24 h-24 rounded-full">
      <div className="top-1/2 left-1/2 absolute w-20 h-20 transform -translate-x-1/2 -translate-y-1/2 bg-gray-200 border-2 border-white rounded-full" />
    </div>
  );
}

export default Spinner;
