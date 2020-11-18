<div align="center">
   📦🐼 
</div>

<h1 align="center">
   Nodesozu !!!!! PRE-ALPHA 
</h1>

<p align="center">
    <a href="https://nodejs.org/en/">Node.js</a> Client library for interacting with the <a href="https://github.com/sozu-proxy/sozu">Sōzu</a> HTTP reverse proxy server.
</p>

<div align="center">
  <a alt="GitHub Workflow Status" href="https://github.com/davidmaceachern/nodesozu/actions">
    <img  src="https://img.shields.io/github/workflow/status/davidmaceachern/nodesozu/CI">
  </a>
</div>
<br />

!! This library is still under development, and as such there are no guarantees that it will work under load if at all,

Contributions are welcome, see [here](https://github.com/davidmaceachern/nodesozu#contributing)

## Goal

To provide a resilient api for developers to interact with the Sozu command server using Typescript. Take a look at the Elixir version [here](https://github.com/evuez/exsozu).

## 💾 Install

### 📦 NPM

`npm install --save nodesozu`

## 🏓 Examples

A minimal example that demonstrates how to send a proxy status command to the Sozu server.

```javascript
import { Client } from nodesozu

const socketPath = "/tmp/sozu.sock"

const command = {
      "id": "ID_TEST",
      "type": "PROXY",
      "version": 0,
      "data": {
        "type": "STATUS",
      },
      "worker_id": 0
    }
    
let client = new Client(socketPath)
client.request(command)
```

Find more examples [here](https://github.com/davidmaceachern/nodesozu/blob/main/examples)

## 🏗️ Continuous Integration

### GitHub Actions

Two actions are added by default:

- `main` which installs deps w/ cache, lints, tests, and builds on all pushes against a Node and OS matrix
- `size` which comments cost comparison of your library on every pull request using [`size-limit`](https://github.com/ai/size-limit)
- `publish` which publishes new package versions to npm when a Github Release is created

## Contributing

Guidelines on how to contribute can be found [here](https://github.com/davidmaceachern/nodesozu/blob/main/.github/CONTRIBUTING.md)

There are some living documents 
[here](https://github.com/davidmaceachern/nodesozu/blob/main/doc) which covers some topics on development.

## Licence

Licensed under MIT license (LICENSE-MIT or http://opensource.org/licenses/MIT)

### Contribution

Unless you explicitly state otherwise, any contribution intentionally submitted for inclusion in the work by you, shall be licenced as per above, without any additional terms or conditions.
