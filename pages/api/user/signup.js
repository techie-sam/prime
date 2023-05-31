import axios from "axios";
export default function handler(req, res) {
  if (req.method === 'POST') {
    const body = req.body
    
    axios.post('http://localhost:5000/api/user/signup', body)
      .then(response => {
        res.status(200).json({ message: 'Signup successful' });
      })
      .catch(err => {
        console.log(err)
        res.status(500).json({ error: 'An error occurred' });
      });
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
