class Rectangle {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }
  
    calculateArea() {
      return this.width * this.height;
    }
  }
  
  // Пример использования
  const rectangle = new Rectangle(5, 10);
  console.log(rectangle.calculateArea());  // Выведет 50
  