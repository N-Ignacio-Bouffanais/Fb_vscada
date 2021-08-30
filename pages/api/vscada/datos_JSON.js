import axios from 'axios';

export default async function handler(req,res) {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    res.status(200).json( response.data);
}