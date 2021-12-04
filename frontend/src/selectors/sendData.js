import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function SendInfo(endPoint, redirection, data) {
  const history = useHistory();
  axios.post(endPoint, data).then(
    (response) => {
      window.confirm(response.data); // need to add some confirmation in here
      history.push(redirection);
      location.reload();
    },
    (error) => {
      console.log(error);
    }
  );
}
