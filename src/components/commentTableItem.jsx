import { assets } from "../assets/assets.js";

const CommentTableItem = ({ comment }) => {
  const { blog, createdAt, Name, content, isApproved } = comment;
  const blogDate = new Date(createdAt);

  return (
    <tr>
      <td>
        <b>Blog:</b> {blog.title}
        <br />
        <b>Name:</b> {Name}
        <br />
        <b>Comment:</b> {content}
      </td>

      <td className="text-center">{blogDate.toLocaleDateString()}</td>

      <td className="text-center">
        <div className="flex justify-center items-center gap-2">
          {!isApproved ? (
            <img className="h-8 cursor-pointer" src={assets.tick_icon} alt="Approve" />
          ) : (
            <p>Approved</p>
          )}
          <img className="h-8 cursor-pointer" src={assets.bin_icon} alt="Delete" />
        </div>
      </td>
    </tr>
  );
};

export default CommentTableItem;
