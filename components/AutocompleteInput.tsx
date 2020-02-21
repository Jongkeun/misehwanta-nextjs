import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

type Props = {
  onChanged: (event: any) => void;
  datas: Array<{ data: string }>;
};

const Container = styled.div`
  width: 80%;
  box-sizing: border-box;
  float: left;
`;
const AutocompleteInput = ({ onChanged, datas }: Props) => {
  const proxy = (params: any) => {
    onChanged(params.inputProps.value);
    // TODO: make worked after 2 seconds of typing
    if (params.inputProps.value.length > 1) {
      return { ...params.InputProps, type: "search" };
    } else {
      return {};
    }
  };
  return (
    <Container>
      <Autocomplete
        size={"small"}
        options={datas.map(option => option.data)}
        loading={true}
        loadingText={"Loading..."}
        renderInput={params => (
          <TextField
            {...params}
            label="동, 면, 읍 을 입력하세요."
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
