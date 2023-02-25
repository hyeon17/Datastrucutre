function fibonacci(n) {
  // TODO: 여기에 코드를 작성합니다.

  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

fibonacci(6);
