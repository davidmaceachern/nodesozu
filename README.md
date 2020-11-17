<div align="center">
   📦🐼 
</div>

<h1 align="center">
   Nodesozu 
</h1>

<p align="center">
    <a href="https://nodejs.org/en/">Node.js®</a> Client library for interacting with the <a href="https://github.com/sozu-proxy/sozu">Sōzu</a> HTTP reverse proxy server.
</p>

<div align="center">
  <a alt="GitHub Workflow Status" href="https://github.com/davidmaceachern/nodesozu/actions">
    <img  src="https://img.shields.io/github/workflow/status/davidmaceachern/nodesozu/CI">
  </a>
</div>
<br />

This library is still under development, and as such there are no guarantees that it will work under load, contributions are welcome.

## 💾 Install

### NPM

`npm install --save nodesozu`

## 🏓 Examples

```
import { Client } from xxxx

const socketPath = "/tmp/sozu.sock"

let client = new Client(socketPath)
client
```
Find more examples in [examples](https://github.com/davidmaceachern/nodesozu/blob/main/examples)


## 🏗️ Continuous Integration

### GitHub Actions

Two actions are added by default:

- `main` which installs deps w/ cache, lints, tests, and builds on all pushes against a Node and OS matrix
- `size` which comments cost comparison of your library on every pull request using [`size-limit`](https://github.com/ai/size-limit)

## Contributing

Guidelines on how to contribute can be found [here](https://github.com/davidmaceachern/nodesozu/blob/main/.github/CONTRIBUTING.md)

## Licence

Licensed under MIT license (LICENSE-MIT or http://opensource.org/licenses/MIT)

### Contribution

Unless you explicitly state otherwise, any contribution intentionally submitted for inclusion in the work by you, shall be licenced as per above, without any additional terms or conditions.