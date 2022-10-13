eslint config
  npx husky-init && yarn
  npx husky add .husky/pre-commit "npm test"
  * .husky
    #!/usr/bin/env sh
    . "$(dirname -- "$0")/_/husky.sh"

    yarn format
    echo

when you create a file
  you run in 
  * yarn format