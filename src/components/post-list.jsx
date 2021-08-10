import PostItem from './post-item';

const PostList = ({ posts, title }) => {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>{title}</h1>
      {posts.map((post, index) => (
        <PostItem post={post} key={index} />
      ))}
    </div>
  );
};

export default PostList;
