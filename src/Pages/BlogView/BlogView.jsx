import {
  FaAngleLeft,
  FaAngleRight,
  FaPlus,
  FaRegBookmark,
} from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import CommentModal from "../../component/CommentModal/CommentModal";
import { HiOutlineSave } from "react-icons/hi";

const BlogView = () => {
  const navigate = useNavigate();
  return (
    <>
      <CommentModal />
      <div className="card p-10">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <button
              className="btn btn-sm btn-ghost mt-1"
              onClick={() => navigate(-1)}
            >
              <FaAngleLeft />
            </button>
            <p className="text-2xl font-semibold">Blog View</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="pr-2 flex justify-end gap-2 transition duration-100 my-2">
              <button
                className="btn btn-sm btn-circle btn-ghost flex tooltip"
                data-tip="Save"
              >
                <HiOutlineSave className="text-lg" />
              </button>
            </div>
          </div>
        </div>
        <div className="mt-6 flex flex-col gap-3">
          <img
            src="https://html.pixelfit.agency/pesco/assets/images/blog/blog-big-1.png"
            alt=""
            className="object-contain p-10 mx-auto"
            width={1000}
          />
          <div className="p-5 flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <p className="text-sm font-semibold">28 june, 2021-2022</p>
              <span className="rounded-lg border border-dashed border-gray-400 px-6 py-2 font-semibold">
                05 Comments
              </span>
            </div>
            <h1 className="text-2xl font-semibold">Blog Title</h1>
            <p className="text-sm font-semibold">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea
              voluptate quasi, enim consequatur odit assumenda ad error amet
              corporis itaque, ipsam temporibus accusantium rerum recusandae
              doloremque. Ratione doloremque, maxime animi magnam quis, vero
              placeat vel molestiae nostrum, praesentium reprehenderit facilis
              qui natus accusantium. Consequuntur repellendus iste omnis sed
              dolor numquam est molestiae iure voluptates odio excepturi cum
              dolore debitis porro voluptatum, eos ullam aspernatur magni
              accusantium, autem at quod odit. Porro corrupti aliquam recusandae
              consequuntur doloremque, pariatur tenetur perspiciatis distinctio,
              expedita asperiores, itaque consequatur in explicabo cum earum
              natus? Omnis vel nulla autem totam corporis nobis molestias.
              Molestias, repudiandae corporis?
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center px-10">
        <button className="btn btn-ghost px-8">
          <FaAngleLeft /> Prev Blog
        </button>
        <button className="btn btn-ghost px-8">
          Next Blog
          <FaAngleRight />{" "}
        </button>
      </div>
      <div className="mt-6 p-5">
        <div className="flex justify-between items-center">
          <p className="text-lg font-semibold">Comments</p>
          <button
            className="btn btn-outline"
            onClick={() => document.getElementById("comment_modal").showModal()}
          >
            <FaPlus /> Add Comment
          </button>
        </div>
        <div className="flex flex-col gap-3 mt-6">
          {[...Array(3).keys()].map((i) => (
            <div className="card flex-col-reverse gap-4 p-5 border border-dashed border-gray-500">
              <div className="flex items-center gap-2 ml-auto">
                <img
                  src="https://html.pixelfit.agency/pesco/assets/images/blog/blog-big-1.png"
                  alt=""
                  width={80}
                  className="rounded-lg"
                />
                <div className="flex flex-col gap-2">
                  <p className="text-sm font-semibold">John Doe</p>
                  <p className="text-xs font-semibold">28 june, 2021-2022</p>
                </div>
              </div>
              <p className="text-sm font-semibold flex-1">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt
                laborum labore sapiente aspernatur delectus similique neque
                minima error beatae esse illo, placeat veritatis dolore!
                Pariatur dolore sapiente rerum ipsa molestias neque possimus
                architecto, iure obcaecati sint in recusandae laudantium? Libero
                nulla quia quasi esse excepturi hic assumenda, modi consequuntur
                deserunt.
              </p>
            </div>
          ))}
          <button className="btn btn-neutral mx-auto px-8 mt-6">
            More Comments
          </button>
        </div>
      </div>
    </>
  );
};

export default BlogView;
