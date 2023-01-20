const Titles = () => {
  return (
    <div
      id="responsive-grid"
      className="grid grid-cols-3 md:grid-cols-5 text-base text-center py-4 border-b-2 border-white border-opacity-40">
      <div className="hidden md:block">Date</div>
      <div className="hidden md:block">Runtime</div>
      <div>Space title</div>
      <div>Speakers</div>
    </div>
  );
};

export default Titles;
