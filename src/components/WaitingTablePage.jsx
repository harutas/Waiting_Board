import { TableContainer, Paper, Table, TableHead, TableBody, TableCell, TableRow } from "@mui/material"
import WaitingParty from "./WaitingParty";

const WaitingTablePage = (props) => {
  // const items = props.waitingParties;
  // const listItems = items.map((item) =>
  //   <WaitingParty item={item} key={item.id} />
  // )
  

  return (
    <>
      <div>順番待ち</div>

        <TableContainer component={Paper} sx={{ width: 850, margin: "auto" }}>
          <Table sx={{ minWidth: 300 }} aria-label="waiting-table">
            <TableHead>
              <TableRow>
                <TableCell sx={{width : 150}} align="center">名前</TableCell>
                <TableCell sx={{width : 150}} align="center">人数</TableCell>
                <TableCell sx={{width : 150}} align="center">座席</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <WaitingParty />
            </TableBody>
          </Table>
        </TableContainer>
    </>
  )
}

export default WaitingTablePage