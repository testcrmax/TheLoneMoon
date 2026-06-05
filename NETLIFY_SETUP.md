Netlify setup and troubleshooting

This file documents the Netlify-specific build settings required for this project and common fixes if a deploy fails.

Required Netlify settings

1. Build command
   - Set the build command to:
     yarn build:admin && yarn build
   - This first builds the admin bundle (so /admin is emitted into site/static/admin), then builds the main site.

2. Publish directory
   - Publish directory should be: dist
   - This matches the Hugo / webpack output configured for this project.

3. Hugo version
   - An explicit HUGO_VERSION is recommended. The repo expects:
     HUGO_VERSION = 0.140.0
   - This is already set in netlify.toml and will be used by Netlify. You can also set it in Site → Settings → Build & deploy → Environment → Edit variables.

4. Git submodules (if you use a theme as a submodule)
   - If your Hugo theme is included as a git submodule (common with some themes), Netlify must be configured to fetch submodules. In the Netlify UI:
     Site → Settings → Build & deploy → Continuous Deployment → Build settings → Git submodules → Enable
   - If you prefer not to use submodules, vendor (copy) the theme into themes/ and commit it so Netlify does not need to fetch submodules.

Common deploy failure diagnostics

- If the deploy fails after webpack completes (webpack assets printed) and yarn build exits with non-zero code, the Hugo step likely failed.
  1) Reproduce locally to get the Hugo error message:
     git clone https://github.com/testcrmax/TheLoneMoon
     cd TheLoneMoon
     git submodule update --init --recursive
     nvm install 20
     nvm use 20
     yarn install
     yarn build:hugo
  2) Copy the exact Hugo error output and paste it into an issue or message — it usually indicates either "theme not found" or a template error.

- If you see "theme not found", either enable Git submodules in Netlify (see above) or vendor the theme into the repository.

After changing settings

- Trigger a new deploy (Sites → Deploys → Trigger deploy → Deploy site) after toggling Git submodules or editing the build command.

If you want, I can:
- Open a PR to merge these changes into master (this branch already updates netlify.toml), or
- Attempt to vendor the theme into the repo (I will need access to the theme source or permission to fetch it), or
- Walk you through enabling Git submodules + updating the Netlify build command in the Netlify UI.

Which would you like next?
