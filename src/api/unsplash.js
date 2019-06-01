import axios from 'axios';

const res =  axios.create({

    baseURL: "https://api.unsplash.com/search/photos",
    headers: {
        Authorization:
          "Client-ID 016e2ada97063e5f4e05bda2738a65d71b3b6f873d2a9c68b6851eb6fe84a31d"
      }
  });

  export default res;