exports.closeWithError = (massage) => {
  process.stderr.write(massage);
  process.exit(1);
};
