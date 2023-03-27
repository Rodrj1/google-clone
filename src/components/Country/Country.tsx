'use client';

import { useState } from 'react';

export default function Country() {
  const [country, setCountry] = useState('');

  const getCountry = async () => {
    const response: { country: string } = await fetch(
      `https://extreme-ip-lookup.com/json/?key=${process.env.NEXT_PUBLIC_IP_EXTREME_KEY}`
    ).then((res) => res.json());
    setCountry(response.country);
  };

  getCountry();

  return <h2 className='flex items-center justify-center w-auto max-w-[150px] p-1 rounded-full bg-blue-800 bg-opacity-20'>{country == '' ? 'US' : country}</h2>;
}
