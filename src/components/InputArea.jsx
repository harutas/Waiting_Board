import Stack from '@mui/material/Stack';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
 
const InputArea = (props) => {
  return (
    <Stack direction={"row"} justifyContent="center">
      <FormControl sx={{ m: 1}} variant="outlined">
        <OutlinedInput
          inputProps={{}}
          autoComplete="off"
        //   name={props.name}
        //   value={props.value}
        //   onChange={props.onChange}
          startAdornment={<InputAdornment position="start">お名前</InputAdornment>}
          size="small"
        />
      </FormControl>
      <FormControl sx={{ m: 1}} variant="outlined">
        <OutlinedInput
          inputProps={{max: 5, min: 0}}
          type='number'
          autoComplete="off"
        //   name={props.name}
        //   value={props.value}
        //   onChange={props.onChange}
          startAdornment={<InputAdornment position="start">人数</InputAdornment>}
          size="small"
        />
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
        <Select
            // value={10}
            // onChange={handleChange}
        >
            <MenuItem >テーブル</MenuItem>
            <MenuItem >カウンター</MenuItem>
            <MenuItem >どちらでも可</MenuItem>
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