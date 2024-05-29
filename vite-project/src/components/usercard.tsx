interface UsercardProps {
  name: string;
  address: string;
  gender: "Female" | "Male"; //union type
}

export const Usercard = ({ name, address, gender }: UsercardProps) => {
  return (
    <div className={gender === "Male" ? "card-male" : "card-female"}>
      <div>Name: {name}</div>
      <div>Nationality: {address}</div>
      <div>Gender: {gender}</div>
    </div>
  );
};
