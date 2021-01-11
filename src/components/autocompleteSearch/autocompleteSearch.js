import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

const AutocompleteSearch = () => {
  return (
    <Autocomplete
      style={{ width: 300 }}
      // getOptionSelected={(option, value) =>
      //   option.LocalizedName === value.name
      // }
      // getOptionLabel={(option) => option.LocalizedName}
      // options={options}
      // onInput={(e) => load(e.target.value)}
      // onChange={(event, newValue) => {
      //   console.log("onChange:", event, "newValue", newValue.Key);
      //   loadOne(newValue.Key);
      // }}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Asynchronous"
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

export default AutocompleteSearch;
