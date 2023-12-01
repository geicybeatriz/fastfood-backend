import app from './app';
import './config/setup';

// eslint-disable-next-line no-bitwise
const port = +process.env.PORT | 5000;

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log('success');
});
