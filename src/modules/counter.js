const commentsCount = (preComments, newComment) => {
  const comment = document.querySelector('.comment');
  let totalComments = preComments;
  comment.addEventListener('click', () => {
    totalComments = preComments.push(newComment);
  });
  comment.click();
  return totalComments;
};

const likesCount = (likes) => {
  const likesSymbol = document.querySelector('.like-symbol');
  likesSymbol.addEventListener('click', () => {
    likes += 1;
  });
  likesSymbol.click();
  return likes;
};

const showsCount = (shows) => shows.length;

export { commentsCount, showsCount, likesCount };