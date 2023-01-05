const commentsCounter = () => {
  const numb = document.getElementById('comments-section').children.length;
  return numb;
};

export const itemCount = (showList) => showList.length;
export default commentsCounter;
