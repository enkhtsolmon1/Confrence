import React, { useState, useEffect } from "react";
import axios from "../axios_Khu";
const ResearchContext = React.createContext();

const initialState = {
  success: false,
  researcher: [],
  pagination: {},
};

export const ResearchStore = (props) => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    AllResearchers();
    // AllResearch();
  }, []);
  const [resState, setResState] = useState(initialState);
  const [lang, setLang] = useState("Монгол");
  const [researchState, setResearchState] = useState({
    success: false,
    researchs: [],
  });
  const [journalState, setjournalTate] = useState({
    success: false,
    journals: [],
  });
  const [eventState, setEventState] = useState({
    success: false,
    researchEvents: [],
  });
  const [alert, setAlert] = useState({ value: false, type: "" });
  const [loading, setLoading] = useState(false);

  const deleteResearch = (id) => {
    setAlert({ value: false, type: "" });

    axios
      .delete(`research/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setAlert({ value: true, type: "Амжилттай" });
        if (role === "teacher") {
          getResearch(userId);
        } else {
          AllResearch();
        }
      })
      .catch((error) =>
        setAlert({ value: true, type: error.response.data.error })
      );
  };
  const addResearch = (newData) => {
    setAlert({ value: false, type: "" });
    axios
      .post(`research`, newData, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setAlert({ value: true, type: "Амжилттай" });
        getResearch(newData.teacher_id);
      })
      .catch((error) =>
        setAlert({ value: true, type: error.response.data.error })
      );
  };
  const getResearchDep = (depid) => {
    axios
      .get(`research?department_id=${depid}`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setResearchState({ ...res.data });
      })
      .catch((error) => console.log(error));
  };
  const getResearch = (teacherID) => {
    axios
      .get(`research?teacher_id=${teacherID}`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setResearchState({ ...res.data });
      })
      .catch((error) => console.log(error));
  };
  const AllResearch = () => {
    axios
      .get(`research`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setResearchState({ ...res.data });
      })
      .catch((error) => console.log(error));
  };
  const Alljournal = () => {
    axios
      .get(`journal`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setjournalTate({ ...res.data });
      })
      .catch((error) => console.log(error));
  };
  const AllEvent = () => {
    axios
      .get(`event`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setEventState({ ...res.data });
      })
      .catch((error) => console.log(error));
  };
  // ---------------------------------------------------------------------------------------------------
  const AllResearchers = () => {
    axios
      .get(`researcher`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setResState({ ...res.data });
      })
      .catch((error) => console.log(error));
  };
  const deleteRes = (id) => {
    axios
      .delete(`researcher/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        AllResearchers();
      })
      .catch((error) => console.log(error.response.data.error));
  };
  const addRes = (newData) => {
    setLoading(false);
    axios
      .post(`researcher`, newData, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setLoading(true);
        axios
          .post(`researcher/forgot-password`, { email: newData.email })
          .then((res) => {
            AllResearchers();
          })
          .catch((error) => alert("no"));
      })
      .catch((error) => console.log(error.response.data.error));
  };
  return (
    <ResearchContext.Provider
      value={{
        lang,
        setLang,
        getResearchDep,
        eventState,
        AllEvent,
        Alljournal,
        journalState,
        getResearch,
        addResearch,
        resState,
        addRes,
        loading,
        deleteRes,
        AllResearch,
        alert,
        setAlert,
        researchState,
        deleteResearch,
      }}
    >
      {props.children}
    </ResearchContext.Provider>
  );
};
export default ResearchContext;
