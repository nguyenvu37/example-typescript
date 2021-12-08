export {};
// Interface declaration merging (khai báo 2 interface cùng tên trong cùng 1 file vẫn được)

interface IContact {
  name: string;
  phone: string;
  email?: string;
}

interface IContact {
  isDeleted: boolean;
}

class MyContact implements IContact {
  name: string;
  phone: string;
  isDeleted: boolean;

  constructor(name: string, phone: string) {
    this.name = name;
    this.phone = phone;
  }
}

const a = new MyContact('A', '0123123');
console.log(`a.name`, a.name);

class ContactApp {
  render() {
    const contact: IContact[] = [
      { name: 'A', phone: '0123123', isDeleted: false },
      { name: 'B', phone: '098098', isDeleted: false },
    ];
    console.table(contact);
  }
}

const app = new ContactApp();
app.render();
