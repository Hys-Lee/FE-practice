export const initialState = {
  selectedId: 0,
  // message: ["Hello", "", ""]
  messages: {
    //sol-> object로 하면 id가 연속 아니더라도 handle가능.
    0: "Hello",
    1: "",
    2: ""
  }
};

export function messengerReducer(state, action) {
  switch (action.type) {
    case "changed_selection": {
      return {
        ...state,
        selectedId: action.contactId
        // message: newMessages
      };
    }
    case "edited_message": {
      // newMessages[state.selectedId] = action.message;
      return {
        ...state,

        messages: {
          ...state.messages,
          [state.selectedId]: action.message
        }
        // message: action.message
      };
    }
    case "sent_message": {
      // newMessages[state.selectedId] = "";
      return {
        ...state,
        message: {
          ...state.messages,
          [state.selectedId]: ""
        }
      };
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
