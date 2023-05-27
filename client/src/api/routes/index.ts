import axios from 'axios';
import * as exporess from 'express';

const router = exporess.Router();

router.get('/list', async (req, res, next) => {
  const list = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return res.status(200).json({
    state: true,
    list,
  });
});

export default router;
