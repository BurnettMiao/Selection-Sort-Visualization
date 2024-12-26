document.addEventListener('DOMContentLoaded', () => {
  const arrayContainer = document.getElementById('array-container');
  const sortBtn = document.getElementById('sort-btn');

  // Generate Random Array
  const array = Array.from({ length: 20 }, () => {
    return Math.floor(Math.random() * 100) + 1;
  });
  console.log(array);

  // Create Bars for visualization
  function createBars(array) {
    // Clear previous bars
    arrayContainer.innerHTML = '';
    array.forEach((value) => {
      const bar = document.createElement('div');
      bar.className = 'bar';
      bar.style.height = `${value * 3}px`;
      arrayContainer.append(bar);
    });
  }

  // Selection Sort Visualization
  async function selectionSort(array) {
    const bars = document.querySelectorAll('.bar');

    for (let i = 0; i < array.length; i++) {
      let minIndex = i;
      bars[minIndex].classList.add('min');

      for (let j = i + 1; j < array.length; j++) {
        bars[j].classList.add('active');

        // Delay for visualization
        await new Promise((resolve, reject) => {
          setTimeout(resolve, 300);
        });

        if (array[j] < array[minIndex]) {
          bars[minIndex].classList.remove('min');
          minIndex = j;
          bars[minIndex].classList.add('min');
        }
        bars[j].classList.remove('active');
      }

      // Swap if needed
      if (minIndex !== i) {
        [array[i], array[minIndex]] = [array[minIndex], array[i]];

        // Update bar heights
        bars[i].style.height = `${array[i] * 3}px`;
        bars[minIndex].style.height = `${array[minIndex] * 3}px`;
      }

      bars[minIndex].classList.remove('min');
    }
  }

  // Initialize
  createBars(array);

  // Start Sorting on Button Click
  sortBtn.addEventListener('click', () => {
    // console.log('click');
    selectionSort(array);
  });
});
