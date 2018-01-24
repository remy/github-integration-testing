// filename: index.js
function handlePullRequest(repo, ref, data) {
  // this is where we'll post the git commit status message
  console.log('got webhook on %s', repo);
}

function listen(port = 8000, secret = 'a secret code') {
  const githubhook = require('githubhook');
  const hook = githubhook({
    port,
    // secret,
    path: '/',
  });

  hook.on('pull_request', handlePullRequest);
  hook.listen();
}

listen(process.env.PORT, process.env.SECRET);
