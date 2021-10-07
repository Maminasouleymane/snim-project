import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "79%",
    marginTop: theme.spacing(3),
    overflowX: "auto",
    margin: "auto",
  },
  button: {
    margin: theme.spacing(1),
    marginLeft: "68%",
    marginTop: "30px",
  },
}));

export default useStyles;
