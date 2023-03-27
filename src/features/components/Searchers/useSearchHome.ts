'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export const useSearchHome = () => {
  const [text, setText] = useState('');
  const [loadingRandom, setLoadingRandom] = useState(false);
  const router = useRouter();

  type submitEvent =
    | React.FormEvent<HTMLFormElement>
    | React.MouseEvent<HTMLButtonElement, MouseEvent>;

  type onChangeEvent = React.ChangeEvent<HTMLInputElement>;

  const handleOnSubmit = (e: submitEvent) => {
    e.preventDefault();
    if (text == '') return;
    else router.push(`/search/web?searchTerm=${text}`);
  };

  const handleOnChange = (e: onChangeEvent) => {
    setText(e.target.value);
  };

  const randomSearch = async () => {
    setLoadingRandom(true);

    const response = await fetch('https://random-word-api.herokuapp.com/word')
      .then((res) => res.json())
      .then((resData) => resData[0]);
    if (!response) return;

    router.push(`/search/web?searchTerm=${response}`);
    setLoadingRandom(false);
  };

  return {
    text,
    loadingRandom,
    handleOnChange,
    handleOnSubmit,
    randomSearch,
  };
};
