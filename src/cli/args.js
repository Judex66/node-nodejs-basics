const parseArgs = () => {
    const { argv } = process;
    for (let i = 2; i < argv.length; i += 2) {
      console.log(`${argv[i].slice(2)} is ${argv[i + 1]}`);
    }
  }
  parseArgs();