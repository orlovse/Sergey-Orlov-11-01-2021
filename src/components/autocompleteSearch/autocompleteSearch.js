import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { connect } from "react-redux";
import {
  loadSearchCity,
  setCurrentCity,
  loadAllWeather,
} from "../../redux/actions";
import { cityOptionsSelector } from "../../redux/selectors";

const AutocompleteSearch = ({
  cityOptions,
  loadSearchCity,
  setCurrentCity,
  loadAllWeather,
}) => {
  return (
    <Autocomplete
      style={{ width: 300 }}
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
  );
};

export default connect(
  (state) => ({
    cityOptions: cityOptionsSelector(state),
  }),
  { loadSearchCity, setCurrentCity, loadAllWeather }
)(AutocompleteSearch);
