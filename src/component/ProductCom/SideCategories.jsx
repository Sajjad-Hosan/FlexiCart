const categories = [];
const SideCategories = () => {
  return (
    <div className="card bg-base-100 rounded-box border">
      <ul className="flex flex-col p-5">
        <li>
          <h2 className="font-semibold">Products Categories</h2>
          <ul>
            <li className="flex items-center gap-3">
                <input type="checkbox" className="input"/>
                <a href="#" className="link">
                    Electronic
                </a>
                <span className="text-xs text-gray-400">
                    (327)
                </span>
            </li>
           
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default SideCategories;
