# Deploying a React app on github pages with custom domain
This is my first time deploying a React app and there are a LOT of lessons learned. If you check out my commit history you would find that more than half of the commits I have was tweaking the index.js or package.json hoping things would work. And now it finally worked! It is probably a good idea to record what I should have done in a more sensible order for future reference. 

## Steps to deploy the app to GitHub pages
### Setting up Git for the project
First, it is always a good idea to use version control, so before we actually get into developing the app we should set up git for the project. For this project, I created my site based on a template provided by Now UI Kit React, so there are already files in the repo.
1. Make a new repo on GitHub, preferrably the same name as the local project folder, do not include README.md or .gitignore to avoid history conflicts. If you already included them, it is not the end of the world- see italicized text below for how to resolve it.
2. In local terminal, do `git init` to initialize git for the local repo.
3. Do `git remote add origin <git https link for the new repo>`, which will set up the project to track the repo that just got crated.
4. Do `git push -u origin master`, which just pushes the local files to the new repo and set up a shorthand for push so that we don't need to retype the repo link every single time. 

* *Note that if you did not create an empty repo, here you might get something along the lines of `fatal: refusing to merge unrelated histories`. It seems scary, but you can fix it with `git pull --allow-unrelated-histories`, then deal with the merge conflicts locally, then push just fine.*
5. That's it! Now we can do commit push pull just like we do for every git repo!

### Deploying the app to GitHub pages
Fast forward, let's say we have added enough stuff to our site and now it is time to see if it can be run remotely. Now it is time to deploy it to GitHub pages and see what would happen!
1. Do `npm install gh-pages`, which basically installs the GitHub pages package to your project, and it will help create a gh-pages branch on GitHub used for serving bundled React files, i.e. where our to-be-live page will grab files from. 
2. Find package.json in the project directory, then add "homepage": "https://<username>.github.io/<repo name>" to the json. This is important because otherwise we don't know what URL we can access our page from!
3. Locate "scripts" in package.json, and add 
  ```
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build",
  ```
  The predeploy command bundles the React app together and convert them to static files, while deploy command will build the page. 

4. Finally, run `npm run deploy`, then go to https://<username>.github.io/<repo name>. Our page should show up there!

### Applying a custom domain
Okay, so the default URL provided by GitHub is kinda ugly for a nice personal website, so we go ahead and buy a custom domain from sites like GoDaddy. Here are the steps to configure that custom domain so that our new site can use it!
1. First, let's configure our new domain. I got mine on GoDaddy so I am going to describe it in terms of their interface. Go to the DNS management page for our new domain, then add the following IP addresses to Records. Those are provided by GitHub so that our new domain can be used as a custom domain.

| Type | Name | Value | TTL |
|------|------|-------|-----|
| A | @ | 185.199.108.153 | 600 seconds |
| A | @ | 185.199.109.153 | 600 seconds |
| A | @ | 185.199.110.153 | 600 seconds |
| A | @ | 185.199.111.153 | 600 seconds |

Note that the TTL doesn't really matter- I just do 600 seconds to be consistent with the default A's. And that's it for DNS configuration! Don't add your URL to forwarding at the bottom of the page- it would create an infinite redirect loop :(

2. Then it is time to change a couple things on our project. In the public folder in our project folder, create a file name CNAME, then put our the custom domain name in there, no spaces, just one line. Note that if this file is in the wrong location, it won't actually get packaged when we deploy!
3. In package.json, locate "homepage", and change it to our custom domain name as well.
4. Commit, push, run deploy. Now if we go to settings on our repo, scroll down to custom domain, it should be populated with the given domain. 
5. Check the checkbox for Enforce HTTPS. It just makes our site appears to be safer with HTTPS secure connection.
6. Finally, we can type the new domain in our URL, and the site should show up there! Note that there is no need to include the repo name in the custom domain. 

## References
Starting a new Git repo:
https://kbroman.org/github_tutorial/pages/init.html

Unrelated history fix:
https://github.community/t5/How-to-use-Git-and-GitHub/How-to-deal-with-quot-refusing-to-merge-unrelated-histories-quot/td-p/12619

Deploy to GitHub pages instructions:
https://medium.com/the-andela-way/how-to-deploy-your-react-application-to-github-pages-in-less-than-5-minutes-8c5f665a2d2a
