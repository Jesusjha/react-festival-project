 import React from 'react'
import { useParams } from "react-router-dom"

const TicketDetail = () => {

  const params = useParams();

  return (
    <div>{params.ticketUrl}</div>
  )
}

export default TicketDetail