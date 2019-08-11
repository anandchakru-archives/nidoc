workflow "Build and Deploy" {
  resolves = [
    "ghdeploy"
  ]
  on = "push"
}

action "npm" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  runs = "npm install"
}

action "ghdeploy" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  needs = ["npm"]
  runs = "npm run deploy"
}