console.log('LOADING MIDDLEWARE :::::::::');

module.exports = {
  "initial:before": {
    "loopback#favicon": {}
  },
  "initial": {
    "compression": {},
    "cors": {
      "params": {
        "origin": true,
        "credentials": true,
        "maxAge": 86400
      }
    },
    "morgan": {
      "params": [
        "dev",
        {}
      ]
    }
  },
  "session": {},
  "auth": {},
  "parse": {},
  "routes": {
    "loopback#rest": {
      "paths": [
        "${restApiRoot}"
      ]
    }
  },
  "files": {
    "loopback#static": {
      "params": "$!../build"
    }
  },
  "final": {
    "./middleware/custom-error": {}
  },
  "final:after": {
    "strong-error-handler": {}
  }
}