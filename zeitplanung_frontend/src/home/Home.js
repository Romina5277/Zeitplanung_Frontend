import React, { Component } from 'react';
// Table
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            rows: [
                this.createData("work", "08:00 Uhr", "17:00 Uhr", "21.10.2019", "25.10.2019", "nein"),
                this.createData("HA", "18:00 Uhr", "19:00 Uhr", "21.10.2019", "21.10.2019", "nein"),
                this.createData("VA", "08:00 Uhr", "17:00 Uhr", "25.10.2019", "25.10.2019", "nein"),
                this.createData("Abendstall", "18:00 Uhr", "20:00 Uhr", "24.10.2019", "24.10.2019", "nein"),
            ]
        }
    }

    createData(name, zeitVon, zeitBis, datumVon, datumBis, ganztaegig){
        return {name, zeitVon, zeitBis, datumVon, datumBis, ganztaegig};
    }

    render() {

        const useStyles = makeStyles({
            root: {
                widht: '100%',
                overflow: 'auto',
            },
            table: {
                minWidth: 650,
            },
        });

        // const classes = useStyles();

        return (
            <div className="App">
                <h3>Home</h3>
                <br />
                <Paper className={useStyles.root}>
                    <Table className={useStyles.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell align="right">Zeit von</TableCell>
                                <TableCell align="right">Zeit bis</TableCell>
                                <TableCell align="right">Datum von</TableCell>
                                <TableCell align="right">Datum bis</TableCell>
                                <TableCell align="right">Ganztätig</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.rows.map(row => (
                                <TableRow key={row.name}>
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right">{row.zeitVon}</TableCell>
                                    <TableCell align="right">{row.zeitBis}</TableCell>
                                    <TableCell align="right">{row.datumVon}</TableCell>
                                    <TableCell align="right">{row.datumBis}</TableCell>
                                    <TableCell align="right">{row.ganztaegig}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Paper>
            </div>
        );
    }
}

export default Home;
