const MarketingTools = () => {
  const success = " bg-green-200 text-green-500 ";
  const error = "bg-red-200 text-red-500";
  return (
    <div>
      <div>
        <p className="absolute bottom-8 right-20 text-2xl font-semibold">😵‍💫 Working on it ...</p>
        {/* <h1 className="text-lg md:text-2xl font-semibold">Marketing Tools</h1>
        <div className="flex items-center gap-5">
          <button className="btn btn-sm btn-ghost">A</button>
          <button className="btn btn-sm btn-ghost">A</button>
          <button className="btn btn-sm btn-ghost">A</button>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-8 mt-8">
        {[...Array(4).keys()].map((i) => (
          <div className="card items-center justify-center gap-4 p-4 border border-dashed border-gray-500">
            <p className="text-lg font-semibold">Total Cupons </p>
            <p className="font-semibold">08</p>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <div className="flex justify-end items-center gap-3">
          <button className="btn">Create Coupon</button>
          <button className="btn">Create Campaigns</button>
        </div>
        <div className="flex items-center gap-5 mt-5 ">
          <div className="card border p-5 w-full">
          <p className="text-sm font-semibold mb-5">Coupons List</p>
            {" "}
            <div className="overflow-x-auto">
              <table className="table table-xs">
                <thead>
                  <tr className="font-semibold">
                    <th>#</th>
                    <th>Coupon ID</th>
                    <th>Create Date</th>
                    <th>Total Use</th>
                    <th></th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {[...Array(10).keys()].map((i) => (
                    <tr key={i}>
                      <th>{i}</th>
                      <td>658545</td>
                      <td>12 jun, 2024</td>
                      <td>10</td>
                      <td></td>
                      <td>
                        <span
                          className={`border border-dashed px-4 py-[1px] rounded-full font-semibold ${success}`}
                        >
                          Compleate
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="card border p-5 w-full">
            <p className="text-sm font-semibold mb-5">Campaigns List</p>
            {" "}
            <div className="overflow-x-auto">
              <table className="table table-xs">
                <thead>
                  <tr className="font-semibold">
                    <th>#</th>
                    <th>Campaigns ID</th>
                    <th>Create Date</th>
                    <th>Participent</th>
                    <th>Winner</th>
                  </tr>
                </thead>
                <tbody>
                  {[...Array(10).keys()].map((i) => (
                    <tr key={i}>
                      <th>{i}</th>
                      <td>658545</td>
                      <td>12 jun, 2024</td>
                      <td>100</td>
                      <td>80</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div> */}
      </div>
    </div>
  );
};

export default MarketingTools;
