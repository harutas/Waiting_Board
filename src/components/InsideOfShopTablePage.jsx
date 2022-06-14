import { TableContainer, Paper, Table, TableHead, TableBody, TableCell, TableRow, Button, Typography, Box } from "@mui/material"

const InsideOfShopTablePage = (props) => {
  const items = props.value;
  const listItems = items.map((item) =>

    <TableRow
      key={item.id}
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <TableCell sx={{width : 150}} align="center">{item.name}</TableCell>
      <TableCell sx={{width : 150}} align="center">{item.numberOfPeople}</TableCell>
      <TableCell sx={{width : 150}} align="center">{item.preferredSeat}</TableCell>
      <TableCell sx={{width : 150}} align="center">
        <Button
          id={item.id}
          sx={{ width: 150 }}
          // disabled={props.disabled}
          variant="outlined"
          color='secondary'
          onClick={props.goOutOnClick}
          >
          お会計（退店）
        </Button>
      </TableCell>
    </TableRow>

  );
  

  return (
    <Box sx={{my: 2}}>
      <Typography variant="h5" component={"div"}>店内状況</Typography>
        <TableContainer component={Paper} sx={{ width: 850, margin: "auto", boxShadow: 3, my: 2}}>
          <Table sx={{ minWidth: 300 }} aria-label="waiting-table">
            <TableHead>
              <TableRow>
                <TableCell sx={{width : 150}} align="center">お名前</TableCell>
                <TableCell sx={{width : 150}} align="center">人数</TableCell>
                <TableCell sx={{width : 150}} align="center">希望席</TableCell>
                <TableCell sx={{width : 150}} align="center"></TableCell>
                <TableCell sx={{width : 100}} align="center"></TableCell>
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

export default InsideOfShopTablePage