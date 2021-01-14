import { connect } from "react-redux";
import PropTypes from "prop-types";
import Autocomplete from "@material-ui/lab/Autocomplete";
import {
  loadSearchCity,
  setCurrentCity,
  loadAllWeather,
} from "../../redux/actions";
import { cityOptionsSelector } from "../../redux/selectors";
import { Box, TextField } from "@material-ui/core";

const AutocompleteSearch = ({
  cityOptions,
  loadSearchCity,
  setCurrentCity,
  loadAllWeather,
}) => {
  return (
    <Box className="box-padding">
      <Autocomplete
        style={{ maxWidth: 400, margin: "0 auto" }}
        getOptionSelected={(option, value) =>
          option.LocalizedName === value.LocalizedName
        }
        getOptionLabel={(option) => option.LocalizedName}
        options={cityOptions}
        onInput={(e) => loadSearchCity(e.target.value)}
        onChange={(event, newValue) => {
          if (newValue) {
            const city = {
              key: newValue.Key,
              name: newValue.LocalizedName,
              country: newValue.Country.LocalizedName,
            };
            setCurrentCity(city);
            loadAllWeather(newValue.Key);
          }
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            InputProps={{
              ...params.InputProps,
              endAdornment: <>{params.InputProps.endAdornment}</>,
            }}
          />
        )}
      />
    </Box>
  );
};

AutocompleteSearch.propTypes = {
  cityOptions: PropTypes.array.isRequired,
  loadSearchCity: PropTypes.func.isRequired,
  setCurrentCity: PropTypes.func.isRequired,
  loadAllWeather: PropTypes.func.isRequired,
};

export default connect(
  (state) => ({
    cityOptions: cityOptionsSelector(state),
  }),
  { loadSearchCity, setCurrentCity, loadAllWeather }
)(AutocompleteSearch);
