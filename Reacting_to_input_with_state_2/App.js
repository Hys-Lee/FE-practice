import { useState } from "react";
export default function EditProfile() {
  //status 종류: editing, viewing
  // const status = "viewing";
  const [isViewing, setIsViewing] = useState(false);
  const [firstName, setFirstName] = useState("Jane");
  const [lastName, setLastName] = useState("Jacobs");
  // editing에선 입력가능+output에 반영 / viewing에선 암것도 못함.(disable)
  // 각 state는 배반적. trigger는 button
  // 필수 state -Human: names{first, last} input, button(state바꾸기)

  // const inputValueTest = isViewing === "editing" ? "가능" : "가능";
  // const isdisable = isViewing === "viewing" ? true : false;
  return (
    <form>
      <label>
        First name: <b>Jane</b>
        <input
          value={firstName}
          disabled={isViewing}
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
      </label>
      <label>
        Last name: <b>Jacobs</b>
        <input
          value={lastName}
          disabled={isViewing}
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
      </label>
      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          setIsViewing(!isViewing);
        }}
      >
        {isViewing ? "Edit" : "Save"} Profile
      </button>
      <p>
        <i>
          Hello, {firstName} {lastName}!
        </i>
      </p>
    </form>
  );
}
