const PostItem = ({ post }) => {
  console.log(post);
  const { name, description } = post;
  return (
    <div className="post">
      <div className="post__content">
        <strong>{name}</strong>
        <h2>{description}</h2>
      </div>
      <div className="post__btns">
        <button>Delete</button>
      </div>
    </div>
  );
};

export default PostItem;
