import { Table } from "react-bootstrap";

function CrewRankTable({ dataList }) {
    if(dataList === undefined || dataList.length === 0) return;

    console.log(dataList);

    return(
        <div>
            <Table responsive hover className="rank_table">
                <thead>
                    <tr>
                        <th>순위</th>
                        <th>총 포인트</th>
                        <th>크루명</th>
                    </tr>
                </thead>
                <tbody>
                    {   
                        dataList.length !== 0 ?
                        dataList.map((monthly, i) => {
                            return(
                                i < 7 ?
                                <tr key={i}>
                                    <th>{i+1}</th>
                                    <td>{monthly.monthlyScore}</td>
                                    <td>{monthly.crewName}</td>
                                </tr> : ''
                            );    
                        }) 
                        : ''
                    }
                </tbody>
            </Table>
        </div>
    );
}

export default CrewRankTable;