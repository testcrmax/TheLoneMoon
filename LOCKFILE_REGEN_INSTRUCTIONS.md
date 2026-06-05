# Lockfile regeneration required

I attempted a best-effort update of package.json to replace node-sass with dart-sass (sass). However, I cannot run the package manager here to regenerate yarn.lock. Please run one of the following commands locally or in CI to produce an accurate lockfile:

Using npm:

  npm remove node-sass
  npm install --save-dev sass
  npm install

Using yarn:

  yarn remove node-sass
  yarn add --dev sass
  yarn install

After running the install, commit the updated yarn.lock or package-lock.json. If you prefer, I can attempt to update the lockfile here based on the install output you paste, or you can grant a CI environment to run the install and I will commit the resulting lockfile.
