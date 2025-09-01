import express from 'express';

import router from './routes';

const app = express();
const port = process.env.PORT || 8081;

// Serve the static files from the frontend's build directory
const frontendBuildPath = 'client/dist';

app.use(express.static(frontendBuildPath));

// Your API routes should be prefixed to avoid conflicts with frontend routes
app.use('/api', router);

// A catch-all route to serve the main index.html for client-side routing
app.get(/(.*)/, (req, res) => {
  res.sendFile('index.html',
    { root: frontendBuildPath }
  );
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});