import { exec } from 'child_process';

const push = () => {
  console.log('Automated push starting...');
  exec('git add . && git commit -m "Auto-save: $(date)" && git push', (err, stdout) => {
    if (err) console.error('Push failed:', err);
    else console.log('Changes pushed:', stdout);
  });
};

// Sauvegarde automatique toutes les 5 minutes (300000 ms)
setInterval(push, 300000); 
