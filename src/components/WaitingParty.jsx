
import { Button, TableCell, TableRow } from "@mui/material"

const WaitingParty = (props) => {
  return (
        <TableRow
          // key={row.name}
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
          <TableCell sx={{width : 200}} align="center">---</TableCell>
          <TableCell sx={{width : 200}} align="center">---</TableCell>
          <TableCell sx={{width : 200}} align="center">---</TableCell>
          <TableCell align="center">
            <Button
              sx={{ mx: 1, width: 150 }}
              // disabled={props.disabled}
              variant="outlined"
              color='secondary'
              // onClick={props.onClick}
              >
              取り消し
            </Button>

          </TableCell>
          <TableCell align="center">
            <Button
              sx={{ mx: 1, width: 100 }}
              // disabled={props.disabled}
              variant="outlined"
              color='secondary'
              // onClick={props.onClick}
              >
              案内
            </Button>
          </TableCell>

        </TableRow>




  )
}

export default WaitingParty