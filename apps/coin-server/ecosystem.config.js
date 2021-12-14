module.exports = {
   apps : [{
     name   : "matbea-shofar",
     cwd: '/opt/nodejs/apps/matbea/shofar/coin-server',
     script: 'main.js',
     instances: 0,
     instance_var: 'INSTANCE_ID',
     exec_mode: 'cluster',
     env: {
        NODE_ENV: "systest"
     }
   }]
 }
 