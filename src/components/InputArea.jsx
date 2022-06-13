import Stack from '@mui/material/Stack';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
 
const InputArea = (props) => {
  return (
    <Stack direction={"row"} justifyContent="center" sx={{ my: 1 }}>
      <FormControl sx={{ m: 1 }} variant="outlined">
        <OutlinedInput
          autoComplete="off"
          name={"name"}
          value={props.value.name}
          onChange={props.onChange}
          endAdornment={<InputAdornment position="end">様</InputAdornment>}
          size="small"
        />
      </FormControl>
      <FormControl sx={{ m: 1}} variant="outlined">
        <OutlinedInput
          inputProps={{max: 5, min: 0}}
          type='number'
          autoComplete="off"
          name={"numberOfPeople"}
          value={props.value.numberOfPeople}
          onChange={props.onChange}
          endAdornment={<InputAdornment position="end">名様</InputAdornment>}
          size="small"
        />
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
        <Select
            name={"preferredSeat"}
            value={props.value.preferredSeat}
            displayEmpty
            onChange={props.onChange}
        >
          <MenuItem value="">
            <em>座席</em>
          </MenuItem>
          <MenuItem value="テーブル">テーブル</MenuItem>
          <MenuItem value="カウンター">カウンター</MenuItem>
          <MenuItem value="どちらでも可">どちらでも可</MenuItem>
        </Select>
      </FormControl>
      <Button
          sx={{ m: 1, width: '20ch' }}
          disabled={props.disabled}
          variant="contained"
          color='secondary'
          onClick={props.onClick}>
      順番待ちをする
      </Button>
    </Stack>
  )
}

export default InputArea