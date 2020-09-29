import React from 'react'
import Table from 'harmonium/lib/Table'
import EditableCellContainer from '../containers/EditableCellContainer'

const Workcenters = ({ workcenters, headers, update }) => {
  return(
        <Table striped>
          <Table.Head>
            <Table.Row>
              {headers.map(header => <Table.Header key = {header.key}>{header.title}</Table.Header>)}
            </Table.Row>
          </Table.Head>
          <Table.Body>
            {workcenters.map(workcenter => 
              <Table.Row key = {workcenter.id}>
                {headers.map(header => 
                  <EditableCellContainer
                    update = {update}
                    id = {workcenter.id}
                    parameter = {header.key}
                    key = {`${workcenter.id}#${header.key}`}
                  >
                    {workcenter[header.key]}
                  </EditableCellContainer>)}
              </Table.Row>
            )}
          </Table.Body>
        </Table>
  )
}

export default Workcenters