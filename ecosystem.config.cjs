module.exports = {
  apps: [
    {
      name: "ramanfarm-api",
      script: "server.js",
      instances: "max",
      exec_mode: "cluster",
      env: { NODE_ENV: "production", PORT: 3000 },
      watch: false,
      max_memory_restart: "300M"
    }
  ]
};
