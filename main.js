process.stdin.on('data', data => {
    main(data.toString().trim());
})