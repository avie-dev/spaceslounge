import data from "../content/contributors.json";

export default function ContributorPage(props) {
  return (
    <>
      <div className="text-6xl font-semibold text-center mt-40">
        Our Contributors
      </div>
      <div className="flex flex-wrap justify-center">
        {data.map((d, i) => (
          <ContributorCard key={i} data={d} />
        ))}
      </div>
    </>
  );
}

function ContributorCard({ data }) {
  return (
    <>
      <div className="relative my-6 mx-3 h-[353px] w-[265px] rounded-lg bg-[#2F3F50]">
        <img
          src={data.img}
          className="py-3 mx-3 h-[245px] w-[240px] rounded-lg"
        />
        <div className="m-3">
          <div>
            <div className="text-2xl font-semibold">{data.name}</div>
            <div className="font-light">{data.job}</div>
          </div>
        </div>
      </div>
    </>
  );
}
