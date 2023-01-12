import axios from "axios";

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer nZj-8hyF-15M3SJZoWFpkbH1tXNX-3W_YIDEMWGI9-6Lq9Rk-TtpYtZEjsV8ZycW7mkuUJnb0XDCNYvS0C_d5Ukvbz6XhY5FdK1DcQ4O3ZNFuN-ljbZ7zYFdPr1JYnYx'
    }
})

