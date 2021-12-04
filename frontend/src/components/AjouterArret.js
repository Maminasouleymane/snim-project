import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Icon from "@material-ui/core/Icon";
import SaveIcon from "@material-ui/icons/Save";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  textField: {
    marginTop: 20,
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    // Mwidth: 200,
    maxWidth: 90,
  },
  button: {
    margin: theme.spacing(1),
    backgroundColor: "#0D6EFD",
  },
}));

const AjouterArret = () => {
  const classes = useStyles();
  const history = useHistory();
  const [groupe, setGroupe] = useState("");
  const [defaut, setDefaut] = useState("");
  const [typeDefaut, setTypeDefaut] = useState("");
  const [codeDefaut, setCodeDefaut] = useState("");
  const [section, setSection] = useState("");
  const [dateDebut, setdateDebut] = useState("07:30");
  const [dateFin, setdateFin] = useState("07:30");
  const [dureeHM, setDureeHM] = useState("");
  const [duree, setDuree] = useState("");

  const handleChange = (event) => {
    setGroupe(event.target.value);
  };

  const handleDefautChange = (event) => {
    setDefaut(event.target.value);
  };

  const handleDateDebutChange = (event) => {
    setdateDebut(event.target.value);
  };

  const handleDateFinChange = (event) => {
    setdateFin(event.target.value);
  };

  const handleTypeDefautChange = (event) => {
    setTypeDefaut(event.target.value);
  };

  const handleCodeDefautChange = (event) => {
    setCodeDefaut(event.target.value);
  };

  const handleSectionChange = (event) => {
    setSection(event.target.value);
  };

  const handleDureeHMChange = (event) => {
    setDureeHM(event.target.value);
  };

  const handleDureeChange = (event) => {
    setDuree(event.target.value);
  };

  const data = {
    groupe,
    defaut,
    codeDefaut,
    typeDefaut,
    section,
    dateDebut,
    dateFin,
    dureeHM,
    duree,
  };

  const SendData = () => {
    axios.post("http://localhost:3009/addArret", data).then(
      (response) => {
        console.log(response);
        window.confirm(response.data); // need to add some confirmation in here
        history.push("/historique_arret");
        location.reload();
      },
      (error) => {
        console.log(error);
      }
    );
  };

  return (
    <div className="arretBox">
      <h1 style={{ fontFamily: "Helvetica" }}>Signaler un arrêt</h1>
      <form className="formBox" noValidate>
        <InputLabel id="demo-simple-select-label">Groupe</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={groupe}
          onChange={handleChange}
        >
          <MenuItem value={"GR3"}>groupe3</MenuItem>
          <MenuItem value={"GR7"}>groupe7</MenuItem>
          <MenuItem value={"GR8"}>groupe8</MenuItem>
          <MenuItem value={"GR10"}>groupe10</MenuItem>
          <MenuItem value={"GRP.Secours"}>groupe secours</MenuItem>
          <MenuItem value={"Aux.Com"}>Aux.Com</MenuItem>
        </Select>

        <div className="defaut">
          <TextField
            id="outlined-multiline-static"
            label=" Défaut"
            style={{ width: "100%" }}
            multiline
            value={defaut}
            onChange={handleDefautChange}
            rows={4}
            variant="outlined"
          />
        </div>
        <div className="defautDetails">
          <TextField
            id="outlined-basic"
            style={{ width: 120 }}
            label="code Défaut"
            onChange={handleCodeDefautChange}
            variant="outlined"
          />

          <TextField
            id="outlined-basic"
            style={{ width: 120 }}
            label="Type  Défaut"
            onChange={handleTypeDefautChange}
            variant="outlined"
          />

          <TextField
            id="outlined-basic"
            style={{ width: 120 }}
            label="Section"
            onChange={handleSectionChange}
            variant="outlined"
          />
        </div>

        <div className="timeDetails">
          <TextField
            id="time"
            label="Heure debut"
            type="time"
            style={{ width: 180 }}
            className="time"
            value={dateDebut}
            onChange={handleDateDebutChange}
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 300, // 5 min
            }}
          />
          <TextField
            id="time"
            label="Heure fin"
            type="time"
            style={{ width: 180 }}
            value={dateFin}
            onChange={handleDateFinChange}
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 300, // 5 min
            }}
          />
        </div>

        <div className="duree">
          <TextField
            id="outlined-basic"
            style={{ width: 150 }}
            label="Durée(hh:mm)"
            onChange={handleDureeHMChange}
            variant="outlined"
          />

          <TextField
            id="outlined-basic"
            style={{ width: 150 }}
            label="Durée"
            onChange={handleDureeChange}
            variant="outlined"
          />
        </div>
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={SendData}
          className={classes.button}
          startIcon={<SaveIcon />}
        >
          Enregistrer
        </Button>
      </form>
    </div>
  );
};

export default AjouterArret;
