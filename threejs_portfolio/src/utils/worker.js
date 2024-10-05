// public/worker.js
self.addEventListener('message', (event) => {
    if (event.data.type === 'CALCULATE_PATHS') {
      // Simulamos un cálculo intensivo
      const result = calculatePaths(event.data.count);
      self.postMessage({ type: 'PATHS_CALCULATED', result });
    }
  });
  
  function calculatePaths(count) {
    // Aquí iría tu lógica de cálculo intensivo
    // Por ejemplo, generamos paths aleatorios
    const paths = [];
    for (let i = 0; i < count; i++) {
      paths.push(`M${Math.random() * 1000} ${Math.random() * 1000}C${Math.random() * 1000} ${Math.random() * 1000} ${Math.random() * 1000} ${Math.random() * 1000} ${Math.random() * 1000} ${Math.random() * 1000}`);
    }
    return paths;
  }
  