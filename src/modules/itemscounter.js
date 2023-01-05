const showsCounter = () => {
  const numb = document.querySelector('.showslist').children.length;
  return numb;
};

export const itemCount = (showList) => showList.length;
export default showsCounter;
