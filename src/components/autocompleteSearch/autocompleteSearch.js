import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { connect } from "react-redux";
import { loadSearchCity, loadAllWeather } from "../../redux/actions";
import { cityOptionsSelector } from "../../redux/selectors";

const AutocompleteSearch = ({
  cityOptions,
  loadSearchCity,
  loadAllWeather,
}) => {
  return (
    <Autocomplete
      style={{ width: 300 }}
      getOptionSelected={(option, value) => option.LocalizedName === value.name}
      getOptionLabel={(option) => option.LocalizedName}
      options={cityOptions}
      onInput={(e) => loadSearchCity(e.target.value)}
      onChange={(event, newValue) => {
        if (newValue) {
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
  { loadSearchCity, loadAllWeather }
)(AutocompleteSearch);
