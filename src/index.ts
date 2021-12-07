export {};
// implement interface

interface IContact {
  name: string;
  phone: string;
  email?: string;
}

class MyContact implements IContact {
  name: string;
  phone: string;

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
      { name: 'A', phone: '0123123' },
      { name: 'B', phone: '098098' },
    ];
    console.table(contact);
  }
}

const app = new ContactApp();
app.render();
