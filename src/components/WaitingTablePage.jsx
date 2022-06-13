import { TableContainer, Paper, Table, TableHead, TableBody, TableCell, TableRow, Button, Typography, Box } from "@mui/material"

const WaitingTablePage = (props) => {
  const items = props.value;
  const listItems = items.map((item) =>

    <TableRow
      key={item.id}
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <TableCell sx={{width : 200}} align="center">{item.name}</TableCell>
      <TableCell sx={{width : 200}} align="center">{item.numberOfPeople}</TableCell>
      <TableCell sx={{width : 200}} align="center">{item.preferredSeat}</TableCell>
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

  );
  

  return (
    <Box sx={{my: 2}}>
      <Typography variant="h5" component={"div"}>順番にお呼びします。少々お待ちください。</Typography>

        <TableContainer component={Paper} sx={{ width: 850, margin: "auto", boxShadow: 3, my: 2}}>
          <Table sx={{ minWidth: 300 }} aria-label="waiting-table">
            <TableHead>
              <TableRow>
                <TableCell sx={{width : 150}} align="center">名前</TableCell>
                <TableCell sx={{width : 150}} align="center">人数</TableCell>
                <TableCell sx={{width : 150}} align="center">座席</TableCell>
                <TableCell sx={{width : 150}} align="center"></TableCell>
                <TableCell sx={{width : 150}} align="center"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {listItems}
            </TableBody>
          </Table>
        </TableContainer>
    </Box>
  )
}

export default WaitingTablePage