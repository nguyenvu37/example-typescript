export {};
// enum (dạng liệt kê các giá trị có thể của 1 dữ liệu. Có dạng array like object)
// Thường định nghĩa các lỗi từ server gửi về hoặc có trường nào đó có nhiều khả năng xảy ra

enum PetType {
  Dog,
  Cat,
  Bird,
  Fish,
  Reptile,
}

interface Pet {
  name: string;
  type: PetType;
}

const newPet: Pet = {
  name: 'A',
  type: PetType.Dog,
};
