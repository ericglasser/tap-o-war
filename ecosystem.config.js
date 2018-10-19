module.exports = {
    apps : [
      {
        name: "Tap O War",
        script: "bin/www",
        instances: 2,
        exec_mode: "cluster",
        watch: "true"
      },
    ]
  }