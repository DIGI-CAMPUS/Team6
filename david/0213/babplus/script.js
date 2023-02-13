const URL =
  'https://blog.naver.com/PostList.naver?blogId=babplus123&from=postList&categoryNo=19';

const getHTML = async (url) => {
  try {
    return await axios.get(url);
    console.log(url);
  } catch (error) {
    return new Error(`${error.name}: ${error.message} \n${error.stack}`);
  }
};

getHTML(URL);
