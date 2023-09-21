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

  return <span className='w-auto'>{country == '' ? 'US' : country.toUpperCase()}</span>;
}
