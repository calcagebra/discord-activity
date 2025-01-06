import express from 'express';
import fetch from 'node-fetch';

const app = express();
const port = 3001;

app.use(express.json());

app.post('/api/exec', async (req, res) => {
	console.log(req.body.code)
	const WORKERS_URL = 'https://worker-rust.megatank.workers.dev';
		const result = await (
			await fetch(WORKERS_URL, {
					method: 'POST',
					body: JSON.stringify({
						code: req.body.code,
						debug: false
					})
				})
		).text();

	res.send(result);
});

app.listen(port, () => {
	console.log(`Server listening at http://localhost:${port}`);
});
