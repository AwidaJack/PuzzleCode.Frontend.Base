class User {
  constructor(username, password, role) {
    this.username = username;
    this.password = password;
    this.role = role;
  }

  changePassword(newPassword) {
    if (this.role === "admin") {
      this.password = newPassword;
      console.log("Пароль успешно изменен");
    } else {
      console.log("У вас нет прав на изменение пароля");
    }
  }

  getInfo() {
    console.log(`Username: ${this.username}, Role: ${this.role}`);
  }
}

// Пример использования
const user1 = new User("user1", "12345", "user");
const user2 = new User("admin1", "admin123", "admin");

user1.getInfo(); // Выводит: Username: user1, Role: user

user1.changePassword("newpassword1"); // Выводит: У вас нет прав на изменение пароля
console.log(user1.password); // Выводит: 12345 (пароль не изменился)

user2.getInfo(); // Выводит: Username: admin1, Role: admin

user2.changePassword("newpassword2"); // Выводит: Пароль успешно изменен
console.log(user2.password); // Выводит: newpassword2 (пароль изменился)
