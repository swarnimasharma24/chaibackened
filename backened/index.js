require('dotenv').config()
const express=require('express');
// const port=4000;
const githubData={
    "login": "swarnimasharma24",
    "id": 127931584,
    "node_id": "U_kgDOB6AUwA",
    "avatar_url": "https://avatars.githubusercontent.com/u/127931584?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/swarnimasharma24",
    "html_url": "https://github.com/swarnimasharma24",
    "followers_url": "https://api.github.com/users/swarnimasharma24/followers",
    "following_url": "https://api.github.com/users/swarnimasharma24/following{/other_user}",
    "gists_url": "https://api.github.com/users/swarnimasharma24/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/swarnimasharma24/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/swarnimasharma24/subscriptions",
    "organizations_url": "https://api.github.com/users/swarnimasharma24/orgs",
    "repos_url": "https://api.github.com/users/swarnimasharma24/repos",
    "events_url": "https://api.github.com/users/swarnimasharma24/events{/privacy}",
    "received_events_url": "https://api.github.com/users/swarnimasharma24/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 13,
    "public_gists": 0,
    "followers": 1,
    "following": 0,
    "created_at": "2023-03-15T07:44:09Z",
    "updated_at": "2024-09-29T10:14:39Z"
  }
const app=express();
app.get('/',(req,res)=>{
    res.send('hello world');
});
app.get('/twitter',(req,res)=>{
res.send('swarnima.com');
});
app.get('/login',(req,res)=>{
    res.send('<h1>please login</h1>');
});
app.get('/github',(req,res)=>{
res.json(githubData);
});
app.listen(process.env.PORT,()=>{
console.log(`app is listening on port ${process.env.PORT}`);
});
