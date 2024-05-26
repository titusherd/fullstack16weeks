interface UsercardProps {
  name: string;
  nationality: string;
  gender: "Female" | "Male"; //union type
}

export const Usercard = ({ name, nationality, gender }: UsercardProps) => {
  return (
    <div className={gender === "Male" ? "card-male" : "card-female"}>
      <div>Name: {name}</div>
      <div>Nationality: {nationality}</div>
      <div>Gender: {gender}</div>
    </div>
  );
};
