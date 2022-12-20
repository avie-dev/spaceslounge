const Titles = () => {
  return (
    <div
      id="responsive-grid"
      className="grid grid-cols-5 md:grid-cols-3 text-base text-center py-4 border-b-2 border-white border-opacity-40">
      <div className="md:hidden">Date</div>
      <div className="md:hidden">Runtime</div>
      <div>Space title</div>
      <div>Speakers</div>
    </div>
  );
};

export default Titles;
