module.exports = {
    apps: [
      {
        name: 'receive',
        script: 'npm',
        args: 'start',
        env: {
          NODE_ENV: 'production',
        },
        exp_backoff_restart_delay: 100,
      },
    ],
  };
  