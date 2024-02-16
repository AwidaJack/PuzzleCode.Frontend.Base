class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  changePassword() {
    const currentPassword = prompt("Введите текущий пароль:");
    
    if (currentPassword !== this.password) {
      alert("Неверный пароль");
      return;
    }
    
    const newPassword = prompt("Введите новый пароль:");
    const confirmPassword = prompt("Повторите новый пароль:");
    
    if (newPassword === this.password) {
      alert("Новый пароль не должен совпадать со старым");
      return;
    }
    
    if (newPassword !== confirmPassword) {
      alert("Пароли не совпадают");
      return;
    }
    
    this.password = newPassword;
    alert("Пароль успешно изменен");
  }
}

// Пример использования
const user = new User("JohnDoe", "password123");
user.changePassword();
