import React from 'react'
import ethicon from '../../assets/ethicon.svg'
import styled from 'styled-components'
import Button from '../Button/Button'


const SCard = styled.div`
    padding: 24px;
    background: #FFFFFF;
    border-radius: 20px;
    font-size: 12px;
    line-height: 16px;
    margin-right: 10px;
    height: 165px;
    width : 165px;
`
const Card = ({title, amount, currency, percent}) => {
  return (
    <SCard>
        <div className="title">{title}</div>
        {currency !== '%' ?
            <div className="amount-wrapper">
                <img src={ethicon} alt="img" className="eth"/>
                <span className="amount">{amount}{currency}</span>
            </div> :
            <div className="amount-wrapper">
                <span className="amount">+{amount}{currency}</span>
            </div>
        }
        <Button percent={percent}>{percent}%</Button>
    </SCard>
  )
}

export default Card