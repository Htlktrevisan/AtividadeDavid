function separaParImpar(nums) {
    const pares = [];
    const impares  = [];
  
    for (let i = 0; i < nums.length; i++) {
  
      if (nums[i]  % 2 === 0) {
        pares[pares.length] = nums[i];
      } else {
        impares[impares.length] = nums[i];
      }
    }
  
  console.log(pares)
  console.log(impares)
  
  }
  
  let vetorGeral = [4, 9, 12, 7, 6, 11]
  
  separaParImpar(vetorGeral);
  