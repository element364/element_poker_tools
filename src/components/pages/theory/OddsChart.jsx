import React, { Component } from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

const oddsChart = {
    1: {
        flopToTurn: 2.13,
        turnToRiver: 2.17,
        flopToRiver: 4.26
    },
    2: {
        flopToTurn: 4.26,
        turnToRiver: 4.35,
        flopToRiver: 8.42
    },
    3: {
        flopToTurn: 6.38,
        turnToRiver: 6.52,
        flopToRiver: 12.49
    },
    4: {
        flopToTurn: 8.51,
        turnToRiver: 8.70,
        flopToRiver: 16.47
    },
    5: {
        flopToTurn: 10.64,
        turnToRiver: 10.87,
        flopToRiver: 20.35
    },
    6: {
        flopToTurn: 12.77,
        turnToRiver: 13.04,
        flopToRiver: 24.14
    },
    7: {
        flopToTurn: 14.89,
        turnToRiver: 15.22,
        flopToRiver: 27.84
    },
    8: {
        flopToTurn: 17.02,
        turnToRiver: 17.39,
        flopToRiver: 31.45
    },
    9: {
        flopToTurn: 19.15,
        turnToRiver: 19.57,
        flopToRiver: 34.97
    },
    10: {
        flopToTurn: 21.28,
        turnToRiver: 21.74,
        flopToRiver: 38.39
    },
    11: {
        flopToTurn: 23.40,
        turnToRiver: 23.91,
        flopToRiver: 41.72
    },
    12: {
        flopToTurn: 25.53,
        turnToRiver: 26.09,
        flopToRiver: 44.96
    },
    13: {
        flopToTurn: 27.56,
        turnToRiver: 28.26,
        flopToRiver: 48.10
    },
    14: {
        flopToTurn: 29.79,
        turnToRiver: 30.43,
        flopToRiver: 51.16
    },
    15: {
        flopToTurn: 31.91,
        turnToRiver: 32.61,
        flopToRiver: 54.12
    },
    16: {
        flopToTurn: 34.04,
        turnToRiver: 34.78,
        flopToRiver: 56.98
    },
    17: {
        flopToTurn: 36.17,
        turnToRiver: 36.96,
        flopToRiver: 59.76
    },
    18: {
        flopToTurn: 38.30,
        turnToRiver: 39.13,
        flopToRiver: 62.44
    },
    19: {
        flopToTurn: 40.43,
        turnToRiver: 41.30,
        flopToRiver: 65.03
    },
    20: {
        flopToTurn: 42.55,
        turnToRiver: 43.48,
        flopToRiver: 67.53
    },
    21: {
        flopToTurn: 44.68,
        turnToRiver: 45.65,
        flopToRiver: 69.94
    },
    22: {
        flopToTurn: 46.81,
        turnToRiver: 47.83,
        flopToRiver: 72.25
    }
};

export default class OddsChart extends Component {
    render() {
        return (
            <Table>
                <TableHeader
                    displaySelectAll={false}
                    adjustForCheckbox={false}
                >
                    <TableRow>
                        <TableHeaderColumn>Аутов</TableHeaderColumn>
                        <TableHeaderColumn>Флоп -> Тёрн</TableHeaderColumn>
                        <TableHeaderColumn>Тёрн -> Ривер</TableHeaderColumn>
                        <TableHeaderColumn>Флоп -> Ривер</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody
                    displayRowCheckbox={false}
                >
                    {Object.keys(oddsChart).map(odds => {
                        const oddsValues = oddsChart[odds];

                        return <TableRow>
                            <TableRowColumn>{odds}</TableRowColumn>
                            <TableRowColumn>{oddsValues.flopToTurn}%</TableRowColumn>
                            <TableRowColumn>{oddsValues.turnToRiver}%</TableRowColumn>
                            <TableRowColumn>{oddsValues.flopToRiver}%</TableRowColumn>
                        </TableRow>
                    })}
                </TableBody>
            </Table>
        );
    }
}