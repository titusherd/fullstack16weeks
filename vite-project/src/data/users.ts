interface IUser {
  id: number;
  name: string;
  address: string;
  gender: "Female" | "Male";
}

export const users: IUser[] = [
  {
    id: 1,
    name: "Titus",
    address: "Jl. Setiabudi No. 1",
    gender: "Male",
  },
  {
    id: 2,
    name: "Ayya",
    address: "Jl. Setiabudi No. 2",
    gender: "Female",
  },
  {
    id: 3,
    name: "Rizky",
    address: "Jl. Setiabudi No.3",
    gender: "Male",
  },
  {
    id: 4,
    name: "Rizal",
    address: "Jl. Setiabudi No.4",
    gender: "Female",
  },
];
