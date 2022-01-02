import React from 'react'

export async function getServerSideProps(context) {
    const { id } = context.query;
  
    const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`);
  
    const data = await res.json();
  
    return {
        props: {
            coin: data
        }
    };
}
  

const Coin = ({ coin }) => {
    return (
        <div>
            {coin.name}
        </div>
    )
}

export default Coin
