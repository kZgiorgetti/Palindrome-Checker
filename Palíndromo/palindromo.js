const EhPalindromo = () => {
  let palavra = "arara";

  // Transforma tudo em minúsculo
  palavra = palavra.toLowerCase().replace(/\s/g, '');

  // Inverte a palavra
  const invertida = palavra.split('').reverse().join('');

  if (palavra === invertida) {
    console.log('É um palíndromo!');
  } else {
    console.log('Não é um palíndromo!');
  }
};

EhPalindromo();
