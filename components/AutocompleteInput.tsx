import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

type Props = {
  onChanged: (event: any) => void;
  datas: Array<{ data: string }>;
  placeholder?: string;
};

const Container = styled.div`
  width: 80%;
  box-sizing: border-box;
  float: left;
`;
const AutocompleteInput = ({ onChanged, datas, placeholder }: Props) => {
  const proxy = (params: any) => {
    onChanged(params.inputProps.value);
    return { ...params.InputProps };
  };

  return (
    <Container>
      <Autocomplete
        size={"small"}
        options={datas.map(option => option.data)}
        closeIcon={null}
        renderInput={params => (
          <TextField
            {...params}
            type={"search"}
            label={placeholder}
            variant="outlined"
            fullWidth
            InputProps={proxy(params)}
          />
        )}
      />
    </Container>
  );
};

export default AutocompleteInput;
