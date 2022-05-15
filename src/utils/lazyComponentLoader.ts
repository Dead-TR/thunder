const LazyComponentLoader = (
  lazyComponent: Promise<any>,
  attemptsLeft: number = 3
): Promise<any> => {
  return new Promise((resolve, reject) => {
    lazyComponent.then(resolve).catch((error) => {
      setTimeout(() => {
        if (attemptsLeft === 1) {
          reject(error);
          window.location.reload();
          return;
        }
        LazyComponentLoader(lazyComponent, attemptsLeft - 1).then(
          resolve,
          reject
        );
      }, 1500);
    });
  });
};

export default LazyComponentLoader;
