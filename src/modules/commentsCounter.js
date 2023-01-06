const commentsCounter = () => {
  const numb = document.getElementById('comments-section').children.length;
  return numb;
};

export const commentCount = (commentList) => commentList.length;
export default commentsCounter;
